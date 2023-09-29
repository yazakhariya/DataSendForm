import { styled } from 'styled-components'

type Props = {
  $backgroundColor: string
}

export const Button = styled.button<Props>`
  outline: none;
  color: ${({ $backgroundColor }) =>
    $backgroundColor === 'purple' ? '#FFFFFF' : '#7A5CFA'};
  border: 1px solid #7a5cfa;
  border-radius: 5px;
  font-size: 15px;
  width: 172px;
  cursor: pointer;
  transition: all 0.3s ease;
  padding: 16px;
  background-color: ${({ $backgroundColor }) =>
    $backgroundColor === 'purple' ? '#7A5CFA' : '#FFFFFF'};

  &&:hover {
    background-color: #cccccc;
  }

  &&:active {
    background-color: #7a5cfa;
  }
`
