import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SymptomInput from './screens/SymptomInput';
import DoctorDiscovery from './screens/DoctorDiscovery';
import AppointmentBooking from './screens/AppointmentBooking';
import Confirmation from './screens/Confirmation';
import HospitalCheckIn from './screens/HospitalCheckIn';
import LiveWaiting from './screens/LiveWaiting';
import PostVisitSummary from './screens/PostVisitSummary';
import FollowUp from './screens/FollowUp';

function App() {
  return (
    <div className="min-h-screen bg-gray-200 flex justify-center items-center p-4">
      <div className="w-full max-w-[375px] h-[812px] bg-white rounded-[40px] shadow-2xl overflow-hidden relative border-8 border-gray-900">
        <Router>
          <Routes>
            <Route path="/" element={<SymptomInput />} />
            <Route path="/doctors" element={<DoctorDiscovery />} />
            <Route path="/book/:doctorId" element={<AppointmentBooking />} />
            <Route path="/confirmation" element={<Confirmation />} />
            <Route path="/checkin" element={<HospitalCheckIn />} />
            <Route path="/waiting" element={<LiveWaiting />} />
            <Route path="/summary" element={<PostVisitSummary />} />
            <Route path="/followup" element={<FollowUp />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
