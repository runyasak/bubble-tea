import axios from 'axios'
/* eslint-disable no-use-before-define */

export default {
  getGameContent
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
  let content = {}
  try {
    const result = await axios.get('/db.json')
    if (result.status === 200) {
      content = result.data
    }
  } catch (e) {
    console.log(e)
  }
  return content
}
