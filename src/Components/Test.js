import {useState} from 'react'

const arrs = [1,2,3]

export const Test = () => { 

    const [count, setCount] = useState(1);   
    const clickCount = () => { 
        setCount(count+1)
    }


    return <div>
        <button onClick={clickCount}> + </button>
        <p>b {count}</p>
        <hr/>
        {arrs.map(elem => {
            return <p>{elem}</p>
        })}
    </div>
}