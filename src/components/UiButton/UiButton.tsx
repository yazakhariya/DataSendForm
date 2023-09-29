import * as S from './UiButton.style'

type Props = {
  onClick?: () => void
  children: React.ReactNode
  disabled?: boolean
  backgroundColor: string
}

const UiButton = ({ onClick, children, disabled, backgroundColor }: Props) => {
  return (
    <S.Button $backgroundColor={backgroundColor} disabled={disabled} onClick={onClick}>
      {children}
    </S.Button>
  )
}

export default UiButton
