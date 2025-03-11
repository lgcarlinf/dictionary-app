import React, { HTMLAttributes } from 'react'
//import module css
import styles from './IconButton.module.css'

export const IconButton = (props: HTMLAttributes<SVGSVGElement>) => {
    return (
        <div className={styles.playButton}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 77 77" {...props}>
                <g className='g' fill="#A445ED" fillRule="evenodd">
                    <circle className='circle' cx="37.5" cy="37.5" r="37.5" opacity=".25" />
                    <path className='path' d="M29 27v21l21-10.5z" />
                </g>
            </svg>
        </div >

    )
}
