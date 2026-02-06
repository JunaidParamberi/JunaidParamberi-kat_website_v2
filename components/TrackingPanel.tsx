
import React, { useState } from 'react';
import { Search, MapPin, Package, Clock, CheckCircle2 } from 'lucide-react';
import { TrackingStatus } from '../types';

const MOCK_TRACKING: Record<string, TrackingStatus> = {
  'KAT-12345': {
    id: 'KAT-12345',
    origin: 'Shanghai, China',
    destination: 'Dubai, UAE',
    status: 'In Transit',
    currentLocation: 'Port of Singapore',
    estimatedArrival: 'Nov 24, 2023',
    milestones: [
      { date: 'Nov 15, 2023', location: 'Shanghai Port', description: 'Container loaded onto vessel' },
      { date: 'Nov 18, 2023', location: 'Singapore', description: 'Transshipment in progress' },
      { date: 'Nov 12, 2023', location: 'Wuxi Warehouse', description: 'Pick-up completed' }
    ]
  }
};

const TrackingPanel: React.FC = () => {
  const [trackingId, setTrackingId] = useState('');
  const [result, setResult] = useState<TrackingStatus | null>(null);
  const [error, setError] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const found = MOCK_TRACKING[trackingId.toUpperCase()];
    if (found) {
      setResult(found);
      setError('');
    } else {
      setResult(null);
      setError('Tracking number not found. Try "KAT-12345"');
    }
  };

  return (
    <section id="tracking" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 mb-4">Track Your Shipment</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">Get real-time updates and precise location tracking for your global cargo.</p>
        </div>

        <div className="max-w-3xl mx-auto">
          <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-3 mb-8">
            <div className="relative flex-grow">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Enter Tracking ID (e.g. KAT-12345)"
                className="w-full pl-12 pr-4 py-4 rounded-2xl border-2 border-slate-100 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all"
                value={trackingId}
                onChange={(e) => setTrackingId(e.target.value)}
              />
            </div>
            <button className="bg-slate-900 text-white px-8 py-4 rounded-2xl font-bold hover:bg-slate-800 transition-all flex items-center justify-center">
              Track Now
            </button>
          </form>

          {error && <p className="text-red-500 text-center mb-4">{error}</p>}

          {result && (
            <div className="bg-slate-50 rounded-3xl p-8 border border-slate-200 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 border-b border-slate-200 pb-8">
                <div>
                  <p className="text-sm text-slate-500 mb-1 uppercase tracking-wider font-semibold">Current Status</p>
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></span>
                    <h3 className="text-2xl font-bold text-slate-900">{result.status}</h3>
                  </div>
                </div>
                <div>
                  <p className="text-sm text-slate-500 mb-1 uppercase tracking-wider font-semibold">Estimated Arrival</p>
                  <h3 className="text-2xl font-bold text-slate-900">{result.estimatedArrival}</h3>
                </div>
              </div>

              <div className="space-y-8">
                {result.milestones.map((milestone, idx) => (
                  <div key={idx} className="flex gap-6">
                    <div className="flex flex-col items-center">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center z-10 ${idx === 0 ? 'bg-blue-600 text-white' : 'bg-slate-200 text-slate-500'}`}>
                        {idx === 0 ? <Package className="w-4 h-4" /> : <CheckCircle2 className="w-4 h-4" />}
                      </div>
                      {idx !== result.milestones.length - 1 && <div className="w-0.5 h-full bg-slate-200 my-1"></div>}
                    </div>
                    <div>
                      <div className="flex items-center gap-2 text-sm text-slate-500 mb-1">
                        <Clock className="w-4 h-4" />
                        <span>{milestone.date}</span>
                        <MapPin className="ml-2 w-4 h-4" />
                        <span>{milestone.location}</span>
                      </div>
                      <h4 className={`font-bold ${idx === 0 ? 'text-slate-900' : 'text-slate-600'}`}>{milestone.description}</h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default TrackingPanel;
