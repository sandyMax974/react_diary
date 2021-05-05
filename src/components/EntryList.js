import React from 'react'

const EntryList = ({ entries }) => {
  return (
    <div style={{border: 'solid red', marginTop: '20px' }}>
      {entries.map((entry, index) => { 
        return (
          <div key={index} style={{margin: '10px', border: 'solid black 1px'}}>
            <p>{entry.date}</p>
            <h4>{entry.text}</h4> 
          </div>
        )
      })}
    </div>
  )
}

export default EntryList
