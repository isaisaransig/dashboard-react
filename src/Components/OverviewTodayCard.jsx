import React from 'react'
import upRow from '../assets/images/icon-up.svg'
import downRow from '../assets/images/icon-down.svg'
import facebookLogo from '../assets/images/icon-facebook.svg'
import twitterLogo from '../assets/images/icon-twitter.svg'
import instagramLogo from '../assets/images/icon-instagram.svg'
import youtubeLogo from '../assets/images/icon-youtube.svg'
const networkIcon = {
    Facebook: facebookLogo,
    Twitter: twitterLogo,
    Instagram: instagramLogo,
    YouTube: youtubeLogo,
  }

function toThousand(number) {
    if (number > 10000) {
        return `${(number / 1000)}K`
    }
    return number
}


export const OverviewTodayCard = ({ network, statsType, stats, isUp, image, statsChange }) => {
    return (
        <article className='bg-Light-Grayish-Blue w-full h-[126px] rounded-[10px] mb-4 mx-auto dark:bg-Dark-Desaturated-Blue hover:brightness-95 hover:cursor-pointer dark:hover:brightness-125 py-5 px-7'>
            <div className='flex justify-between items-center'>
                <p className='text-Dark-Grayish-Blue font-semibold'>{statsType}</p>
                <img src={networkIcon[network]} alt="" />
            </div>

            <div className='flex items-center justify-between mt-4'>
                <p className='text-3xl text-Dark-Blue font-bold mb-2 dark:text-white'>{toThousand(stats)}</p>
                <div className='flex items-center justify-center'>
                    <img src={isUp ? upRow : downRow} alt="" className='mr-2'/>
                    <p className={`${isUp ? 'text-Lime-Green' : 'text-Bright-Red'} text-s md:text-lg font-bold`}>{statsChange}</p>
                </div>
            </div>
        </article>
    )
}
