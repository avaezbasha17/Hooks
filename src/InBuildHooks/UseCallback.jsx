import React, { useCallback, useState } from 'react'
import Count from './Count';
import Button from './Button';

const UseCallback = () => {
  const [age, setAge] = useState(0)
  const [salary, setSalary] = useState(0)

  return (
    <div>
      <Count data={age}>Age</Count>
      <Button fun={useCallback(() => setAge(age + 1), [age])}>IncerementAge</Button>
      <Count data={salary}>Salary</Count>
      <Button fun={useCallback(() => setSalary(salary + 5000), [salary])}>IncrementSalary</Button>
    </div>
  );
};

export default UseCallback