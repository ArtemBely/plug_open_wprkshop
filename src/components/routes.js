import Main from './Main';
import Registration from './Registration';
import Code from './Code';

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
  }
]

export default routes;
