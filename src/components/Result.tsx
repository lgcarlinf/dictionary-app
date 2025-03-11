"use client"
import { useSearchWord } from '@/hooks/useSearchWord'
import { useInputStore } from '@/store/inputStore'
import React from 'react'
import { IconButton } from './icons/play-button/IconButton'
import { usePlayAudio } from '@/hooks/usePlayAudio'

export const Result = () => {

    const word = useInputStore(state => state.word)

    const { data } = useSearchWord(word)
    const audio = data && data[0].phonetics.find(item => item.audio)?.audio
    const { playAudio } = usePlayAudio(audio)

    return (
        data && (
            <div className='flex flex-col gap-8'>
                <div className='flex justify-between'>
                    <div className='flex flex-col gap-2'>
                        <h1 className='text-3xl font-bold md:text-6xl dark:text-white'>{data[0]?.word}</h1>
                        <span className='text-lg text-purple-500 md:text-2xl'>{data[0]?.phonetic}</span>
                    </div>
                    <button onClick={playAudio}>
                        <IconButton className='w-[73px] h-[73px] hover:fill-white' />
                    </button>

                </div>
                <div className='flex flex-col gap-8'>
                    <div className='flex items-center gap-6'>
                        <h4 className='text-lg text-black font-bold dark:text-white'>{data[0]?.meanings[0]?.partOfSpeech}</h4>
                        <hr className='w-full text-[#e9e9e9]' />
                    </div>
                    <div className='flex flex-col gap-8'>
                        <span className='text-[#757575]'>Meaning</span>
                        <ul className='flex flex-col gap-3 list-disc list-inside leading-6'>
                            {data[0]?.meanings[0].definitions.map(item => (<li key={item.definition} className='marker:text-purple-500 dark:text-white'>{item.definition}</li>))}
                        </ul>
                        <div className='flex gap-8'>
                            <span className='text-[#757575] text-base'>Synonyms</span>
                            {
                                data[0]?.meanings[0].synonyms.map(item => (
                                    <span key={item} className='text-purple-500 text-base font-bold '>{item} </span>
                                ))
                            }
                        </div>
                    </div>
                </div>

                <div className='flex flex-col gap-8'>
                    <div className='flex items-center gap-6'>
                        <h4 className='text-lg text-black font-bold dark:text-white'>{data[0]?.meanings[1]?.partOfSpeech}</h4>
                        <hr className='w-full text-[#e9e9e9]' />
                    </div>
                    <div className='flex flex-col items-start gap-6'>
                        <span className='text-[#757575] text-left'>Meaning</span>
                        <ul className='flex flex-col gap-3 list-disc list-inside leading-6'>
                            {data[0]?.meanings[1]?.definitions.map(item => (
                                <div className='flex flex-col gap-3' key={item.definition}>
                                    <li className='marker:text-purple-500 dark:text-white'>{item.definition}</li>
                                    {item.example && (<p className='text-base text-[#757575] pl-6'> &quot;{item.example}&quot; </p>)}
                                </div>
                            ))}
                        </ul>
                    </div>
                </div>

                <hr className='w-full text-[#e9e9e9]' />
                <div className='flex flex-col'>
                    <span className='text-sm text-[#757575] underline'>Source</span>
                    {data[0]?.sourceUrls.map(item => (
                        <a key={item} href="item" className='dark:text-white'>{item}</a>
                    ))}
                </div>
            </div>
        )
    )
}
