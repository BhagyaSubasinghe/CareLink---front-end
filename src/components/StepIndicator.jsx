import React from 'react';

export default function StepIndicator({ step }) {
  return (
    <div className="flex items-center justify-center mb-6">
      {[1, 2, 3, 4].map((s, idx) => (
        <div key={s} className="flex items-center">
          <div
            className={`rounded-full w-9 h-9 flex items-center justify-center font-bold text-lg shadow \
              ${step === s ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'} \
              transition`}
          >
            {s}
          </div>
          {idx < 3 && <div className="w-12 h-1 bg-gray-200 mx-1" />}
        </div>
      ))}
    </div>
  );
}
