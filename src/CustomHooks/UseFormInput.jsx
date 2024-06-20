import React, { useState } from 'react'

const UseFormInput = (initialValue) => {
    const [value, setValue] = useState(initialValue);

    const handleChange = (e) => {
        setValue(e.target.value);
    };

    const reset = () => {
        setValue(initialValue);
    };

    return {
    value,
    onChange: handleChange,
    reset,
  };
}

export default UseFormInput