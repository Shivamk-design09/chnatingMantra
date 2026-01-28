'use client';

import { useState, useEffect } from 'react';

export function useDailyStats() {
  const [todayCount, setTodayCount] = useState(0);
  const [history, setHistory] = useState<{ date: string; count: number }[]>([]);

  useEffect(() => {
    const today = new Date().toDateString();
    const stored = localStorage.getItem('chantHistory');
    const data = stored ? JSON.parse(stored) : {};
    if (data[today]) {
      setTodayCount(data[today]);
    }
    const hist = Object.entries(data).map(([date, count]) => ({ date, count: count as number })).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).slice(0, 7);
    setHistory(hist);
  }, []);

  const addChant = () => {
    const today = new Date().toDateString();
    const stored = localStorage.getItem('chantHistory');
    const data = stored ? JSON.parse(stored) : {};
    data[today] = (data[today] || 0) + 1;
    localStorage.setItem('chantHistory', JSON.stringify(data));
    setTodayCount(data[today]);
    // update history
    const hist = Object.entries(data).map(([date, count]) => ({ date, count: count as number })).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).slice(0, 7);
    setHistory(hist);
  };

  return { todayCount, history, addChant };
}