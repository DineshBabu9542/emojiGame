/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.

import {Component} from 'react'

import './index.css'

import EmojiCard from '../EmojiCard'

import WinOrLoseCard from '../WinOrLoseCard'

import NavBar from '../NavBar'

class EmojiGame extends Component {
  state = {
    clickEmoji: [],
    isGame: true,
    topScore: 0,
  }

  restClickAgain = () => {
    this.setState({clickEmoji: [], isGame: true})
  }

  renderScore = () => {
    const {emojisList} = this.props

    const {clickEmoji} = this.state

    const isWin = emojisList.length === clickEmoji.length

    return (
      <WinOrLoseCard
        isWin={isWin}
        onClickPlay={this.restClickAgain}
        score={clickEmoji.length}
      />
    )
  }

  gameFinishAndScore = score => {
    const {topScore} = this.state

    let newTopScore = topScore

    if (score > newTopScore) {
      newTopScore = score
    }
    this.setState({topScore: newTopScore, isGame: false})
  }

  clickEmoji = id => {
    const {emojisList} = this.props

    const {clickEmoji} = this.state

    const clickEmojiPre = clickEmoji.includes(id)

    const clickEmojiLen = clickEmoji.length

    if (clickEmojiPre) {
      this.gameFinishAndScore(clickEmojiLen)
    } else {
      if (emojisList.length - 1 === clickEmojiLen) {
        this.gameFinishAndScore(emojisList.length)
      }

      this.setState(preState => ({
        clickEmoji: [...preState.clickEmoji, id],
      }))
    }
  }

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  renderEmoji = () => {
    const shuffleEmojiList = this.shuffledEmojisList()

    return (
      <ul className="card-un-order-list-con">
        {shuffleEmojiList.map(eachObject => (
          <EmojiCard
            key={eachObject.id}
            emojiDetails={eachObject}
            clickEmoji={this.clickEmoji}
          />
        ))}
      </ul>
    )
  }

  render() {
    const {isGame, clickEmoji, topScore} = this.state
    return (
      <div className="container">
        <NavBar score={clickEmoji.length} isGame={isGame} topScore={topScore} />

        <div className="emoji-body">
          {isGame ? this.renderEmoji() : this.renderScore()}
        </div>
      </div>
    )
  }
}

export default EmojiGame
