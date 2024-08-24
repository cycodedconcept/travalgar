import React, {useState} from 'react'

const Proptesting = () => {
    const [count, setCount] = useState(5);

    const increase = () => {
        setCount(count - 1)
    }
  return (
    <div>
      <div>
        <p>Count: {count}</p>
          <button onClick={increase}>Increment</button>
        </div>
    </div>
  )
}

export default Proptesting
