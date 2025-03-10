"use client"
import { fonts } from "@/constants/fonts";
import { useState } from "react";
import { IconArrow } from "./icons/IconArrow";
import { Font, useFontStore } from "@/store/fontStore";
import { tv } from 'tailwind-variants';

const fontStyles = tv({
    base: "text-gray-800 text-lg dark:text-white",
    variants: {
        font: {
            sans: "font-sans",
            serif: "font-serif",
            mono: "font-mono",
            default: "font-default",
        }
    }
});
export const SelectFont = () => {

    const [isOpen, setIsOpen] = useState(false);

    const changeFont = useFontStore(state => state.setFont)
    const font = useFontStore(state => state.font)

    const toggleDropdown = () => {
        setIsOpen(prev => !prev);
    };

    const handleFontSelect = (font: Font) => {
        changeFont(font)
    };

    return (

        <div
            onClick={toggleDropdown}
            className="relative"
        >
            <button
                className="cursor-pointer w-auto bg-white dark:bg-black rounded-lg py-4 text-left flex justify-between items-center gap-4 outline-0"
            >
                <span className="text-black font-bold text-sm dark:text-white md:text-lg">{font}</span>
                <IconArrow className={`w-5 text-black dark:text-white h-5 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                <span className="text-[#757575]">|</span>
            </button>

            {isOpen && (
                <div className="absolute right-1 mt-2 w-56 bg-white dark:bg-black rounded-lg shadow-lg py-2 z-10">
                    {fonts.map((font) => (
                        <div
                            key={font.value}
                            className="py-3 px-6 hover:bg-gray-50 dark:hover:bg-[#1f1f1f] cursor-pointer"
                            onClick={() => handleFontSelect(font.value)}
                        >
                            <span className={fontStyles({ font: font.value })}>{font.label}</span>
                        </div>
                    ))}

                </div>
            )}
        </div>

    )
}
