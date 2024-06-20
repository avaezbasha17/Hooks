import React, { Fragment, useState } from 'react'
import UseFetch from './UseFetch'

const UserData = () => {
    const [user,setUser]= useState([])
    const {data,error} = UseFetch(`https://jsonplaceholder.typicode.com/users`)

    if (error) return <p>Error: {error.message}</p>

    if (data) {
        return (
          <Fragment>
            {data.map((x) => (
              <div key={x.id}>
                <h1>{x.name}</h1>
                <h2>{x.email}</h2>
              </div>
            ))}
          </Fragment>
        );
      }

}

export default UserData