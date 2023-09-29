import * as S from './UiInput.style'

type Props = {
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
  type: string
  name?: string
  id?: string
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void
}

const UiInput = ({
  value,
  onChange,
  placeholder,
  type,
  name,
  id,
  onBlur,
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
    />
  )
}

export default UiInput
