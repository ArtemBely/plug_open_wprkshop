import Main from './Main';
import Registration from './Registration';
import Code from './Code';
import Congrats from './Congrats';
import Profile from './Profile';
import Enter from './Enter';

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
  },
  {
    path: '/signup_code_form_check',
    exact: true,
    component: Code
  },
  {
    path: '/check_the_code',
    exact: true,
    component: Congrats
  },
  {
    path: '/profile',
    exact: true,
    component: Profile
  },
  {
    path: '/enter',
    exact: true,
    component: Enter
  }
]

export default routes;
