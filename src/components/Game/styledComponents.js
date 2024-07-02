import styled from 'styled-components/macro'

export const Container = styled.div`
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: 50px;
  background-color:#223a5f;

`
export const Header = styled.div`
  display:flex;
  flex-direction: row;
  justify-content: space-between;
  background-color:transparent;
  border: solid 5px white;
  width:900px

`
export const HeaderHeading = styled.h1`
  color:#ffffff;
`
export const HeaderCard = styled.div`
  background-color: #ffffff;
  border-radius:2px;
  height:150px;
  width:150px;
`

export const CardHeading = styled.h1`
  color:#223a5f;
  font-family:Roboto;
`
export const CardPara = styled.p`
  color:#223a5f;
  font-family:Roboto; 
`
export const ChoiceCard = styled.div`
  background-color:transparent;
  display:flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap:wrap;
  max-width:300px;
`
export const Button = styled.button`
  cursor: pointer;
  height:120px;
  width:120px;
  border-radius:60px;

`
export const ImageButton = styled.img`
  height:45px;
  width:45px;
`
export const RulesButton = styled.button`
  background-color:#ffffff;
  color:#223a5f;
  height:40px;
  eidth:90px;
  align-self:flex-end;
  cursor: pointer;
`
export const ResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`

export const PlayAgainButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  margin-top: 10px;
  cursor: pointer;
`
