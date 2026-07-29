import { Outlet } from 'react-router-dom';
import ScreenHeader from './header/ScreenHeader';
import LeftMenu from "./left_menu/LeftMenu";
import MainScreen from "./main_screen/MainScreen";
import { UseAuth } from '../../context/AuthContext';

const Dashboard = () => {
  const { user } = UseAuth();
  const user_email= user?.email ? user.email : '';
console.log('user', user);
  console.log('email', user_email);
  return (
    <section className="body">
      <ScreenHeader user_email={user_email} />
      <div className="inner-wrapper">
        <LeftMenu />
        <MainScreen className={'user-dashboard'}>
          <Outlet />
        </MainScreen>
      </div>
    </section>
  );
}

export default Dashboard;