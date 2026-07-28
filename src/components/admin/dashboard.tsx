import { Outlet } from 'react-router-dom';
import ScreenHeader from './header/ScreenHeader';
import LeftMenu from "./left_menu/LeftMenu";
import MainScreen from "./main_screen/MainScreen";
import { UseAuth } from '../../context/AuthContext';
import type { User } from '../../types/auth';

const Dashboard = () => {
  const { user } = UseAuth();

  return (
    <section className="body">
      <ScreenHeader user={user} />
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