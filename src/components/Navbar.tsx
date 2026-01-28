'use client';

import Link from 'next/link';
import { useDarkMode } from '../context/DarkModeContext';

export default function Navbar() {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <nav className="flex justify-between items-center p-4 bg-gray-200 dark:bg-gray-800">
      <div>
        <Link href="/" className="mx-4 text-gray-900 dark:text-gray-100">Home</Link>
        <Link href="/history" className="mx-4 text-gray-900 dark:text-gray-100">History</Link>
      </div>
      <button onClick={toggleDarkMode} className="px-4 py-2 bg-gray-500 hover:bg-gray-600 text-white rounded transition">
        {darkMode ? 'Light' : 'Dark'}
      </button>
    </nav>
  );
}