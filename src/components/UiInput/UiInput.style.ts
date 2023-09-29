import { styled } from 'styled-components'

type Props = {
  $error?: boolean
}

export const Input = styled.input<Props>`
  height: calc(2.25rem + 2px);
  padding: 0.375rem 0.75rem;
  font-family: inherit;
  font-size: 12px;
  line-height: 1.5;
  color: #212529;
  background-color: #fff;
  background-clip: padding-box;
  border: ${({ $error }) =>
    $error === true ? '2px solid #EB5757' : '1px solid #bdbdbd'};
  border-radius: 0.25rem;
  outline: none;
`
