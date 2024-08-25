import React from 'react'
import Navbar from './component/Navbar'
import Hero from './component/Hero'
import Service from './component/Service'
// import Proptesting from './component/Proptesting'
import CountryForm from './component/CountryForm'


const Display = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Service />
      {/* <Proptesting /> */}
      <CountryForm />
    </div>
  )
}

export default Display
