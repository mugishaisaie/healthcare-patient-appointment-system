import { useNavigate } from 'react-router-dom';
import { ChevronLeft, Search } from 'lucide-react';

export default function DoctorDiscovery() {
  const navigate = useNavigate();

  const doctors = [
    {
      id: 1,
      initials: 'AU',
      color: 'bg-primary-500',
      name: 'Dr. Amina Uwamahoro',
      specialty: 'Neurologist',
      match: '95% match',
      rating: '4.9',
      reviews: '120 reviews',
      exp: '10 yrs experience',
      available: 'Today, 12:00 PM'
    },
    {
      id: 2,
      initials: 'JP',
      color: 'bg-indigo-500',
      name: 'Dr. Jean-Paul Ndizeye',
      specialty: 'General Practitioner',
      match: '85% match',
      rating: '4.8',
      reviews: '85 reviews',
      exp: '8 yrs experience',
      available: 'Today, 4:00 PM'
    },
    {
      id: 3,
      initials: 'SM',
      color: 'bg-orange-500',
      name: 'Dr. Sarah Mukamana',
      specialty: 'Internal Medicine',
      match: '80% match',
      rating: '4.7',
      reviews: '150 reviews',
      exp: '12 yrs experience',
      available: 'Tomorrow, 9:00 AM'
    }
  ];

  return (
    <div className="h-full bg-gray-50 flex flex-col font-sans relative">
      <div className="bg-primary-500 text-white p-4 pt-12 pb-6">
        <button onClick={() => navigate(-1)} className="flex items-center text-white/90 text-sm mb-3">
          <ChevronLeft size={16} /> Back
        </button>
        <h1 className="text-xl font-bold">Recommended Doctors</h1>
        <p className="text-xs text-white/80 mt-1">Based on Headache + Fever</p>
      </div>

      <div className="flex-1 overflow-y-auto p-4 pb-6 space-y-4">
        <div className="relative">
          <Search className="absolute left-4 top-3 text-gray-400" size={18} />
          <input
            type="text"
            placeholder="Search doctors, specialties..."
            className="w-full bg-white border border-gray-200 rounded-full py-2.5 pl-12 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 shadow-sm"
          />
        </div>

        <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
          <button className="px-4 py-1.5 rounded-full text-xs font-medium bg-primary-500 text-white whitespace-nowrap">All</button>
          <button className="px-4 py-1.5 rounded-full text-xs font-medium bg-white text-gray-600 border border-gray-200 whitespace-nowrap">Neurologist</button>
          <button className="px-4 py-1.5 rounded-full text-xs font-medium bg-white text-gray-600 border border-gray-200 whitespace-nowrap">GP</button>
          <button className="px-4 py-1.5 rounded-full text-xs font-medium bg-white text-gray-600 border border-gray-200 whitespace-nowrap">Internist</button>
        </div>

        <div className="bg-green-50 text-green-700 text-xs font-medium py-2 px-3 rounded-lg border border-green-100 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-green-500"></span>
          AI matched 3 doctors for your symptoms
        </div>

        <div className="space-y-3">
          {doctors.map(doc => (
            <div key={doc.id} className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
              <div className="flex justify-between items-start mb-2">
                <div className="flex gap-3">
                  <div className={`w-12 h-12 rounded-full ${doc.color} text-white flex items-center justify-center font-bold text-lg shrink-0`}>
                    {doc.initials}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 text-sm flex items-center gap-2">
                      {doc.name}
                    </h3>
                    <p className="text-gray-500 text-xs">{doc.specialty}</p>
                    <div className="flex items-center gap-1 text-[10px] text-gray-500 mt-1">
                      <span className="text-yellow-400">★</span>
                      <span className="font-bold text-gray-700">{doc.rating}</span>
                      <span>({doc.reviews})</span>
                      <span className="mx-1">•</span>
                      <span>{doc.exp}</span>
                    </div>
                  </div>
                </div>
                <div className="bg-primary-50 text-primary-600 text-[10px] font-bold px-2 py-1 rounded">
                  {doc.match}
                </div>
              </div>
              
              <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-50">
                <div className="text-xs text-gray-600">
                  🕒 Next available: <span className="font-medium text-gray-800">{doc.available}</span>
                </div>
                <button onClick={() => navigate(`/book/${doc.id}`)} className="bg-primary-500 text-white text-xs font-bold px-4 py-1.5 rounded-lg hover:bg-primary-600">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
