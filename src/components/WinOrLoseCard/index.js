// Write your code here.

import './index.css'

const loseImg = 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
const wonImg = 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'

const WinOrLoseCard = props => {
  const {isWin, onClickPlay, score} = props
  const imgUrl = isWin ? wonImg : loseImg
  const gameStatus = isWin ? 'You Won' : 'You Lose'
  const scoreValue = isWin ? 'Best Score' : 'Score'

  return (
    <div className="win-or-loss-container">
      <div className="section-container">
        <h1 className="heading">{gameStatus}</h1>
        <p className="score-value">{scoreValue}</p>
        <p className="score-para">{score}/12</p>
        <div className="btn-container">
          <button className="play-btn" type="button" onClick={onClickPlay}>
            Play Again
          </button>
        </div>
      </div>
      <div className="win-or-lose-img-con">
        <img className="win-lose-img" alt="win or lose" src={imgUrl} />
      </div>
    </div>
  )
}

export default WinOrLoseCard
