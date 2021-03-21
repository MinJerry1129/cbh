import Header from './components/header'
import MainMenu from './components/mainmenu1'
import BodyText from './all/main/main'

export default function Home() {
  return (
    <div>
      <Header></Header>
      <MainMenu></MainMenu>
      <BodyText bodyText="Calgary Area Real estate"></BodyText>
    </div>
  )
}
