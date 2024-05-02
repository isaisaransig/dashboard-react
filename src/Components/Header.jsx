import React from 'react'

export const Header = () => {

  function handleToggle() {
    const body = document.querySelector('html')
    body.classList.toggle('dark')
  }

  return (
    <header className='bg-Very-Pale-Blue h-[235px] rounded-b-[20px] pt-8 px-6 dark:bg-Very-Dark-Blue-Top'>
      <h1 className='text-Very-Dark-Blue text-2xl font-bold mb-1 dark:text-Very-Pale-Blue'>Social Media Dashboard</h1>
      <p className='text-Dark-Grayish-Blue font-bold mb-6 dark:text-Desaturated-Blue' >Total Followers: 23,004</p>
      <hr className='bg-black mb-[19px]' />
      <div className='flex justify-between'>
        <p className='text-Dark-Grayish-Blue font-bold dark:text-Desaturated-Blue'>Dark Mode</p>
        <label htmlFor="darkmode" className='bg-Toggle w-12 h-6 rounded-full cursor-pointer py-[3px] relative'>
          <input id="darkmode" type="checkbox" className='sr-only  peer' onClick={handleToggle}/>
          <div className='absolute w-full h-full rounded-full right-0 top-0 peer-checked:bg-Toggle-gradient'/>
          <div className='w-[18px] h-[18px] bg-Light-Grayish-Blue rounded-full shadow absolute left-1 peer-checked:translate-x-full transition-all'></div>
        </label>
      </div>
    </header>
  )
}
