import { Outlet } from 'react-router-dom';
import Navigation from '../NavBar/Navigation';
import './Layout.css'
const Container = () => (
  <div className={"Container"}>
    <Navigation />
    <div className={"main"}>
      <Outlet />
    </div>
  </div>
);

export default Container;
