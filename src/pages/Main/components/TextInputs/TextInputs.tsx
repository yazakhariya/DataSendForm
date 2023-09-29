import UiInput from 'src/components/UiInput/UiInput'
import * as S from './TextInputs.style'
import * as React from 'react'
import { useInput } from './hooks'
import error from 'src/assets/error.svg'

type Props = {
  disable: React.Dispatch<React.SetStateAction<boolean>>
  data: React.Dispatch<React.SetStateAction<unknown[]>>
}

export default function TextInputs({ disable, data }: Props) {
  const [errorUsername, setErrorUsername] = React.useState<boolean>(false)
  const [errorPassword, setErrorPassword] = React.useState<boolean>(false)
  const username = useInput('', {
    isEmpty: true,
    minLength: 3,
    maxLength: 10,
  })
  const password = useInput('', { isEmpty: true, minLength: 4, maxLength: 12 })

  // дизейбл для кнопки

  React.useEffect(() => {
    username.emptyInputError ||
    password.emptyInputError ||
    username.minLengthError ||
    username.maxLengthError ||
    password.maxLengthError ||
    password.minLengthError
      ? disable(true)
      : disable(false)
  }, [
    disable,
    password.emptyInputError,
    password.maxLengthError,
    password.minLengthError,
    username.emptyInputError,
    username.maxLengthError,
    username.minLengthError,
  ])

  function handleData(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target
    if (
      username.emptyInputError ||
      username.minLengthError ||
      username.maxLengthError
    ) {
      setErrorUsername(true)
    } else if (
      password.emptyInputError ||
      password.maxLengthError ||
      password.minLengthError
    ) {
      setErrorPassword(true)
    } else {
      setErrorUsername(false)
      setErrorPassword(false)
    }
    data((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  return (
    <S.InputsWrapper>
      <S.InputBox>
        {/* импут для юзернейма */}
        <S.InputText>Username</S.InputText>
        <UiInput
          onChange={(e) => {
            username.onChange(e)
            handleData(e)
          }}
          onBlur={(e) => username.onBlur(e)}
          type="text"
          name={'username'}
          value={username.value}
          placeholder="Enter username"
          error={errorUsername}
        />

        {/* вывод ошибок */}
        <S.ErrorBox>
          {username.emptyInputError && username.isUsed ? (
            <S.ErrorMessage>
              Строка не должна быть пустой <S.ErrorImg src={error} />
            </S.ErrorMessage>
          ) : null}
          {username.minLengthError && username.isUsed ? (
            <S.ErrorMessage>
              Введите не менее 3 символов <S.ErrorImg src={error} />
            </S.ErrorMessage>
          ) : null}
          {username.maxLengthError && username.isUsed ? (
            <S.ErrorMessage>
              Введите не более 10 символов <S.ErrorImg src={error} />
            </S.ErrorMessage>
          ) : null}
        </S.ErrorBox>
      </S.InputBox>

      <S.InputBox>
        {/* инпут для пароля */}
        <S.InputText>Password</S.InputText>
        <UiInput
          onChange={(e) => {
            password.onChange(e)
            handleData(e)
          }}
          onBlur={(e) => password.onBlur(e)}
          type="password"
          name={'password'}
          value={password.value}
          placeholder="Enter password"
          error={errorPassword}
        />

        {/* вывод ошибок */}
        <S.ErrorBox>
          {password.emptyInputError && password.isUsed ? (
            <S.ErrorMessage>
              Строка не должна быть пустой <S.ErrorImg src={error} />
            </S.ErrorMessage>
          ) : password.minLengthError && password.isUsed ? (
            <S.ErrorMessage>
              Введите не менее 4 символов <S.ErrorImg src={error} />
            </S.ErrorMessage>
          ) : password.maxLengthError && password.isUsed ? (
            <S.ErrorMessage>
              Введите не более 12 символов <S.ErrorImg src={error} />
            </S.ErrorMessage>
          ) : (
            <S.InputText>
              Your password is between 4 and 12 characters
            </S.InputText>
          )}
        </S.ErrorBox>
      </S.InputBox>

      <S.InputBox>
        <S.InputText>Input Text Label</S.InputText>
        <UiInput error={false} type="text" placeholder="Text" />
      </S.InputBox>
    </S.InputsWrapper>
  )
}
