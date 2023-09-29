import * as S from './RadioBox.style'
import UiInput from 'src/components/UiInput/UiInput'

export default function RadioBox() {
  return (
    <S.InputsWrapper>
      <S.RadioSelectionBox>
        <UiInput type="radio" name="radio" value="Radio selection 1" />
        <S.Label> Radio selection 1</S.Label>
      </S.RadioSelectionBox>
      <S.RadioSelectionBox>
        <UiInput type="radio" name="radio" value="Radio selection 2" />
        <S.Label> Radio selection 2</S.Label>
      </S.RadioSelectionBox>
      <S.RadioSelectionBox>
        <UiInput type="radio" name="radio" value="Radio selection 3" />
        <S.Label> Radio selection 3</S.Label>
      </S.RadioSelectionBox>
    </S.InputsWrapper>
  )
}
