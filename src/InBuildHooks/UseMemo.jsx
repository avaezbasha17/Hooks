import React, { useMemo, useState } from 'react'

const UseMemo = () => {
    const [num, setNum] = useState(1);
    const [otherState, setOtherState] = useState(false);

    const Even = (num) => {
        console.log('Calculating...');
        let result = 0;
        for (let i = 0; i < 1000000000; i++) {
          result += num;
        }
        return result;
      };
    
      // Memoize the result of the expensive calculation
      const calculatedValue = useMemo(() => Even(num), [num]);


    //   const calculatedValue = Even(num);

    return (
        <div>
            <h1>useMemo Example</h1>
            <p>Calculated Value: {calculatedValue}</p>
            {console.log(otherState)}
            <button onClick={() => setNum(num + 1)}>Increment Num</button>
            <button onClick={() => setOtherState(!otherState)}>Toggle Other State</button>
        </div>
    )
}

export default UseMemo
