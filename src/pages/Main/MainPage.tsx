import * as S from './MainPage.style'
import * as React from 'react'
import Buttons from './components/Buttons/Buttons'
import DropDown from './components/DropdownMenu/DropDown'
import RadioBox from './components/RadioSelection/RadioBox'
import TextInputs from './components/TextInputs/TextInputs'
import Toggle from './components/Toggle/Toggle'

export default function MainPage() {
  const [buttonDisable, setButtonDisable] = React.useState<boolean>(false)
  const [data, setData] = React.useState(Array(0))
  return (
    <S.MainWrapper>
      <S.FormWrapper>
        <TextInputs data={setData} disable={setButtonDisable} />
        <Toggle />
        <RadioBox />
        <DropDown />
        <Buttons result={data} disabled={buttonDisable} />
      </S.FormWrapper>
    </S.MainWrapper>
  )
}
