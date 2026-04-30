import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SymptomInput() {
  const navigate = useNavigate();
  const [symptoms, setSymptoms] = useState(['Headache', 'Fever']);
  const [intensity, setIntensity] = useState(5);
  const [selectedAreas, setSelectedAreas] = useState(['Head']);
  const bodyAreas = [
    { label: 'Head', size: 'w-16 h-12', position: 'absolute top-4', text: 'text-xs' },
    { label: 'L-Arm', size: 'w-10 h-24', position: 'absolute top-18 left-[60px]', text: 'text-[10px]' },
    { label: 'Chest', size: 'w-24 h-16', position: 'absolute top-18', text: 'text-xs' },
    { label: 'R-Arm', size: 'w-10 h-24', position: 'absolute top-18 right-[60px]', text: 'text-[10px]' },
    { label: 'Stomach', size: 'w-24 h-12', position: 'absolute bottom-6', text: 'text-xs' }
  ];

  const toggleSymptom = (s) => {
    if (symptoms.includes(s)) setSymptoms(symptoms.filter(x => x !== s));
    else setSymptoms([...symptoms, s]);
  };
  const toggleArea = (area) => {
    setSelectedAreas((prev) =>
      prev.includes(area) ? prev.filter((item) => item !== area) : [...prev, area]
    );
  };

  return (
    <div className="h-full bg-gray-50 flex flex-col font-sans relative">
      <div className="bg-primary-500 text-white p-6 pt-12 pb-6">
        <p className="text-sm opacity-90 mb-1">Good morning, Patient 👋</p>
        <h1 className="text-2xl font-bold">How are you feeling today?</h1>
      </div>

      <div className="flex-1 overflow-y-auto p-5 pb-24 space-y-6 bg-white">
        <div>
          <p className="text-xs text-gray-400 uppercase tracking-wide font-semibold mb-1">Step 1 of 3</p>
          <h2 className="text-lg font-bold text-gray-800">Where does it hurt?</h2>
          <p className="text-sm text-gray-500 mb-4">Tap a body area to get started.</p>
          
          <div className="bg-gray-50 rounded-2xl p-4 flex flex-col items-center justify-center relative h-[200px]">
            {bodyAreas.map((area) => {
              const isSelected = selectedAreas.includes(area.label);
              return (
                <button
                  key={area.label}
                  type="button"
                  onClick={() => toggleArea(area.label)}
                  className={`${area.size} ${area.position} ${area.text} rounded-lg flex items-center justify-center font-bold shadow-sm ${
                    isSelected ? 'bg-primary-500 text-white' : 'bg-primary-100 text-primary-600'
                  }`}
                >
                  {area.label}{isSelected ? ' ✓' : ''}
                </button>
              );
            })}
          </div>
        </div>

        <div>
          <h2 className="text-md font-bold text-gray-800 mb-3">Select your symptoms</h2>
          <div className="flex flex-wrap gap-2">
            {['Headache 🤕', 'Fever 🤒', 'Fatigue 😴', 'Runny Nose 🤧', 'Shortness of breath 😮‍💨', 'Chest Pain ❤️‍🩹'].map(s => {
              const baseName = s.split(' ')[0];
              const isSelected = symptoms.includes(baseName) || symptoms.includes(s.replace(/ 🤕| 🤒| 😴| 🤧| 😮‍💨| ❤️‍🩹/, ''));
              
              return (
                <button 
                  key={s} 
                  onClick={() => toggleSymptom(baseName)}
                  className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors ${isSelected ? 'bg-primary-500 text-white border-primary-500' : 'bg-white text-gray-600 border-gray-200'}`}
                >
                  {isSelected && '✓ '} {s}
                </button>
              )
            })}
          </div>
        </div>

        <div>
          <h2 className="text-md font-bold text-gray-800 mb-3">Pain Intensity</h2>
          <input type="range" min="1" max="10" value={intensity} onChange={(e)=>setIntensity(e.target.value)} className="w-full accent-primary-500" />
          <div className="flex justify-between text-xs text-gray-400 mt-2 px-1">
            <span>1</span><span>2</span><span>3</span><span>4</span><span>5</span><span>6</span><span>7</span><span>8</span><span>9</span><span>10</span>
          </div>
        </div>
      </div>

      <div className="p-4 bg-white border-t border-gray-100 absolute bottom-0 w-full z-10">
        <button onClick={() => navigate('/doctors')} className="w-full bg-primary-500 text-white py-3.5 rounded-xl font-bold shadow-md flex items-center justify-center gap-2">
          + Find Matching Doctors
        </button>
      </div>
    </div>
  );
}
