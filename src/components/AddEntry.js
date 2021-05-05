import React from 'react'
import DateTime from './DateTime'
// import { TextArea } from 'semantic-ui-react'

const AddEntry = () => {
  return (
    <div style={{border: 'solid green', marginTop: '10px' }}>
      <DateTime />
      <form>
        <div>
          <label for="entry_content">Content</label>
          <textarea id="entry_content" name="entry_content" rows="10" cols="100"/>
        </div>
        <input type="submit" value="Save" />
      </form>
    </div>
  )
}

export default AddEntry
