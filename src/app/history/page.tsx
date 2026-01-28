'use client';

import { useDailyStats } from '../../hooks/useDailyStats';

export default function History() {
  const { history } = useDailyStats();

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-4">
      <div className="max-w-md mx-auto">
        <h1 className="text-2xl font-bold text-center mb-4">Chant History</h1>
        <ul className="space-y-2">
          {history.map(h => (
            <li key={h.date} className="p-2 bg-white dark:bg-gray-800 rounded shadow">
              {h.date}: {h.count} chants
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}