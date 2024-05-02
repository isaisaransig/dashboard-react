import React from 'react'
import data from '../data/data.json'
import { OverviewCard } from './OverviewCard'
import { OverviewTodayCard } from './OverviewTodayCard'



export const OverviewContainer = () => {

  return (
    <>
      <div className='absolute top-[191px] w-full sm:px-10 xl:px-32 '>
        <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
          {
            data.overview.map((item) => <OverviewCard key={item.id} {...item} />)
          }
        </section>
        <h2 className='text-2xl text-Dark-Grayish-Blue font-bold mt-4 mb-5 dark:text-white'>Overview - Today</h2>
        <section className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
          {
            data.overviewToday.map((item) => <OverviewTodayCard key={item.id} {...item} />)
          }
        </section>
      </div>
    </>
  )
}
