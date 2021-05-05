import React from 'react'
// import { TextArea } from 'semantic-ui-react'

const AddEntry = () => {
  return (
    <form>
      <div>
        <label for="entry_content">Content</label>
        <textarea id="entry_content" name="entry_content" rows="10" cols="100"/>
      </div>
      <input type="submit" value="Save" />
    </form>
  )
}

export default AddEntry
