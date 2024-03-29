import React from 'react'

// const Notification = () => {
//   return (
//     <div>Notification</div>
//   )
// }

const Notification = ({ type, message }) => {
    if (message === '' || message === null) {
      return null
    }
    
    if(type === 'error'){
        return (
            <div className='error'>
              {message}
            </div>
          )
    }
    else{
        return (
            <div className='notification'>
              {message}
            </div>
          )
    }
    
  }

export default Notification