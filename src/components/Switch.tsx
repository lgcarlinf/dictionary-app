"use client"
import { useThemeStore } from '../store/themeStore';

export const Switch = () => {

    const isDark = useThemeStore(state => state.isDark)
    const changeTheme = useThemeStore(state => state.setIsDark)

    const handleChange = () => {
        changeTheme(!isDark);
    };

    return (
        <>
            <label className="inline-flex items-center cursor-pointer">
                <input
                    type="checkbox"
                    className="sr-only peer"
                    checked={isDark}
                    onChange={handleChange} />
                <div className="relative w-[38px] h-5 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-[#979797] peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[3px] after:start-[5px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-[14px] after:w-[14px] after:transition-all peer-checked:bg-[#a445ed] dark:peer-checked:bg-[#a445ed]"></div>
            </label>
        </>
    )
}
