import Header from '../../components/header'
import MainMenu from '../../components/mainmenu1'
import BodyText from '../main/main'
import TopBar from '../../components/topbar'

export default function Home() {
  return (
    <div>
      <Header></Header>
      <TopBar></TopBar>
      <MainMenu></MainMenu>
      <BodyText bodyText="This is edmonton page"></BodyText>
    </div>
  )
}
