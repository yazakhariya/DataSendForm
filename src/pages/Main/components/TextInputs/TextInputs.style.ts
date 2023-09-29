import { styled } from 'styled-components'

export const InputsWrapper = styled.div`
  background-color: transparent;
  display: flex;
  flex-direction: column;
  gap: 15px;

  > div > input {
    width: 564px;
  }
`

export const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`

export const InputText = styled.span`
  color: #666666;
  font-size: 15px;
`

export const ErrorBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-bottom: 7px;
`

export const ErrorMessage = styled.p`
  color: #eb5757;
  font-weight: 700;
  width: 350px;
`

export const ErrorImg = styled.img`
  width: 20px;
`
