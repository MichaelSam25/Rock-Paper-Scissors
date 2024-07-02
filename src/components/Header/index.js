import {Heading, HeaderHeading, HeaderCard, CardPara} from './styledComponents'

const Header = props => {
  const {score} = props

  return (
    <Heading>
      <div>
        <HeaderHeading>
          Rock <br /> Paper <br /> Scissors
        </HeaderHeading>
      </div>
      <HeaderCard>
        <CardPara>Score</CardPara>
        <CardPara>{score}</CardPara>
      </HeaderCard>
    </Heading>
  )
}

export default Header
