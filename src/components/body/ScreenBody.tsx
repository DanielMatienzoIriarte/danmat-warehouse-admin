import LeftMenu from "../left_menu/LeftMenu";
import MainScreen from "../main_screen/MainScreen";

const ScreenBody = () => {
  return (
    <div className="inner-wrapper">
      <LeftMenu />
      <MainScreen />
    </div>
  )
}

export default ScreenBody;