import UiButton from 'src/components/UiButton/UiButton'
import * as S from './Buttons.style'

type Props = {
  disabled: boolean
  result: unknown
}

export default function Buttons({ disabled, result }: Props) {
  
  function handleSendData() {
    alert(JSON.stringify(result))
  }

  function handleCancel() {
    alert('Canceled')
  }

  return (
    <S.Wrapper>
      <UiButton onClick={() => handleCancel()} children={'Cancel'} backgroundColor={''} />
      <UiButton
        onClick={() => handleSendData()}
        disabled={disabled}
        children={'Next'}
        backgroundColor={'purple'}
      />
    </S.Wrapper>
  )
}
