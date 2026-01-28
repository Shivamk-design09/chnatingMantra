'use client';

interface ChantCounterProps {
  onChant: () => void;
  count: number;
}

export default function ChantCounter({ onChant, count }: ChantCounterProps) {
  const handleClick = () => {
    onChant();
    if (navigator.vibrate) {
      navigator.vibrate(50);
    }
  };

  return (
    <button
      onClick={handleClick}
      className="w-48 h-48 bg-blue-500 hover:bg-blue-600 dark:bg-blue-700 dark:hover:bg-blue-800 text-white rounded-full text-4xl font-bold shadow-lg transition-transform active:scale-95 flex items-center justify-center"
    >
      {count}
    </button>
  );
}