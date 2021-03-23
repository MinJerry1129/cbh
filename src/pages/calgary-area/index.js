import CalgaryAreaHeader from '../../components/calgary-area-header.js'
import MainMenu from '../../components/mainmenu'
import BodyText from '../all/main/main'
import TopBar from '../../components/topbar'

export default function Home() {
  return (
    <div>
      <CalgaryAreaHeader></CalgaryAreaHeader>
      <TopBar></TopBar>
      <MainMenu></MainMenu>
      <BodyText bodyText="Calgary Area Real estate"></BodyText>
    </div>
  )
}
