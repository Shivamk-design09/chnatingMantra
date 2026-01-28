'use client';

import { useState, useEffect } from 'react';

interface MantraSelectorProps {
  mantra: string;
  setMantra: (m: string) => void;
}

const predefinedMantras = ['Om Namah Shivaya', 'Shree Ram', 'Gayatri Mantra'];

export default function MantraSelector({ mantra, setMantra }: MantraSelectorProps) {
  const [customMantras, setCustomMantras] = useState<string[]>([]);
  const [showAddInput, setShowAddInput] = useState(false);
  const [customInput, setCustomInput] = useState('');

  useEffect(() => {
    const stored = localStorage.getItem('customMantras');
    if (stored) {
      setCustomMantras(JSON.parse(stored));
    }
  }, []);

  const allMantras = [...predefinedMantras, ...customMantras];

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    if (value === 'add-custom') {
      setShowAddInput(true);
    } else {
      setMantra(value);
      setShowAddInput(false);
    }
  };

  const handleAddCustom = () => {
    if (customInput.trim()) {
      const newCustom = [...customMantras, customInput.trim()];
      setCustomMantras(newCustom);
      localStorage.setItem('customMantras', JSON.stringify(newCustom));
      setMantra(customInput.trim());
      setCustomInput('');
      setShowAddInput(false);
    }
  };

  return (
    <div className="mb-4">
      <label className="block text-sm font-medium mb-2">Select Mantra</label>
      <select
        value={mantra}
        onChange={handleSelectChange}
        className="w-full p-2 border rounded dark:bg-gray-800 dark:border-gray-600 dark:text-white"
      >
        {allMantras.map(m => <option key={m} value={m}>{m}</option>)}
        <option value="add-custom">+ Add Custom Mantra</option>
      </select>
      {showAddInput && (
        <div className="mt-2 flex">
          <input
            type="text"
            value={customInput}
            onChange={(e) => setCustomInput(e.target.value)}
            placeholder="Enter custom mantra"
            className="flex-1 p-2 border rounded dark:bg-gray-800 dark:border-gray-600 dark:text-white"
          />
          <button
            onClick={handleAddCustom}
            className="ml-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Add
          </button>
        </div>
      )}
    </div>
  );
}