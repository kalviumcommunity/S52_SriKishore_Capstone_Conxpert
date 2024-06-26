import React from 'react'
import {services} from './../../public/assets/data/services'
import ServiceCard from '../Components/Services/ServiceCard'

const Services = () => {
  return (
    <section>
      <div className='container'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[50px] lg:gap-[30px] mt-[30px] lg:-mt-[80px] px-[20px] lg:pt-[20px] lg:px-[100px]'>
          {services.map((item, index) => (
            <ServiceCard item={item} index={index} key={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
