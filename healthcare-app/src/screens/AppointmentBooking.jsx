import { useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { doctors } from '../data/doctors';

export default function AppointmentBooking() {
  const navigate = useNavigate();
  const { doctorId } = useParams();
  const { state } = useLocation();
  const initialDate = (() => {
    if (state?.appointmentDate) {
      const parsed = new Date(state.appointmentDate);
      if (!Number.isNaN(parsed.getTime())) {
        return parsed;
      }
    }
    return new Date(2026, 3, 28);
  })();
  const doctor =
    state?.doctor ??
    doctors.find((doc) => doc.id === Number(doctorId)) ??
    doctors[0];
  const [currentMonth, setCurrentMonth] = useState(
    () => new Date(initialDate.getFullYear(), initialDate.getMonth(), 1)
  );
  const [selectedDate, setSelectedDate] = useState(() => initialDate);
  const [selectedTime, setSelectedTime] = useState(() => state?.appointmentTime ?? '2:30 PM');
  const [visitType, setVisitType] = useState(() => state?.visitType ?? 'In-Person');
  const [reason, setReason] = useState(() => state?.reason ?? '');

  const times = ['9:00 AM', '10:30 AM', '12:00 PM', '2:30 PM', '4:00 PM', '5:30 PM'];

  const formatMonthYear = (date) =>
    date.toLocaleString('en-US', { month: 'long', year: 'numeric' });
  const formatMonthDay = (date) =>
    date.toLocaleString('en-US', { month: 'long', day: 'numeric' });
  const isSameDay = (a, b) =>
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate();

  const buildCalendarDays = (monthDate) => {
    const year = monthDate.getFullYear();
    const month = monthDate.getMonth();
    const firstOfMonth = new Date(year, month, 1);
    const startDay = firstOfMonth.getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const prevMonthDays = new Date(year, month, 0).getDate();
    const totalCells = Math.ceil((startDay + daysInMonth) / 7) * 7;
    const days = [];

    for (let i = 0; i < totalCells; i += 1) {
      let date;
      let inCurrentMonth = false;

      if (i < startDay) {
        const day = prevMonthDays - startDay + 1 + i;
        date = new Date(year, month - 1, day);
      } else if (i < startDay + daysInMonth) {
        const day = i - startDay + 1;
        date = new Date(year, month, day);
        inCurrentMonth = true;
      } else {
        const day = i - (startDay + daysInMonth) + 1;
        date = new Date(year, month + 1, day);
      }

      days.push({ date, inCurrentMonth });
    }

    return days;
  };

  const calendarDays = buildCalendarDays(currentMonth);

  const changeMonth = (offset) => {
    const nextMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + offset, 1);
    const daysInNextMonth = new Date(nextMonth.getFullYear(), nextMonth.getMonth() + 1, 0).getDate();
    const nextSelectedDay = Math.min(selectedDate.getDate(), daysInNextMonth);

    setCurrentMonth(nextMonth);
    setSelectedDate(new Date(nextMonth.getFullYear(), nextMonth.getMonth(), nextSelectedDay));
  };

  const handleDateSelect = (date) => {
    setSelectedDate(date);
    setCurrentMonth(new Date(date.getFullYear(), date.getMonth(), 1));
  };

  const handleConfirm = () => {
    navigate('/confirmation', {
      state: {
        doctor,
        appointmentDate: selectedDate.toISOString(),
        appointmentTime: selectedTime,
        visitType,
        reason
      }
    });
  };

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
          <div className={`w-12 h-12 rounded-full ${doctor.color} text-white flex items-center justify-center font-bold text-lg shrink-0`}>
            {doctor.initials}
          </div>
          <div>
            <h3 className="font-bold text-gray-800 text-sm">{doctor.name}</h3>
            <p className="text-xs text-gray-500">{doctor.specialty}</p>
            <p className="text-[10px] text-gray-400 flex items-center gap-1 mt-0.5">
              📍 {doctor.location}
            </p>
          </div>
        </div>

        <div className="mb-6">
          <h2 className="text-sm font-bold text-gray-800 mb-3">Select Date</h2>
          <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
            <div className="flex justify-between items-center mb-4">
              <button
                type="button"
                onClick={() => changeMonth(-1)}
                className="text-gray-400 hover:text-gray-600"
                aria-label="Previous month"
              >
                <ChevronLeft size={16} />
              </button>
              <span className="font-bold text-sm">{formatMonthYear(currentMonth)}</span>
              <button
                type="button"
                onClick={() => changeMonth(1)}
                className="text-gray-800 hover:text-gray-900"
                aria-label="Next month"
              >
                <ChevronRight size={16} />
              </button>
            </div>
            <div className="grid grid-cols-7 gap-1 text-center text-xs mb-2 text-gray-400">
              <div>S</div><div>M</div><div>T</div><div>W</div><div>T</div><div>F</div><div>S</div>
            </div>
            <div className="grid grid-cols-7 gap-1 text-center text-sm font-medium">
              {calendarDays.map(({ date, inCurrentMonth }) => {
                const selected = isSameDay(date, selectedDate);
                return (
                  <button
                    key={date.toISOString()}
                    type="button"
                    onClick={() => handleDateSelect(date)}
                    aria-pressed={selected}
                    className={`py-1 rounded-full transition-colors ${
                      selected
                        ? 'bg-primary-500 text-white'
                        : inCurrentMonth
                          ? 'text-gray-700 hover:bg-primary-50'
                          : 'text-gray-300 hover:text-gray-400'
                    }`}
                  >
                    {date.getDate()}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mb-6">
          <h2 className="text-sm font-bold text-gray-800 mb-3">
            Available Times - {formatMonthDay(selectedDate)}
          </h2>
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
            value={reason}
            onChange={(event) => setReason(event.target.value)}
          ></textarea>
        </div>
      </div>

      <div className="p-4 bg-white border-t border-gray-100 absolute bottom-0 w-full z-10">
        <button onClick={handleConfirm} className="w-full bg-primary-500 text-white py-3.5 rounded-xl font-bold shadow-md">
          ✓ Confirm Appointment
        </button>
      </div>
    </div>
  );
}
