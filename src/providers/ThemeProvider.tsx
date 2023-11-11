"use client";

import { type ReactNode, createContext, useState } from "react";
import { api } from "~/trpc/react";

const ThemeContext = createContext({});

export default function ThemeProvider({
  appliedTheme = "default",
  children,
}: {
  appliedTheme: string | undefined;
  children: ReactNode;
}) {
  const { data } = api.config.getTheme.useQuery({ name: appliedTheme });

  const [theme, setTheme] = useState(data);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
