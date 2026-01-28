'use client';

interface GoalSetterProps {
  goal: number;
  setGoal: (g: number) => void;
  progress: number;
  completed: boolean;
}

export default function GoalSetter({ goal, setGoal, progress, completed }: GoalSetterProps) {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium mb-2">Session Goal</label>
      <input
        type="number"
        min="1"
        value={goal}
        onChange={(e) => setGoal(Math.max(1, parseInt(e.target.value) || 1))}
        className="w-full p-2 border rounded dark:bg-gray-800 dark:border-gray-600 dark:text-white"
      />
      <div className="mt-2">
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
          <div className="bg-blue-600 h-2.5 rounded-full transition-all" style={{ width: `${Math.min(progress, 100)}%` }}></div>
        </div>
        <p className="text-sm mt-1">{Math.round(progress)}% completed</p>
        {completed && <p className="text-green-500 font-bold">Goal Achieved! 🎉</p>}
      </div>
    </div>
  );
}