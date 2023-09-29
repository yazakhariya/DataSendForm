import * as S from './ToggleSwicth.style'

export default function ToggleSwitch() {
  return (
    <S.Container>
      <S.SwitchInput id="switch" type="checkbox" />
      <S.SwitchLabel htmlFor="switch">
        <S.SwitchButton />
      </S.SwitchLabel>
      <S.Label>Off</S.Label>
    </S.Container>
  )
}
