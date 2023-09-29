import * as React from 'react'

type Props = {
  isEmpty: boolean
  minLength: number
  maxLength: number
}

export const useValidation = (value: string, validations: Props) => {
  // Под validations подразумевается все то, что указывается в значениях для валидации

  const [minLengthError, setMinLengthError] = React.useState<boolean>(false)
  const [maxLengthError, setMaxLengthError] = React.useState<boolean>(false)
  const [emptyInputError, setEmptyInputError] = React.useState<boolean>(false)

  React.useEffect(() => {
    for (const validation in validations) {
      switch (validation) {
        case 'minLength':
          value.length < validations[validation]
            ? setMinLengthError(true)
            : setMinLengthError(false)
          break

        case 'maxLength':
          value.length > validations[validation]
            ? setMaxLengthError(true)
            : setMaxLengthError(false)
          break

        case 'isEmpty':
          value ? setEmptyInputError(false) : setEmptyInputError(true)
          break

        default:
          break
      }
    }
  }, [validations, value])

  return {
    minLengthError,
    emptyInputError,
    maxLengthError,
  }
}

export const useInput = (currentValue: string, validations: Props) => {
  const [value, setValue] = React.useState(currentValue)
  const [isUsed, setIsUsed] = React.useState<boolean>(false)

  const valid = useValidation(value, validations)

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const onBlur = (_e: React.ChangeEvent<HTMLInputElement>) => {
    setIsUsed(true)
  }

  return {
    value,
    onChange,
    onBlur,
    isUsed,
    ...valid,
  }
}
