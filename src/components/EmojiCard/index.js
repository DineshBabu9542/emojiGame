// Write your code here.

import './index.css'

const EmojiCard = props => {
  const {emojiDetails, clickEmoji} = props

  const {id, emojiName, emojiUrl} = emojiDetails

  const onClickCard = () => {
    clickEmoji(id)
  }

  return (
    <li className="list-item-container">
      <button className="emoji-btn" type="button" onClick={onClickCard}>
        <img className="emoji-img" src={emojiUrl} alt={emojiName} />
      </button>
    </li>
  )
}

export default EmojiCard
