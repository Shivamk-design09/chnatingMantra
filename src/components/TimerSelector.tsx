'use client';

interface TimerSelectorProps {
  onStart: (minutes: number) => void;
  remaining: number;
  isRunning: boolean;
}

export default function TimerSelector({ onStart, remaining, isRunning }: TimerSelectorProps) {
  const times = [5, 10, 15];

  return (
    <div className="mb-4">
      <label className="block text-sm font-medium mb-2">Timer</label>
      <div className="flex space-x-2">
        {times.map(t => (
          <button
            key={t}
            onClick={() => onStart(t)}
            disabled={isRunning}
            className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded disabled:opacity-50 transition"
          >
            {t} min
          </button>
        ))}
      </div>
      {remaining > 0 && (
        <p className="mt-2 text-lg font-mono">
          Remaining: {Math.floor(remaining / 60)}:{(remaining % 60).toString().padStart(2, '0')}
        </p>
      )}
    </div>
  );
}