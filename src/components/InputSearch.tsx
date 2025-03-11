"use client"

import { useInputStore } from "@/store/inputStore"
import { SubmitHandler, useForm } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod';
import { schemaInput } from "@/schema/input";
import { ToastContainer } from "react-toastify";
import { useFormErrors } from "@/hooks/useFormErrors";

export interface Input {
    search: string
}

export const InputSearch = () => {

    const searchWord = useInputStore(state => state.setWord)
    const { register, handleSubmit, formState: { errors }, } = useForm<Input>({ resolver: zodResolver(schemaInput) })

    useFormErrors(errors)

    const onSubmit: SubmitHandler<Input> = (data) => {
        searchWord(data.search)
    }

    return (
        <form
            className="relative w-full"
            onSubmit={handleSubmit(onSubmit)}
        >
            <input
                type="text"
                className={`w-full h-[48px] md:h-[64px] md:text-xl px-4 py-3 rounded-xl bg-gray-100 dark:bg-[#1f1f1f] text-gray-800 dark:text-white font-bold outline-none
        placeholder-gray-500 shadow-sm transition-all duration-200 `}
                {...register("search", { required: true })}
            />
            <div className="absolute inset-y-0 right-4 flex items-center">
                <button className="text-purple-500 hover:text-purple-700 focus:outline-none" aria-label="Search">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </button>
            </div>
            <ToastContainer />
        </form>
    )
}
