import React from 'react'
import upRow from '../assets/images/icon-up.svg'
import downRow from '../assets/images/icon-down.svg'
import facebookLogo from '../assets/images/icon-facebook.svg'
import twitterLogo from '../assets/images/icon-twitter.svg'
import instagramLogo from '../assets/images/icon-instagram.svg'
import youtubeLogo from '../assets/images/icon-youtube.svg'

const networkColor = {
  Facebook: 'bg-Facebook',
  Twitter: 'bg-Twitter',
  Instagram: 'bg-Instagram-gradient',
  YouTube: 'bg-YouTube',
}

const networkIcon = {
  Facebook: facebookLogo,
  Twitter: twitterLogo,
  Instagram: instagramLogo,
  YouTube: youtubeLogo,
}

function toThousand(number) {
  if(number > 10000){
    return `${(number/1000)}K`
  }
  return number
}

export const OverviewCard = ({ network, username, audience, audienceType, today, image, isUp }) => {
  return (
    <article className='bg-Light-Grayish-Blue w-full h-[216px] rounded-[10px] mb-4 mx-auto overflow-hidden text-center dark:bg-Dark-Desaturated-Blue hover:brightness-95 hover:cursor-pointer dark:hover:brightness-125'>
      <div className={`${networkColor[network]} rounded-t-[10px]  h-1.5 mb-8`}></div>
      <div className='flex items-center place-content-center mb-[28px] gap-2'>
        <img src={`${networkIcon[network]}`} />
        <p className=' text-x text-Dark-Grayish-Blue font-bold'>{username}</p>
      </div>
      <p className='text-5xl text-Dark-Blue font-bold mb-2 dark:text-white'>{toThousand(audience)}</p>
      <p className='text-Desaturated-Blue tracking-[5px]'>{audienceType.toUpperCase()}</p>
      <div className='flex items-center justify-center mt-2'>
        <img src={`${isUp ? upRow : downRow}`} className='mr-2 w-3 '/>
        <p className={`${isUp ? 'text-Lime-Green' : 'text-Bright-Red'} text-s font-bold`}>{today} Today</p>
      </div>
    </article>
  )
}
