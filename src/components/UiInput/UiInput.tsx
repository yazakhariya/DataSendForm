import * as S from './UiInput.style'

type Props = {
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
  type: string
  name?: string
  id?: string
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void
  error?: boolean
}

const UiInput = ({
  value,
  onChange,
  placeholder,
  type,
  name,
  id,
  onBlur,
  error
}: Props) => {
  return (
    <S.Input
      id={id}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      type={type}
      name={name}
      onBlur={onBlur}
      $error={error}
    />
  )
}

export default UiInput
