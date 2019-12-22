import axios from 'axios'

/* eslint-disable no-use-before-define */

export default {
  fetchGameContent
}

async function fetchGameContent() {
  let content = JSON.parse(localStorage.getItem('content'))
  if (!content) {
    try {
      const result = await axios.get('/db.json')
      if (result.status === 200) {
        content = result.data
        localStorage.setItem('content', JSON.stringify(content))
      }
    } catch (e) {
      console.log(e)
    }
  }
  return content || {}
}
