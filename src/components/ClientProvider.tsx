'use client';

import { DarkModeProvider } from '../context/DarkModeContext';

export default function ClientProvider({ children }: { children: React.ReactNode }) {
  return <DarkModeProvider>{children}</DarkModeProvider>;
}