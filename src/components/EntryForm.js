import React, { useState } from 'react'

const EntryForm = ({ onSave }) => {
  const today = new Date()
  const formattedDate = today.toDateString()
  const formattedTime = today.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' })
  const date = today.getDay()+'-'+today.getMonth()+'-'+today.getFullYear()+' '+formattedTime

  const [text, setText] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()

    if (!text) {
      alert('Please add some content')
      return
    }

    onSave({ date, text })

    setText('')
  }


  return (
    <div>
      <div style={{marginRight: '10px' }}>
        {formattedDate} - {formattedTime}
      </div>

      <form onSubmit={onSubmit}>
          <div style={{padding: "20px"}}>
            <label>Content</label>
            <textarea 
              id="entry_text" 
              name="entry_text" 
              value={text}
              onChange={(e) => setText(e.target.value)}
              style={{width: "100%"}}
            />
          </div>
        <input type="submit" value="Save" />
      </form>
    </div>
  )
}

export default EntryForm