import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, MoreHorizontal, Star } from 'lucide-react';

export default function PostVisitSummary() {
  const navigate = useNavigate();
  const [rating, setRating] = useState(5);

  return (
    <div className="h-full bg-gray-50 flex flex-col font-sans relative">
      <div className="bg-primary-500 text-white p-4 pt-12 pb-6">
        <div className="flex justify-between items-center mb-3">
          <button onClick={() => navigate(-1)} className="flex items-center text-white/90 text-sm">
            <ChevronLeft size={16} /> Back
          </button>
          <MoreHorizontal size={20} className="text-white/90" />
        </div>
        <h1 className="text-xl font-bold">Visit Summary</h1>
        <p className="text-xs text-white/80 mt-1">April 28, 2026 - Dr. Amina Uwamahoro</p>
      </div>

      <div className="flex-1 overflow-y-auto p-5 pb-24 space-y-4">
        <div className="bg-green-50 rounded-2xl p-4 border border-green-200 text-center">
          <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto mb-2 shadow-sm text-sm">✓</div>
          <h3 className="font-bold text-green-800 text-sm">Visit Complete!</h3>
          <p className="text-[10px] text-green-700 mt-1">Great job taking control of your health</p>
        </div>

        <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
          <h3 className="font-bold text-gray-800 text-sm mb-3">Diagnosis</h3>
          <p className="text-xs text-gray-500 uppercase tracking-wider font-bold mb-1">CONDITION</p>
          <p className="text-sm font-bold text-gray-800 mb-3">Tension Headache + Mild Fever</p>
          
          <p className="text-[10px] text-gray-500 uppercase tracking-wider font-bold mb-1">DOCTOR'S NOTES</p>
          <p className="text-xs text-gray-600 bg-gray-50 p-3 rounded-xl border border-gray-100">
            Rest, hydration & pain relievers. Follow up in 7 days.
          </p>
        </div>

        <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
          <h3 className="font-bold text-gray-800 text-sm mb-3">Prescriptions</h3>
          
          <div className="space-y-3">
            <div className="flex justify-between items-center pb-3 border-b border-gray-50">
              <div className="flex gap-3 items-center">
                <span className="text-xl">💊</span>
                <div>
                  <p className="font-bold text-gray-800 text-xs">Paracetamol 500mg</p>
                  <p className="text-[10px] text-gray-500">1 pill every 8 hours • 3 days</p>
                </div>
              </div>
              <span className="bg-primary-50 text-primary-600 text-[10px] font-bold px-2 py-1 rounded">Active</span>
            </div>
            
            <div className="flex justify-between items-center pb-3 border-b border-gray-50">
              <div className="flex gap-3 items-center">
                <span className="text-xl">💊</span>
                <div>
                  <p className="font-bold text-gray-800 text-xs">Vitamin B Complex</p>
                  <p className="text-[10px] text-gray-500">1 pill daily • 7 days</p>
                </div>
              </div>
              <span className="bg-primary-50 text-primary-600 text-[10px] font-bold px-2 py-1 rounded">Active</span>
            </div>
            
            <div className="flex justify-between items-center">
              <div className="flex gap-3 items-center">
                <span className="text-xl">💧</span>
                <div>
                  <p className="font-bold text-gray-800 text-xs">Oral Rehydration Salts</p>
                  <p className="text-[10px] text-gray-500">Mix with 1L water</p>
                </div>
              </div>
              <span className="bg-yellow-50 text-yellow-600 border border-yellow-200 text-[10px] font-bold px-2 py-1 rounded">PRN</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 text-center">
          <h3 className="font-bold text-gray-800 text-sm mb-1">Rate Your Experience</h3>
          <p className="text-[10px] text-gray-400 mb-3">How was your visit with Dr. Amina?</p>
          <div className="flex justify-center gap-1">
            {[1, 2, 3, 4, 5].map(s => (
              <Star key={s} size={24} onClick={() => setRating(s)} className={s <= rating ? 'text-yellow-400 fill-yellow-400 cursor-pointer' : 'text-gray-300 cursor-pointer'} />
            ))}
          </div>
        </div>
      </div>

      <div className="p-4 bg-white border-t border-gray-100 absolute bottom-0 w-full z-10">
        <button onClick={() => navigate('/followup')} className="w-full bg-primary-500 text-white py-3.5 rounded-xl font-bold shadow-md">
          Set Medication Reminders {'>'}
        </button>
      </div>
    </div>
  );
}
