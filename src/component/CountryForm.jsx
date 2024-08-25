import React, {useState} from 'react'
import axios from 'axios'

const CountryForm = () => {
    const [country, setCountry] = useState('');
    const [states, setStates] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const response = await axios.post('https://countriesnow.space/api/v0.1/countries/states', {
                country: country
            });
            setStates(response.data.data.states);
        } catch (error) {
            console.error('Error fetching states', error)
        }
    }
  return (
    <>

      <div className="form-rec text-center m-5">
        <input type="text" 
        value={country} 
        onChange={(e) => setCountry(e.target.value)}
        />
        <button className='btn btn-outline-success' onClick={handleSubmit}>Get States</button>
      </div>

      <div className="row">
          {
              states.map((item) =>
              <div className="col-sm-12 col-md-12 col-lg-2" key={item.id}>
                  <p>{item.name}</p>
              </div>
              )
          }
      </div>
    </>
  )
}

export default CountryForm
