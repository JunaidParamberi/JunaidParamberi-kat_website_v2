
import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User, Loader2, FileText, CheckCircle2, ChevronRight, HelpCircle } from 'lucide-react';
import { geminiService } from '../services/geminiService';
import { Message, ServiceType } from '../types';

const SUGGESTED_QUESTIONS = [
  "Technical Services",
  "Manpower Hire",
  "Oil & Gas Specs",
  "Get a Quote"
];

const MessageBubble: React.FC<{ message: Message; onQuoteRequest?: () => void }> = ({ message, onQuoteRequest }) => {
  const isUser = message.role === 'user';
  
  const formatText = (text: string) => {
    return text.split('\n').map((line, i) => {
      // Bold handling
      let formattedLine = line.replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold text-slate-900">$1</strong>');
      
      // List handling
      if (line.trim().startsWith('- ') || line.trim().startsWith('* ')) {
        return (
          <li key={i} className="ml-4 mb-1 list-disc text-slate-600">
            <span dangerouslySetInnerHTML={{ __html: formattedLine.replace(/^[-*]\s/, '') }} />
          </li>
        );
      }
      
      if (!line.trim()) return <div key={i} className="h-2" />;
      
      return (
        <p key={i} className={`mb-1.5 last:mb-0 leading-relaxed ${isUser ? 'text-white' : 'text-slate-600'}`} 
           dangerouslySetInnerHTML={{ __html: formattedLine }} 
        />
      );
    });
  };

  return (
    <div className={`flex w-full mb-3 ${isUser ? 'justify-end' : 'justify-start'}`}>
      <div className={`flex gap-2 max-w-[90%] sm:max-w-[85%] md:max-w-[80%] ${isUser ? 'flex-row-reverse' : 'flex-row'}`}>
        {!isUser && (
          <div className="w-6 h-6 rounded-lg bg-slate-900 text-white flex items-center justify-center shrink-0 mt-1 shadow-sm">
            <Bot className="w-3.5 h-3.5" />
          </div>
        )}
        <div className={`px-4 py-3 rounded-2xl text-[13px] border ${
          isUser 
            ? 'bg-blue-600 text-white border-blue-500 rounded-tr-none shadow-md' 
            : 'bg-white text-slate-800 border-slate-100 rounded-tl-none shadow-sm'
        }`}>
          {message.type === 'text' && (
            <div className="whitespace-pre-wrap">{formatText(message.text)}</div>
          )}
          
          {message.type === 'form-quote' && (
            <div className="space-y-3 min-w-[180px] sm:min-w-[240px]">
              <div className="flex items-center gap-2 text-blue-600 font-bold border-b border-slate-50 pb-2 mb-2 uppercase text-[10px] tracking-wider">
                <FileText className="w-4 h-4" /> Quote Inquiry
              </div>
              <form onSubmit={(e) => { e.preventDefault(); onQuoteRequest?.(); }} className="space-y-2">
                <input required placeholder="Email Address" type="email" className="w-full p-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-500 outline-none transition-all text-slate-900" />
                <select required className="w-full p-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-500 outline-none transition-all text-slate-900 appearance-none cursor-pointer">
                  <option value="" disabled selected>Service Requirement</option>
                  {Object.values(ServiceType).map(s => <option key={s} value={s}>{s}</option>)}
                </select>
                <textarea required placeholder="Project details..." rows={2} className="w-full p-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-500 outline-none transition-all text-slate-900 resize-none" />
                <button type="submit" className="w-full bg-slate-900 text-white py-3 rounded-xl font-bold text-[10px] uppercase tracking-widest hover:bg-blue-600 transition-all flex items-center justify-center gap-2">
                  Send <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </form>
            </div>
          )}

          {message.type === 'success' && (
            <div className="flex items-center gap-2 py-1 text-emerald-600">
              <CheckCircle2 className="w-4 h-4 shrink-0" />
              <span className="text-[11px] font-bold">Request received.</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const AIAdvisor: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    { 
      role: 'model', 
      text: 'Greetings. I am the **KAT Group Advisor**. How may I support your technical or manpower inquiries today?', 
      timestamp: new Date(),
      type: 'text'
    }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        top: scrollRef.current.scrollHeight,
        behavior: 'smooth'
      });
    }
  }, [messages, isLoading]);

  useEffect(() => {
    if (isOpen && window.innerWidth < 640) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const handleSend = async (customInput?: string) => {
    const messageText = customInput || input;
    if (!messageText.trim() || isLoading) return;

    const userMsg: Message = { role: 'user', text: messageText, timestamp: new Date(), type: 'text' };
    
    if (messageText.toLowerCase().includes('quote') || messageText.toLowerCase().includes('price')) {
      setMessages(prev => [...prev, userMsg, { role: 'model', text: '', timestamp: new Date(), type: 'form-quote' }]);
      setInput('');
      return;
    }

    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    const history = messages.filter(m => m.type === 'text').map(m => ({ role: m.role, text: m.text }));
    const response = await geminiService.getAdvice(messageText, history);
    
    setMessages(prev => [...prev, { role: 'model', text: response, timestamp: new Date(), type: 'text' }]);
    setIsLoading(false);
  };

  const handleQuoteSubmit = () => {
    setMessages(prev => [...prev, { role: 'model', text: 'Acknowledgment received. Our team will reach out shortly.', timestamp: new Date(), type: 'success' }]);
  };

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-[200]">
      {/* Floating Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95 border-2 border-white z-[210] ${
          isOpen ? 'bg-slate-900 text-white rotate-90' : 'bg-blue-600 text-white'
        }`}
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </button>

      {/* Responsive Chat Container */}
      <div className={`
        fixed sm:absolute
        inset-0 sm:inset-auto sm:bottom-20 sm:right-0 
        w-full h-full sm:w-[360px] md:w-[380px] sm:h-[580px] sm:max-h-[80vh]
        bg-white sm:rounded-3xl 
        shadow-2xl flex flex-col overflow-hidden 
        transition-all duration-300 ease-out transform origin-bottom-right
        ${isOpen ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-12 opacity-0 scale-95 pointer-events-none'}
      `}>
        
        {/* Compact Header */}
        <div className="px-5 py-4 bg-slate-900 text-white flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="bg-blue-600 p-1.5 rounded-lg">
              <Bot className="w-4 h-4 text-white" />
            </div>
            <div>
              <h3 className="font-bold text-[13px] leading-tight tracking-tight">Industrial Advisor</h3>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                <span className="text-[9px] text-slate-400 font-bold uppercase tracking-widest">Active</span>
              </div>
            </div>
          </div>
          <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-white/10 rounded-xl transition-colors">
            <X className="w-4 h-4 text-slate-400" />
          </button>
        </div>

        {/* Message Feed */}
        <div ref={scrollRef} className="flex-grow overflow-y-auto px-4 py-6 bg-slate-50/40 scrollbar-hide">
          {messages.map((m, idx) => (
            <MessageBubble key={idx} message={m} onQuoteRequest={handleQuoteSubmit} />
          ))}
          {isLoading && (
            <div className="flex items-center gap-2 text-[10px] text-slate-400 font-bold uppercase tracking-widest pl-10 mb-4 italic">
              <Loader2 className="w-3 h-3 animate-spin" />
              Processing...
            </div>
          )}
        </div>

        {/* Action Area */}
        <div className="p-4 bg-white border-t border-slate-100 space-y-3 shrink-0">
          
          {/* Quick Actions */}
          <div className="flex gap-2 overflow-x-auto pb-1 no-scrollbar -mx-1 px-1">
            {SUGGESTED_QUESTIONS.map((q, i) => (
              <button
                key={i}
                onClick={() => handleSend(q)}
                className="whitespace-nowrap px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-blue-50 text-slate-600 hover:text-blue-600 text-[10px] font-bold transition-all border border-slate-200 shrink-0"
              >
                {q}
              </button>
            ))}
          </div>

          <div className="relative">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask a question..."
              className="w-full pl-4 pr-12 py-3 bg-slate-50 border border-slate-200 rounded-xl text-[13px] focus:border-blue-500 focus:bg-white outline-none transition-all text-slate-900 shadow-inner"
            />
            <button
              onClick={() => handleSend()}
              disabled={isLoading || !input.trim()}
              className="absolute right-1 top-1/2 -translate-y-1/2 w-9 h-9 bg-slate-900 text-white rounded-lg flex items-center justify-center disabled:opacity-20 hover:bg-blue-600 transition-all shadow-md active:scale-95"
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          </div>
          <p className="text-[8px] text-center text-slate-400 font-bold uppercase tracking-[0.2em]">
            Elite Technical Support Portal
          </p>
        </div>
      </div>

      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        .scrollbar-hide::-webkit-scrollbar { width: 4px; }
        .scrollbar-hide::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 10px; }
      `}</style>
    </div>
  );
};

export default AIAdvisor;
