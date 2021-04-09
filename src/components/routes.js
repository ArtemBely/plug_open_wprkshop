import Main from './Main';
import Registration from './Registration';

const routes = [
  {
    path: ['/', '/work', '/contracts', '/finances', '/clients', '/all_documents',
  '/one_click', '/actual', '/speed_copie', '/filter', '/preview', '/link_documents'],
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
