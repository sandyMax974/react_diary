import React from 'react'

const DateTime = () => {
  let date = new Date()
  let formattedDate = date.toDateString()
  let formattedTime = date.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' })

  return (
    <span style={{marginRight: '10px' }}>
      {formattedDate} - {formattedTime}
    </span>
  )
}

export default DateTime
