'use client';

import { useState, useEffect } from 'react';
import ChantCounter from '../components/ChantCounter';
import MantraSelector from '../components/MantraSelector';
import GoalSetter from '../components/GoalSetter';
import TimerSelector from '../components/TimerSelector';
import Stats from '../components/Stats';
import { useDailyStats } from '../hooks/useDailyStats';

export default function Home() {
  const { todayCount, history, addChant } = useDailyStats();
  const [count, setCount] = useState(0);
  const [mantra, setMantra] = useState('Om Namah Shivaya');
  const [goal, setGoal] = useState(108);
  const [remaining, setRemaining] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isRunning && remaining > 0) {
      interval = setInterval(() => {
        setRemaining(r => r - 1);
      }, 1000);
    } else if (remaining === 0 && isRunning) {
      setIsRunning(false);
      alert('Timer ended!');
    }
    return () => clearInterval(interval);
  }, [isRunning, remaining]);

  const startTimer = (minutes: number) => {
    setRemaining(minutes * 60);
    setIsRunning(true);
  };

  const handleChant = () => {
    setCount(c => c + 1);
    addChant();
  };

  const progress = goal > 0 ? (count / goal) * 100 : 0;
  const completed = count >= goal;

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-4">
      <div className="max-w-md mx-auto">
        <div className="text-center mb-4">
          <h1 className="text-2xl font-bold">Chanting Meditation</h1>
        </div>
        <MantraSelector mantra={mantra} setMantra={setMantra} />
        <div className="text-center my-4">
          <p className="text-lg font-medium">{mantra}</p>
        </div>
        <div className="text-center my-4">
          <ChantCounter onChant={handleChant} count={count} />
        </div>
        <GoalSetter goal={goal} setGoal={setGoal} progress={progress} completed={completed} />
        <TimerSelector onStart={startTimer} remaining={remaining} isRunning={isRunning} />
        <Stats todayCount={todayCount} history={history} />
      </div>
    </div>
  );
}
