
import { GoogleGenAI } from "@google/genai";
import * as Constants from '../constants';

// GeminiService handles interactions with the Google GenAI API for KAT Group advisory
export class GeminiService {
  /**
   * Generates a Knowledge Base string from the application constants to ground the AI.
   */
  private getKnowledgeBase(): string {
    const { HERO_CONTENT, ABOUT_CONTENT, SERVICES_DATA, SECTORS, PORTFOLIO, BLOG_POSTS, FOOTER_CONTENT } = Constants;

    return `
      WEBSITE KNOWLEDGE BASE:
      
      ABOUT KAT GROUP:
      - Founded: 2023, HQ in Sharjah (Sharjah Publishing City Free Zone).
      - Regional Office: Dubai (Al Hilal Bank Building, near Qusais Metro).
      - Mission: ${ABOUT_CONTENT.description}
      - Core Values: Precision, Scalability, Commitment, Quality (ISO 9001 certified).
      - Key Quote: "${ABOUT_CONTENT.quote}"
      
      SERVICES OFFERED:
      ${SERVICES_DATA.map(s => `
        - ${s.title}: ${s.shortDescription}. 
          Details: ${s.longDescription}
          Core Services: ${s.coreServices.map(cs => cs.title).join(', ')}
          Features: ${s.features.join(', ')}
      `).join('\n')}
      
      SECTORS OF EXPERTISE:
      ${SECTORS.map(sec => `
        - ${sec.name}: ${sec.description}. ${sec.longDescription || ''}
          Technical Specs: ${sec.technicalSpecs?.join(', ') || 'Standard Industrial Protocols'}
      `).join('\n')}
      
      PORTFOLIO & TRACK RECORD (CASE STUDIES):
      ${PORTFOLIO.map(p => `
        - Project: ${p.title} (${p.category}). 
          Impact: ${p.description}
          Challenge: ${p.fullCaseStudy?.challenge}
          Solution: ${p.fullCaseStudy?.solution}
          Stats: ${p.fullCaseStudy?.stats.map(st => `${st.label}: ${st.value}`).join(', ')}
      `).join('\n')}
      
      LATEST INSIGHTS & ARTICLES:
      ${BLOG_POSTS.map(post => `
        - Article: ${post.title} (Category: ${post.category}). 
          Excerpt: ${post.excerpt}
          Tags: ${post.tags.join(', ')}
      `).join('\n')}
      
      CONTACT INFO:
      - Phone: ${FOOTER_CONTENT.phone}
      - Email: ${FOOTER_CONTENT.email}
      - Sharjah: ${FOOTER_CONTENT.hq_sharjah}
      - Dubai: ${FOOTER_CONTENT.hq_dubai}
    `;
  }

  /**
   * Generates advice for users based on their message and chat history.
   */
  async getAdvice(userMessage: string, history: { role: 'user' | 'model'; text: string }[]) {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const knowledgeBase = this.getKnowledgeBase();
    
    try {
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: [
            ...history.map(h => ({ 
              role: h.role === 'user' ? 'user' : 'model', 
              parts: [{ text: h.text }] 
            })),
            { role: 'user', parts: [{ text: userMessage }] }
        ],
        config: {
          systemInstruction: `You are the KAT Group Industrial AI Expert.
          Answer queries using ONLY the provided Knowledge Base.
          
          FORMATTING RULES:
          1. Use **bold text** for important terms or titles.
          2. Use bullet points for lists (e.g., services, features).
          3. Structure your response into short, readable paragraphs.
          4. If the user wants to "Request a Quote", "Get Pricing", or "Hire", suggest they use the "Request Quote" button in the chat interface.
          
          KNOWLEDGE BASE:
          ${knowledgeBase}`,
        },
      });

      return response.text || "I'm sorry, I couldn't process that search request.";
    } catch (error) {
      console.error("Gemini Search Error:", error);
      return "I'm having trouble connecting to the knowledge base. Please contact our Dubai office directly for immediate assistance.";
    }
  }
}

export const geminiService = new GeminiService();
