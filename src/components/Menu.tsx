"use client"
import { IconHistory } from "./icons/IconHistory"
import { IconLogo } from "./icons/IconLogo"
import { IconMoon } from "./icons/IconMoon"
import { SelectFont } from "./SelectFont"
import { Switch } from "./Switch"

interface MenuProps {
    handleOpen: () => void
}

export const Menu = ({ handleOpen }: MenuProps) => {

    return (
        <div className="flex items-center justify-between w-full">
            <IconLogo className="w-[28px] h-[31px]" />
            <div className="flex items-center gap-4">
                <div onClick={handleOpen}>
                    <IconHistory className="w-6 h-6 stroke-gray-400 cursor-pointer" />
                </div>
                <SelectFont />
                <Switch />
                <IconMoon className="w-5 stroke-gray-400 dark:stroke-purple-500" />
            </div>
        </div>
    )
}
