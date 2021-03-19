import Main from './Main';

const routes = [
  {
    path: ['/', '/work', '/contracts', '/finances', '/clients', '/all_documents',
  '/one_click', '/actual', '/speed_copie', '/filter', '/preview', '/link_documents'],
    exact: true,
    component: Main
  }
]

export default routes;
