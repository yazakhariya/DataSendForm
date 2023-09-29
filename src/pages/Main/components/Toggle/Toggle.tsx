import UiInput from 'src/components/UiInput/UiInput'
import * as S from './Toggle.style'
import ToggleSwitch from './components/ToggleSwitch/ToggleSwitch'

export default function Toggle() {
  return (
    <S.ToggleBox>
      <S.RememberBox>
        <UiInput type="checkbox" name="checkbox" />
        <S.Label>Remember me</S.Label>
      </S.RememberBox>
      <ToggleSwitch />
    </S.ToggleBox>
  )
}
