import React from 'react'

const Count = (x) => {
    console.log(x);
    return (
        <div>
            {x.children}:{x.data}
        </div>
    )
}

export default React.memo(Count)