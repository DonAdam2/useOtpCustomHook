import { NavLink } from 'react-router-dom';
//URLs
import { getHomePageUrl, getModalExamplePageUrl } from '@/ts/routing/routingConstants/AppUrls';

const Header = () => (
  <div className="d-flex">
    <NavLink to={getHomePageUrl()}>Home</NavLink>
    <span style={{ flex: '1' }} />
    <NavLink to={getModalExamplePageUrl()}>Modal example</NavLink>
  </div>
);

export default Header;
