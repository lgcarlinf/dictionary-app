"use client"
import { useThemeStore } from "@/store/themeStore";
import { useEffect } from "react";

export const useDetectColorSystem = () => {

    const changeTheme = useThemeStore(state => state.setIsDark);

    useEffect(() => {
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        const localStorageTheme = localStorage.getItem("themeStore");

        if (prefersDark && !localStorageTheme) {
            changeTheme(true);
        }

    }, [changeTheme]);

}
