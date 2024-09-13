import React from 'react'
import LabelIcon from '@mui/icons-material/Label';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function DealsAds() {
  return (
    <a href="#">
        <div className='flex w-full bg-slate-700 tracking-wide text-neutral-300
         xl:text-lg text-sm py-1.5 lg:py-1 justify-center'>
            <div className='flex w-1/2 ml-4 justify-center'>
                <div className='pr-4 '>
                    <LabelIcon/>
                </div>
                <div className='lg:px-8'>
                    SUPER DEALS
                </div>
                <div className='hidden sm:block border-l-2 px-4'>
                    There is something for everyone
                </div>
            </div>
            <div className='w-1/2 text-center'>
                Explore now <ArrowForwardIcon/>
            </div>            
        </div>
    </a>
  )
}

export default DealsAds