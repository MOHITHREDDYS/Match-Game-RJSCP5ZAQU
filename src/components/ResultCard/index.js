import './index.css'

const ResultCard = props => {
  const {score, playAgain} = props

  const onClickPlayAgainButton = () => {
    playAgain()
  }

  return (
    <div className="results_container">
      <div className="results_background-image">
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
          alt="trophy"
          className="trophy_image"
        />
        <p className="result_score">YOUR SCORE</p>
        <p className="score_number">{score}</p>
        <button
          type="button"
          className="play_again_button"
          onClick={onClickPlayAgainButton}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
            alt="reset"
            className="reset_image"
          />
          <p className="play_again">PLAY AGAIN</p>
        </button>
      </div>
    </div>
  )
}

export default ResultCard
