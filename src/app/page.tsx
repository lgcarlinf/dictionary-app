"use client"
import { InputSearch } from "@/components/InputSearch";
import { Menu } from "@/components/Menu";
import { Result } from "@/components/Result";
import { useDetectColorSystem } from "@/hooks/useDetectColorSystem";
import { Providers } from "@/providers";
import { useFontStore } from "@/store/fontStore";
import { useThemeStore } from "@/store/themeStore";
import { tv } from "tailwind-variants";



export default function Home() {

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
            <Menu />
            <InputSearch />
            <Result />
          </main>
        </div>
      </div>
    </Providers>

  );
}
