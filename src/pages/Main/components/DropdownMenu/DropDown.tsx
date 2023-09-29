import * as S from './DropDown.style'
import * as React from 'react'
import vector from 'src/assets/VectorDown.svg'

export default function DropDown() {
  const [dropdownState, setDropdownState] = React.useState<boolean>(false)
  const [active, setActive] = React.useState<boolean>(false)
  const [value, setValue] = React.useState<string>('Dropdown option')

  function handleDropdownClick() {
    setActive(!active)
    setDropdownState(!dropdownState)
    if (active) {
      setDropdownState(false)
      setActive(false)
    }
  }

  function handleOptionClick(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    setValue((e.target as HTMLDivElement).innerText)
    setDropdownState(false)
    setActive(false)
  }

  return (
    <S.Wrapper>
      <S.SelectForm $active={active} onClick={handleDropdownClick}>
        {value}
        <S.Vector $active={active} src={vector} />
      </S.SelectForm>
      {active && (
        <S.DropdownBox>
          <S.Option onClick={(e) => handleOptionClick(e)}>
            Dropdown option
          </S.Option>
          <S.Option onClick={(e) => handleOptionClick(e)}>
            Dropdown option 1
          </S.Option>
          <S.Option onClick={(e) => handleOptionClick(e)}>
            Dropdown option 2
          </S.Option>
        </S.DropdownBox>
      )}
    </S.Wrapper>
  )
}
