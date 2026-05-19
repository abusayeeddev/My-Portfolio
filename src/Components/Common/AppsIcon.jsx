import React from 'react'
import Images from './Images'

const AppsIcon = ({ src, alt }) => {
  return (
    <div className='w-20 bg-buttonBg rounded-[10px] p-6 shadow-[0_0px_5px_0_rgba(0,0,0,0.4)] group' >
      <Images className={`w-full h-fit object-cover transition duration-150 group-hover:scale-130`} src={src} alt={alt}/>
    </div>
  )
}

export default AppsIcon
