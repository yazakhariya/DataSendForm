import * as S from './ToggleSwicth.style'
import * as React from 'react'

export default function ToggleSwitch() {
  const [active, setActive] = React.useState<boolean>(false)

  return (
    <S.Container>
      <S.SwitchInput
        onChange={() => setActive(!active)}
        id="switch"
        type="checkbox"
      />
      <S.SwitchLabel $active={active} htmlFor="switch">
        <S.SwitchButton />
      </S.SwitchLabel>
      <S.Label></S.Label>
    </S.Container>
  )
}
