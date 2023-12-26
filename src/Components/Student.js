import React from 'react'

const Student = ({name,address,score}) => {
  return (
    <div>
        <h3>Name: {name}</h3>
        <h3>Address: {address}</h3>
        <h3>Score: {score}</h3>
    </div>
  )
}

export default Student;
