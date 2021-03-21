import Header from '../../components/header'
import MainMenu from '../../components/mainmenu1'
import BodyText from '../main/main'

export default function Home() {
  return (
    <div>
      <Header></Header>
      <MainMenu></MainMenu>
      <BodyText bodyText="This is seller page"></BodyText>
    </div>
  )
}
