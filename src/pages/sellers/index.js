import Header from '../../components/header'
import MainMenu from '../../components/mainmenu'
import BodyText from '../all/main/main'
import TopBar from '../../components/topbar'

export default function Home() {
  return (
    <div>
      <Header></Header>
      <TopBar></TopBar>
      <MainMenu></MainMenu>
      <BodyText bodyText="This is seller page"></BodyText>
    </div>
  )
}
