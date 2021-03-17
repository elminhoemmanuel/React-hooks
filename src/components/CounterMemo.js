import React , { useMemo, useState} from 'react'

const CounterMemo = () => {

    const [counterOne, setCounterOne] = useState(0);
    const [counterTwo, setCounterTwo] = useState(0);

    const IncrementOne = () =>{
        setCounterOne(counterOne + 1)
    }

    const IncrementTwo = () =>{
        setCounterTwo(counterTwo + 1)
    }

    const isEven = useMemo(() =>{
        let i = 0
        while(i<2000000) i++
        return counterOne % 2 === 0
    },[counterOne])

    return ( 
        <div>
            <div>
                <button onClick={IncrementOne}>Count1 is - {counterOne}</button>
                <span>{isEven ? 'Even' : 'Odd'}</span>
            </div>
            <div>
                <button onClick={IncrementTwo}>Count2 is - {counterTwo}</button>
            </div>

        </div>
     );
}
 
export default CounterMemo;