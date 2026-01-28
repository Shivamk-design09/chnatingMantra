'use client';

interface StatsProps {
  todayCount: number;
  history: { date: string; count: number }[];
}

export default function Stats({ todayCount, history }: StatsProps) {
  return (
    <div className="mb-4">
      <h2 className="text-lg font-bold mb-2">Stats</h2>
      <p>Today's Chants: {todayCount}</p>
      <h3 className="font-medium mt-2">Last 7 Days</h3>
      <ul className="list-disc list-inside">
        {history.map(h => <li key={h.date}>{h.date}: {h.count}</li>)}
      </ul>
    </div>
  );
}