import Main from './Main';
import Registration from './Registration';

const routes = [
  {
    path: '/',
    exact: true,
    component: Main
  },
  {
    path: '/registration',
    exact: true,
    component: Registration
  }
]

export default routes;
