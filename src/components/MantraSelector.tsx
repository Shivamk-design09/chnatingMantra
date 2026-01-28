'use client';

interface MantraSelectorProps {
  mantra: string;
  setMantra: (m: string) => void;
}

const mantras = ['Om Namah Shivaya', 'Shree Ram', 'Gayatri Mantra'];

export default function MantraSelector({ mantra, setMantra }: MantraSelectorProps) {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium mb-2">Select Mantra</label>
      <select
        value={mantra}
        onChange={(e) => setMantra(e.target.value)}
        className="w-full p-2 border rounded dark:bg-gray-800 dark:border-gray-600 dark:text-white"
      >
        {mantras.map(m => <option key={m} value={m}>{m}</option>)}
      </select>
    </div>
  );
}