
const ScoreBoard = ({score}) => {
  return (
    <div className={score > 100 ? "score-board red" : "score-board"}>{score}</div>
  )
}

export default ScoreBoard;