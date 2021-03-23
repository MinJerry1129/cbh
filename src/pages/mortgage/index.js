import MortgageHeader from '../../components/mortgage-header'
import MainMenu from '../../components/mainmenu'
import BodyText from '../all/main/main'
import TopBar from '../../components/topbar'

export default function Home() {
  return (
    <div>
      <MortgageHeader></MortgageHeader>
      <TopBar></TopBar>
      <MainMenu></MainMenu>
      <BodyText bodyText="This is mortgage page"></BodyText>
    </div>
  )
}
