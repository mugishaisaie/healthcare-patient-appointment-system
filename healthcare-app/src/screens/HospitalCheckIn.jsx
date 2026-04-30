import { useNavigate } from 'react-router-dom';
import { ChevronLeft, MoreHorizontal } from 'lucide-react';

export default function HospitalCheckIn() {
  const navigate = useNavigate();

  return (
    <div className="h-full bg-gray-50 flex flex-col font-sans relative">
      <div className="bg-primary-500 text-white p-4 pt-12 pb-6">
        <div className="flex justify-between items-center mb-3">
          <button onClick={() => navigate(-1)} className="flex items-center text-white/90 text-sm">
            <ChevronLeft size={16} /> My Appointments
          </button>
          <MoreHorizontal size={20} className="text-white/90" />
        </div>
        <h1 className="text-xl font-bold">Hospital Check-in</h1>
        <p className="text-xs text-white/80 mt-1">King Faisal Hospital - Floor 2, Room 204</p>
      </div>

      <div className="flex-1 overflow-y-auto p-5 pb-24 space-y-4">
        <div className="bg-green-50 rounded-2xl p-4 border border-green-200 flex justify-between items-center">
          <div>
            <h3 className="font-bold text-green-800 text-sm">You're checked in!</h3>
            <p className="text-xs text-green-700">Arrived 15 min early</p>
          </div>
          <div className="bg-green-500 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase">
            Active
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-center">
          <p className="text-xs text-gray-500 mb-1">Your ticket number is now:</p>
          <h2 className="text-4xl font-black text-gray-800 mb-2">A-47</h2>
          <p className="text-[10px] text-gray-400">Show this code at the front desk</p>
        </div>

        <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
          <p className="text-sm font-bold text-gray-800 mb-4">Getting Here</p>
          
          <div className="relative border-l-2 border-gray-200 ml-3 space-y-6 pb-2">
            <div className="relative">
              <div className="absolute -left-[19px] top-0 w-8 h-8 bg-primary-500 text-white rounded-full flex items-center justify-center text-xs font-bold border-4 border-white">1</div>
              <div className="pl-6">
                <p className="text-sm font-bold text-gray-800">Main Entrance</p>
                <p className="text-xs text-gray-500">Walk straight from main doors</p>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -left-[19px] top-0 w-8 h-8 bg-primary-500 text-white rounded-full flex items-center justify-center text-xs font-bold border-4 border-white">2</div>
              <div className="pl-6">
                <p className="text-sm font-bold text-gray-800">Reception Desk</p>
                <p className="text-xs text-gray-500">Show A-47 to get directions</p>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -left-[19px] top-0 w-8 h-8 bg-white border-2 border-primary-500 text-primary-500 rounded-full flex items-center justify-center text-xs font-bold">3</div>
              <div className="pl-6">
                <p className="text-sm font-bold text-primary-600">Neurology Wing - Floor 2</p>
                <p className="text-xs text-gray-500">Take elevator B, turn left at floor 2</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-yellow-50 rounded-xl p-4 border border-yellow-200 mt-4">
          <p className="text-xs text-yellow-800">Online check-in means you can head directly to your floor!</p>
        </div>
      </div>

      <div className="p-4 bg-white border-t border-gray-100 absolute bottom-0 w-full z-10">
        <button onClick={() => navigate('/waiting')} className="w-full bg-primary-500 text-white py-3.5 rounded-xl font-bold shadow-md">
          Go to the waiting area →
        </button>
      </div>
    </div>
  );
}
