// Write your code here.

import './index.css'

const NavBar = props => {
  const {score, isGame, topScore} = props

  return (
    <nav className="nav-container">
      <div className="nav-con">
        <div className="emoji-img-with-name-con">
          <img
            className="emoji-logo"
            alt="emoji logo"
            src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          />
          <h1 className="emoji-heading">Emoji Game</h1>
        </div>
        <div className="scores-container">
          {isGame && (
            <div>
              <p className="score-name">Score: {score}</p>
              <p className="top-score-name">TopScore: {topScore}</p>
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}

export default NavBar
