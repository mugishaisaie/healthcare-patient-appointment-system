import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function AppointmentBooking() {
  const navigate = useNavigate();
  const { doctorId } = useParams();
  const [selectedTime, setSelectedTime] = useState('2:30 PM');
  const [visitType, setVisitType] = useState('In-Person');

  const times = ['9:00 AM', '10:30 AM', '12:00 PM', '2:30 PM', '4:00 PM', '5:30 PM'];

  return (
    <div className="h-full bg-gray-50 flex flex-col font-sans relative">
      <div className="bg-primary-500 text-white p-4 pt-12 pb-6">
        <button onClick={() => navigate(-1)} className="flex items-center text-white/90 text-sm mb-3">
          <ChevronLeft size={16} /> Back
        </button>
        <h1 className="text-xl font-bold">Book Appointment</h1>
      </div>

      <div className="flex-1 overflow-y-auto p-5 pb-24">
        <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex items-center gap-4 mb-6">
          <div className="w-12 h-12 rounded-full bg-primary-500 text-white flex items-center justify-center font-bold text-lg shrink-0">
            AU
          </div>
          <div>
            <h3 className="font-bold text-gray-800 text-sm">Dr. Amina Uwamahoro</h3>
            <p className="text-xs text-gray-500">Neurologist</p>
            <p className="text-[10px] text-gray-400 flex items-center gap-1 mt-0.5">
              📍 King Faisal Hospital, Kigali
            </p>
          </div>
        </div>

        <div className="mb-6">
          <h2 className="text-sm font-bold text-gray-800 mb-3">Select Date</h2>
          <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
            <div className="flex justify-between items-center mb-4">
              <ChevronLeft size={16} className="text-gray-400" />
              <span className="font-bold text-sm">April 2026</span>
              <ChevronRight size={16} className="text-gray-800" />
            </div>
            <div className="grid grid-cols-7 gap-1 text-center text-xs mb-2 text-gray-400">
              <div>S</div><div>M</div><div>T</div><div>W</div><div>T</div><div>F</div><div>S</div>
            </div>
            <div className="grid grid-cols-7 gap-1 text-center text-sm font-medium">
              <div className="text-gray-300 py-1">29</div><div className="text-gray-300 py-1">30</div><div className="text-gray-300 py-1">31</div>
              <div className="py-1">1</div><div className="py-1">2</div><div className="py-1">3</div><div className="py-1">4</div>
              <div className="py-1">5</div><div className="py-1">6</div><div className="py-1">7</div><div className="py-1">8</div><div className="py-1">9</div><div className="py-1">10</div><div className="py-1">11</div>
              <div className="py-1">12</div><div className="py-1">13</div><div className="py-1">14</div><div className="py-1">15</div><div className="py-1">16</div><div className="py-1">17</div><div className="py-1">18</div>
              <div className="py-1">19</div><div className="py-1">20</div><div className="py-1">21</div><div className="py-1">22</div><div className="py-1">23</div><div className="py-1">24</div><div className="py-1">25</div>
              <div className="py-1">26</div><div className="py-1">27</div>
              <div className="bg-primary-500 text-white rounded-full py-1">28</div>
              <div className="py-1">29</div><div className="py-1">30</div>
            </div>
          </div>
        </div>

        <div className="mb-6">
          <h2 className="text-sm font-bold text-gray-800 mb-3">Available Times - April 28</h2>
          <div className="grid grid-cols-3 gap-2">
            {times.map(t => (
              <button 
                key={t}
                onClick={() => setSelectedTime(t)}
                className={`py-2 text-xs font-medium rounded-xl border ${selectedTime === t ? 'bg-primary-500 text-white border-primary-500' : 'bg-white text-gray-600 border-gray-200'}`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        <div className="mb-6">
          <h2 className="text-sm font-bold text-gray-800 mb-3">Visit Type</h2>
          <div className="flex gap-3">
            <button 
              onClick={() => setVisitType('In-Person')}
              className={`flex-1 py-2 text-xs font-medium rounded-xl border flex items-center justify-center gap-2 ${visitType === 'In-Person' ? 'bg-primary-50 text-primary-700 border-primary-300' : 'bg-white text-gray-600 border-gray-200'}`}
            >
              🏥 In-Person
            </button>
            <button 
              onClick={() => setVisitType('Video Call')}
              className={`flex-1 py-2 text-xs font-medium rounded-xl border flex items-center justify-center gap-2 ${visitType === 'Video Call' ? 'bg-primary-50 text-primary-700 border-primary-300' : 'bg-white text-gray-600 border-gray-200'}`}
            >
              💻 Video Call
            </button>
          </div>
        </div>

        <div>
          <h2 className="text-sm font-bold text-gray-800 mb-2">Reason (optional)</h2>
          <textarea 
            className="w-full bg-white border border-gray-200 rounded-xl p-3 text-xs focus:outline-none focus:border-primary-500"
            placeholder="Describe your symptoms briefly..."
            rows="2"
          ></textarea>
        </div>
      </div>

      <div className="p-4 bg-white border-t border-gray-100 absolute bottom-0 w-full z-10">
        <button onClick={() => navigate('/confirmation')} className="w-full bg-primary-500 text-white py-3.5 rounded-xl font-bold shadow-md">
          ✓ Confirm Appointment
        </button>
      </div>
    </div>
  );
}
