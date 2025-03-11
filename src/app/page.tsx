"use client"
import { InputSearch } from "@/components/InputSearch";
import { Menu } from "@/components/Menu";
import { Result } from "@/components/Result";
import { useDetectColorSystem } from "@/hooks/useDetectColorSystem";
import { Providers } from "@/providers";
import { useFontStore } from "@/store/fontStore";
import { useHistoryStore } from "@/store/historyStore";
import { useThemeStore } from "@/store/themeStore";
import { useState } from "react";
import { tv } from "tailwind-variants";



export default function Home() {

  const [isOpen, setIsOpen] = useState(false)
  const history = useHistoryStore(state => state.history)

  const handleOpen = () => setIsOpen(prev => !prev);

  const fontFamily = useFontStore(state => state.font)
  const isDark = useThemeStore(state => state.isDark)

  useDetectColorSystem()

  const darkStyle = tv(
    {
      base: isDark ? "dark" : ""
    }
  )

  return (
    <Providers>
      <div className={`font-${fontFamily} ${darkStyle()}`}>
        <div className="bg-white dark:bg-black h-auto w-full flex flex-col items-center p-6">
          <main className="w-full max-w-3xl flex flex-col gap-6 md:p-12">
            <Menu handleOpen={handleOpen} />
            <InputSearch />
            <Result />
          </main>
        </div>
        {isOpen && (
          <div className="bg-white dark:bg-black dark:text-white fixed left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 border-[1px] border-gray-400 rounded-md w-1/3 h-1/3 overflow-y-scroll z-10">
            {history.map(item => (
              <div key={item.word} className="flex justify-between items-center p-4 ">
                <span>{item.word}</span>
                <span>{item.date}</span>
                <span>{item.hour}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </Providers>

  );
}
