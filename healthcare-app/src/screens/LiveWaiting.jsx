import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, MoreHorizontal } from 'lucide-react';

export default function LiveWaiting() {
  const navigate = useNavigate();
  const [notifyEnabled, setNotifyEnabled] = useState(false);

  return (
    <div className="h-full bg-gray-50 flex flex-col font-sans relative">
      <div className="bg-primary-500 text-white p-4 pt-12 pb-6">
        <div className="flex justify-between items-center mb-3">
          <button onClick={() => navigate(-1)} className="flex items-center text-white/90 text-sm">
            <ChevronLeft size={16} /> Back
          </button>
          <MoreHorizontal size={20} className="text-white/90" />
        </div>
        <h1 className="text-xl font-bold">Waiting Room</h1>
        <p className="text-xs text-white/80 mt-1">Dr. Amina Uwamahoro - Neurology</p>
      </div>

      <div className="flex-1 overflow-y-auto p-5 pb-24 space-y-4">
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col items-center">
          <div className="relative w-32 h-32 flex flex-col items-center justify-center mb-4">
            <svg className="absolute inset-0 w-full h-full transform -rotate-90">
              <circle cx="64" cy="64" r="56" stroke="#f1f5f9" strokeWidth="8" fill="none" />
              <circle cx="64" cy="64" r="56" stroke="#2B92B1" strokeWidth="8" fill="none" strokeDasharray="351.8" strokeDashoffset="100" strokeLinecap="round" />
            </svg>
            <h2 className="text-3xl font-black text-gray-800">~8 <span className="text-lg">min</span></h2>
          </div>
          <p className="text-xs text-gray-500 font-medium mb-6">Estimated wait time</p>
          
          <div className="w-full space-y-3">
            <div className="flex justify-between text-xs">
              <span className="text-gray-500">Your position</span>
              <span className="font-bold text-primary-600 bg-primary-50 px-2 py-0.5 rounded">#2 (3 in queue)</span>
            </div>
            <div className="flex justify-between text-xs">
              <span className="text-gray-500">Current patient</span>
              <span className="font-bold text-gray-800">Patient #1 (in progress)</span>
            </div>
            <div className="flex justify-between text-xs">
              <span className="text-gray-500">Your appointment</span>
              <span className="font-bold text-gray-800">2:30 PM</span>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 rounded-2xl p-4 border border-blue-100">
          <h3 className="font-bold text-blue-800 text-sm mb-2">While You Wait</h3>
          <ul className="text-xs text-blue-700 space-y-2 list-disc pl-4">
            <li>Prepare for your visit:</li>
            <li>Have your previous prescriptions ready</li>
            <li>Note your symptoms since yesterday</li>
            <li>Drink water if you haven't recently</li>
          </ul>
        </div>

        <div className="bg-yellow-50 rounded-2xl p-4 border border-yellow-200 text-center">
          <p className="text-sm font-bold text-yellow-800 mb-1">Need to step out?</p>
          <p className="text-xs text-yellow-700">
            {notifyEnabled ? "You're all set — we'll notify you 2 mins before your turn." : 'Enable notifications to get a 2-minute reminder.'}
          </p>
        </div>
      </div>

      <div className="p-4 bg-white border-t border-gray-100 absolute bottom-0 w-full z-10 text-center">
        <button
          onClick={() => setNotifyEnabled((prev) => !prev)}
          className="w-full bg-white border-2 border-primary-500 text-primary-600 py-3.5 rounded-xl font-bold shadow-sm mb-2"
        >
          {notifyEnabled ? 'Notifications enabled' : 'Notify me when it is my turn'}
        </button>
        <button
          onClick={() => navigate('/summary')}
          className="w-full text-xs font-semibold text-primary-600 mb-2"
        >
          Continue to visit summary
        </button>
        <p className="text-[10px] text-gray-400">
          {notifyEnabled ? 'We will alert you before your turn.' : 'Dr is on schedule. Wait inside clinic.'}
        </p>
      </div>
    </div>
  );
}
