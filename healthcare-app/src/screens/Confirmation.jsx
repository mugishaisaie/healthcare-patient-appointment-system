import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ChevronLeft, MoreHorizontal, Check } from 'lucide-react';
import { doctors } from '../data/doctors';

export default function Confirmation() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const doctor = state?.doctor ?? doctors[0];
  const appointmentDate = (() => {
    if (state?.appointmentDate) {
      const parsed = new Date(state.appointmentDate);
      if (!Number.isNaN(parsed.getTime())) {
        return parsed;
      }
    }
    return new Date(2026, 3, 28);
  })();
  const appointmentTime = state?.appointmentTime ?? '2:30 PM';
  const visitType = state?.visitType ?? 'In-Person';
  const [reminders, setReminders] = useState({ oneHour: true, sms: true });

  const toggleReminder = (key) => {
    setReminders((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const formatFullDate = (date) =>
    date.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' });

  const parseTime = (time) => {
    const [clock, modifier] = time.split(' ');
    if (!clock || !modifier) {
      return { hours: 9, minutes: 0 };
    }
    const [hoursValue, minutesValue = '0'] = clock.split(':');
    let hours = Number(hoursValue);
    const minutes = Number(minutesValue);
    if (Number.isNaN(hours) || Number.isNaN(minutes)) {
      return { hours: 9, minutes: 0 };
    }
    if (modifier.toUpperCase() === 'PM' && hours !== 12) {
      hours += 12;
    }
    if (modifier.toUpperCase() === 'AM' && hours === 12) {
      hours = 0;
    }
    return { hours, minutes };
  };

  const buildAppointmentDateTime = () => {
    const { hours, minutes } = parseTime(appointmentTime);
    const start = new Date(appointmentDate);
    start.setHours(hours, minutes, 0, 0);
    return start;
  };

  const buildIcsDate = (date) => date.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';

  const handleAddToCalendar = () => {
    const start = buildAppointmentDateTime();
    const end = new Date(start);
    end.setMinutes(end.getMinutes() + 30);

    const lines = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//Healthcare App//EN',
      'CALSCALE:GREGORIAN',
      'BEGIN:VEVENT',
      `DTSTART:${buildIcsDate(start)}`,
      `DTEND:${buildIcsDate(end)}`,
      `SUMMARY:Appointment with ${doctor.name}`,
      doctor.location ? `LOCATION:${doctor.location}` : null,
      `DESCRIPTION:Visit type - ${visitType}`,
      'END:VEVENT',
      'END:VCALENDAR'
    ]
      .filter(Boolean)
      .join('\r\n');

    const blob = new Blob([lines], { type: 'text/calendar;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'appointment.ics';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

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
        <p className="text-xs text-white/80 mt-1">{doctor.name} - {doctor.specialty}</p>
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
              <span className="font-bold text-gray-800">{formatFullDate(appointmentDate)}</span>
            </div>
            <div className="flex justify-between border-b border-gray-50 pb-2">
              <span className="text-gray-500">Time</span>
              <span className="font-bold text-gray-800">{appointmentTime}</span>
            </div>
            <div className="flex justify-between border-b border-gray-50 pb-2">
              <span className="text-gray-500">Doctor</span>
              <span className="font-bold text-gray-800">{doctor.name}</span>
            </div>
            <div className="flex justify-between border-b border-gray-50 pb-2">
              <span className="text-gray-500">Location</span>
              <span className="font-bold text-gray-800">{doctor.hospital}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Visit Type</span>
              <span className="font-bold text-gray-800">{visitType}</span>
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
            <button
              type="button"
              onClick={() => toggleReminder('oneHour')}
              aria-pressed={reminders.oneHour}
              className={`w-10 h-6 rounded-full relative transition-colors ${reminders.oneHour ? 'bg-primary-500' : 'bg-gray-200'}`}
            >
              <div className={`w-4 h-4 bg-white rounded-full absolute top-1 transition-all ${reminders.oneHour ? 'right-1' : 'left-1'}`}></div>
            </button>
          </div>
          
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-sm font-bold text-gray-800">SMS reminder</p>
              <p className="text-xs text-gray-500">Day before at 12:00 PM</p>
            </div>
            <button
              type="button"
              onClick={() => toggleReminder('sms')}
              aria-pressed={reminders.sms}
              className={`w-10 h-6 rounded-full relative transition-colors ${reminders.sms ? 'bg-primary-500' : 'bg-gray-200'}`}
            >
              <div className={`w-4 h-4 bg-white rounded-full absolute top-1 transition-all ${reminders.sms ? 'right-1' : 'left-1'}`}></div>
            </button>
          </div>

          <button
            onClick={handleAddToCalendar}
            className="w-full py-2 text-primary-600 bg-primary-50 rounded-xl text-xs font-bold mt-2"
          >
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
          Go to Check-in
        </button>
      </div>
    </div>
  );
}
