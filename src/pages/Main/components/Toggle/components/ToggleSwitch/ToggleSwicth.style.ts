import { styled } from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const SwitchInput = styled.input`
  height: 0;
  width: 0;
  visibility: hidden;
`

export const SwitchLabel = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  width: 49px;
  height: 24px;
  border-radius: 32px;
  border: 1px solid #cccccc;
  position: relative;
  background-color: #ffffff;
  margin-right: 10px;
`

export const SwitchButton = styled.button`
  position: absolute;
  margin: 3px;
  width: 18px;
  height: 18px;
  border-radius: 45px;
  border: none;
  background-color: #cccccc;
  box-shadow: 0 0 2px 0 rgba(10, 10, 10, 0.29);
  ${SwitchInput}:checked + ${SwitchLabel} & {
    left: calc(100% - 6px);
    transform: translateX(-100%);
    background-color: #FFFFFF;
  }
`

export const SwitchText = styled.span`
  color: #cccccc;
`

export const Label = styled.label`
  color: #666666;
  font-size: 15px;
`
