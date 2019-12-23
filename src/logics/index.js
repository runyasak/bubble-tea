import axios from 'axios'

/* eslint-disable no-use-before-define */

export default {
  getGameContent,
  updateGameContentLocally
}

async function* getGameContent() {
  const localContent = JSON.parse(localStorage.getItem('content')) || null
  if (localContent) {
    yield { ...localContent, mode: 'local' }
  }
  const updatedContent = await updateGameContentDownstream(localContent)
  yield { ...updatedContent, mode: 'updated' }
}

async function updateGameContentDownstream(localContent) {
  const newGameContent = await fetchGameContent()
  const gameContent = { ...localContent, ...newGameContent }
  localStorage.setItem('content', JSON.stringify(gameContent))
  return gameContent
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

function updateGameContentLocally(key, content) {
  const currentGameContent = JSON.parse(localStorage.getItem('content'))
  currentGameContent[key] = content
  localStorage.setItem('content', JSON.stringify(currentGameContent))
}
