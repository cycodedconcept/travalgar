import React, {useState} from 'react'
import Divide from './Divide'
import TestService from './TestService'
import './style.css'

const Service = () => {
  const [hide, setHide] = useState(false);

  const displayService = () => {
    setHide(true)
  }
  return (
    <React.Fragment>
      <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-1"></div>
          <div className="col-sm-12 col-md-12 col-lg-10">
              <div className="service-header text-center mt-5 mb-5">
                  <h2><b>Our Services</b></h2>
                  <div>
                      <Divide />
                  </div>
                  <p style={{color: '#7D7987'}}>
                     We provide to you the best choiches for you. 
                     Adjust it to your health needs and make sure 
                     your undergo treatment<br/> with our highly 
                     qualified doctors you can consult with us 
                     which type of service is suitable for your 
                     health
                  </p>
              </div>
              <div className="row">
                {hide ? (<TestService/>) : (<form>
                  <input type="text" name="" id="" />
                  <input type="text" name="" id="" />
                  <button>login</button>
                </form>)}

                  <button onClick={displayService}>show services</button>
              </div>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-1"></div>
      </div>
    </React.Fragment>
  )
}

export default Service
