import { styled } from 'styled-components'

type Props = {
  $active: boolean
}

export const Wrapper = styled.div`
  position: relative;
`

export const SelectForm = styled.div<Props>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 564px;
  outline: none;
  font-size: 15px;
  border-radius: 8px;
  border: 1px solid #cccccc;
  padding: 16px;
  color: #666666;
  border-bottom-left-radius: ${({ $active }) =>
    $active === true ? '0px;' : null};
  border-bottom-right-radius: ${({ $active }) =>
    $active === true ? '0px;' : null};

  &&:hover {
    border: 2px solid #7a5cfa;
  }
`

export const Vector = styled.img<Props>`
  transition: all 300ms;
  transform: ${({ $active }) => ($active === true ? 'rotate(180deg);' : null)};
`

export const DropdownBox = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
`

export const Option = styled.div`
  font-size: 15px;
  color: #666666;
  padding: 15px;
  transition: all 300ms;
  width: 564px;
  border: 1px solid #cccccc;
  padding: 16px;
  background-color: #ffffff;
  text-decoration: none;

  &&:nth-child(3) {
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
  }

  &&:hover {
    background-color: #7a5cfa;
  }
`
