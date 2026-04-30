import { useNavigate } from 'react-router-dom';
import { ChevronLeft, MoreHorizontal, Check } from 'lucide-react';

export default function Confirmation() {
  const navigate = useNavigate();

  return (
    <div className="h-full bg-gray-50 flex flex-col font-sans relative">
      <div className="bg-primary-500 text-white p-4 pt-12 pb-6">
        <div className="flex justify-between items-center mb-3">
          <button onClick={() => navigate(-1)} className="flex items-center text-white/90 text-sm">
            <ChevronLeft size={16} /> Back
          </button>
          <MoreHorizontal size={20} className="text-white/90" />
        </div>
        <h1 className="text-xl font-bold">Appointment Confirmed</h1>
        <p className="text-xs text-white/80 mt-1">Dr. Amina Uwamahoro - Neurologist</p>
      </div>

      <div className="flex-1 overflow-y-auto p-5 pb-24 space-y-4">
        <div className="flex flex-col items-center justify-center py-4">
          <div className="w-16 h-16 bg-green-100 text-green-500 rounded-full flex items-center justify-center mb-3">
            <Check size={32} strokeWidth={3} />
          </div>
          <h2 className="text-lg font-bold text-green-600">Booking Confirmed!</h2>
        </div>

        <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-3">APPOINTMENT DETAILS</p>
          <div className="space-y-3 text-xs">
            <div className="flex justify-between border-b border-gray-50 pb-2">
              <span className="text-gray-500">Date</span>
              <span className="font-bold text-gray-800">Wednesday, April 28</span>
            </div>
            <div className="flex justify-between border-b border-gray-50 pb-2">
              <span className="text-gray-500">Time</span>
              <span className="font-bold text-gray-800">2:30 PM</span>
            </div>
            <div className="flex justify-between border-b border-gray-50 pb-2">
              <span className="text-gray-500">Doctor</span>
              <span className="font-bold text-gray-800">Dr. Amina Uwamahoro</span>
            </div>
            <div className="flex justify-between border-b border-gray-50 pb-2">
              <span className="text-gray-500">Location</span>
              <span className="font-bold text-gray-800">King Faisal Hospital</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Visit Type</span>
              <span className="font-bold text-gray-800">In-Person</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-3">Reminders</p>
          
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-sm font-bold text-gray-800">1 hour before</p>
              <p className="text-xs text-gray-500">Push notification</p>
            </div>
            <div className="w-10 h-6 bg-primary-500 rounded-full relative">
              <div className="w-4 h-4 bg-white rounded-full absolute right-1 top-1"></div>
            </div>
          </div>
          
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-sm font-bold text-gray-800">SMS reminder</p>
              <p className="text-xs text-gray-500">Day before at 12:00 PM</p>
            </div>
            <div className="w-10 h-6 bg-primary-500 rounded-full relative">
              <div className="w-4 h-4 bg-white rounded-full absolute right-1 top-1"></div>
            </div>
          </div>

          <button className="w-full py-2 text-primary-600 bg-primary-50 rounded-xl text-xs font-bold mt-2">
            Add to calendar
          </button>
        </div>

        <div className="bg-yellow-50 rounded-xl p-4 border border-yellow-200">
          <p className="text-[10px] font-bold text-yellow-800 uppercase mb-1">Please bring:</p>
          <p className="text-xs text-yellow-700">National ID, Insurance card, Previous prescriptions.</p>
        </div>
      </div>

      <div className="p-4 bg-white border-t border-gray-100 absolute bottom-0 w-full z-10">
        <button onClick={() => navigate('/checkin')} className="w-full bg-primary-500 text-white py-3.5 rounded-xl font-bold shadow-md">
          Go to Home
        </button>
      </div>
    </div>
  );
}
