import axios from 'axios'

/* eslint-disable no-use-before-define */

export default {
  fetchGameContent
}

function fetchGameContent() {
  let content = JSON.parse(localStorage.getItem('content'))
  if (!content) {
    axios.get('/db.json')
      .then((r) => {
        if (r.status === 200) {
          content = r.data
          localStorage.setItem('content', JSON.stringify(content))
        }
      })
  }
  return content || {}
}
