import {Component} from 'react'
import Header from '../Header'
import Popup from 'reactjs-popup'
import {IoMdClose} from 'react-icons/io'
import 'reactjs-popup/dist/index.css'
import './index.css'

import {
  Container,
  ChoiceCard,
  Button,
  ImageButton,
  PlayAgainButton,
  RulesButton,
} from './styledComponents'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
    name: 'rockButton',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
    name: 'scissorsButton',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
    name: 'paperButton',
  },
]

class Game extends Component {
  state = {
    userChoice: null,
    computerChoice: null,
    result: '',
    gameView: true,
    score: 0,
  }

  handleChoice = choice => {
    const computerChoice =
      choicesList[Math.floor(Math.random() * choicesList.length)]

    let result = ''
    let score = this.state.score

    if (choice.id === computerChoice.id) {
      result = 'It IS DRAW'
      score = 0
    } else if (
      (choice.id === 'ROCK' && computerChoice.id === 'SCISSORS') ||
      (choice.id === 'SCISSORS' && computerChoice.id === 'PAPER') ||
      (choice.id === 'PAPER' && computerChoice.id === 'ROCK')
    ) {
      result = 'YOU WON'
      score += 1
    } else {
      result = 'YOU LOSE'
      score -= 1
    }
    this.setState({
      userChoice: choice,
      computerChoice: computerChoice,
      result: result,
      score: score,
      gameView: false,
    })
  }

  handlePlayAgain = () => {
    this.setState({
      userChoice: null,
      computerChoice: null,
      result: '',
      gameView: true,
    })
  }
  ReactPopUp = () => {
    return (
      <Popup modal trigger={<RulesButton type="button">RULES</RulesButton>}>
        {close => (
          <div className="modal-container">
            <button
              className="close-button"
              type="button"
              data-testid="closeButton"
              onClick={() => close()}
            >
              <IoMdClose size={20} color="#231f20" />
            </button>
            {
              <img
                src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                alt="rules"
                className="popup-content"
              />
            }{' '}
          </div>
        )}
      </Popup>
    )
  }
  renderGame = () => {
    const {score} = this.state

    return (
      <Container>
        <Header score={score} />
        <ChoiceCard>
          {choicesList.map(choice => (
            <Button
              key={choice.id}
              onClick={() => this.handleChoice(choice)}
              data-testid={choice.name}
            >
              <ImageButton src={choice.imageUrl} alt={choice.id} />
            </Button>
          ))}
        </ChoiceCard>
        {this.ReactPopUp()}
      </Container>
    )
  }

  renderGameresult = () => {
    const {userChoice, computerChoice, result, score} = this.state

    return (
      <Container>
        <Header score={score} />
        <div>
          <p>YOU</p>
          <img src={userChoice.imageUrl} alt="your choice" />
        </div>
        <div>
          <p>OPPONENT</p>
          <img src={computerChoice.imageUrl} alt="opponent choice" />
        </div>
        <p>{result}</p>
        <PlayAgainButton onClick={this.handlePlayAgain}>
          Play Again
        </PlayAgainButton>
      </Container>
    )
  }

  render() {
    const {gameView} = this.state
    return <>{gameView ? this.renderGame() : this.renderGameresult()}</>
  }
}

export default Game
