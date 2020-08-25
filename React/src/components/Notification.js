import React from 'react'

const Notification = ({ message }) => { //component for showing error messages
    const errorStyle ={
        color:"red",
        margin:10
    }
    if (message === null) {
      return null
    }
  
    return (
      <div style={errorStyle}>
        {message}
      </div>
    )
  }

  export default Notification