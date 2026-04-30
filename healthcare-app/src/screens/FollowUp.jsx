import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, MoreHorizontal } from 'lucide-react';

export default function FollowUp() {
  const navigate = useNavigate();
  const [toggles, setToggles] = useState({ p: true, v: true, h: false });

  const toggle = (k) => setToggles({...toggles, [k]: !toggles[k]});

  return (
    <div className="h-full bg-gray-50 flex flex-col font-sans relative">
      <div className="bg-primary-500 text-white p-4 pt-12 pb-6">
        <div className="flex justify-between items-center mb-3">
          <button onClick={() => navigate(-1)} className="flex items-center text-white/90 text-sm">
            <ChevronLeft size={16} /> Back
          </button>
          <MoreHorizontal size={20} className="text-white/90" />
        </div>
        <h1 className="text-xl font-bold">Follow-up & Reminders</h1>
        <p className="text-xs text-white/80 mt-1">Stay on track with your recovery</p>
      </div>

      <div className="flex-1 overflow-y-auto p-5 pb-24 space-y-4">
        <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
          <h3 className="font-bold text-gray-800 text-sm mb-4">Medication Schedule</h3>
          
          <div className="space-y-4">
            <div className="flex justify-between items-center pb-4 border-b border-gray-50">
              <div className="flex gap-3 items-center">
                <span className="text-xl">💊</span>
                <div>
                  <p className="font-bold text-gray-800 text-xs">Paracetamol</p>
                  <p className="text-[10px] text-gray-500">8:00 AM • 4:00 PM • 12:00 AM</p>
                </div>
              </div>
              <div onClick={() => toggle('p')} className={`w-10 h-6 rounded-full relative cursor-pointer transition-colors ${toggles.p ? 'bg-primary-500' : 'bg-gray-200'}`}>
                <div className={`w-4 h-4 bg-white rounded-full absolute top-1 transition-all ${toggles.p ? 'right-1' : 'left-1'}`}></div>
              </div>
            </div>
            
            <div className="flex justify-between items-center pb-4 border-b border-gray-50">
              <div className="flex gap-3 items-center">
                <span className="text-xl">💊</span>
                <div>
                  <p className="font-bold text-gray-800 text-xs">Vitamin B Complex</p>
                  <p className="text-[10px] text-gray-500">8:00 AM (After Breakfast)</p>
                </div>
              </div>
              <div onClick={() => toggle('v')} className={`w-10 h-6 rounded-full relative cursor-pointer transition-colors ${toggles.v ? 'bg-primary-500' : 'bg-gray-200'}`}>
                <div className={`w-4 h-4 bg-white rounded-full absolute top-1 transition-all ${toggles.v ? 'right-1' : 'left-1'}`}></div>
              </div>
            </div>
            
            <div className="flex justify-between items-center">
              <div className="flex gap-3 items-center">
                <span className="text-xl">💧</span>
                <div>
                  <p className="font-bold text-gray-800 text-xs">Hydration reminder</p>
                  <p className="text-[10px] text-gray-500">Every 2 hours</p>
                </div>
              </div>
              <div onClick={() => toggle('h')} className={`w-10 h-6 rounded-full relative cursor-pointer transition-colors ${toggles.h ? 'bg-primary-500' : 'bg-gray-200'}`}>
                <div className={`w-4 h-4 bg-white rounded-full absolute top-1 transition-all ${toggles.h ? 'right-1' : 'left-1'}`}></div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
          <h3 className="font-bold text-gray-800 text-sm mb-3">Follow-up Appointment</h3>
          <div className="bg-blue-50 rounded-xl p-3 border border-blue-100 flex justify-between items-center">
            <div>
              <p className="font-bold text-blue-800 text-xs">Check-up in 7 days</p>
              <p className="text-[10px] text-blue-600 mt-0.5">Wednesday, May 5 • King Faisal Hospital</p>
            </div>
            <button className="bg-primary-500 text-white text-[10px] font-bold px-3 py-1.5 rounded-lg shadow-sm">
              Book
            </button>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
          <h3 className="font-bold text-gray-800 text-sm mb-3">Recovery Tips</h3>
          <ul className="space-y-2 text-xs">
            <li className="flex gap-2">
              <span className="text-lg">😴</span>
              <div>
                <p className="font-bold text-gray-800">Rest</p>
                <p className="text-[10px] text-gray-500">Aim for 8 hours of sleep a night.</p>
              </div>
            </li>
            <li className="flex gap-2">
              <span className="text-lg">💧</span>
              <div>
                <p className="font-bold text-gray-800">Hydrate</p>
                <p className="text-[10px] text-gray-500">Drink 2L of water throughout the day.</p>
              </div>
            </li>
            <li className="flex gap-2">
              <span className="text-lg">📵</span>
              <div>
                <p className="font-bold text-gray-800">Reduce screen time</p>
                <p className="text-[10px] text-gray-500">Especially 1 hour before bed.</p>
              </div>
            </li>
          </ul>
        </div>

        <div className="bg-green-50 rounded-2xl p-4 border border-green-200">
          <p className="font-bold text-green-800 text-xs mb-2">Recovery Progress - Day 1 of 7</p>
          <div className="h-1.5 w-full bg-green-200 rounded-full mb-2">
            <div className="h-1.5 bg-green-500 rounded-full w-[14%]"></div>
          </div>
          <p className="text-[10px] text-green-700 text-center">14% complete. Keep it up!</p>
        </div>
      </div>

      <div className="p-4 bg-white border-t border-gray-100 absolute bottom-0 w-full z-10">
        <button onClick={() => navigate('/')} className="w-full bg-green-600 text-white py-3.5 rounded-xl font-bold shadow-md">
          All done — Go to Dashboard
        </button>
      </div>
    </div>
  );
}
