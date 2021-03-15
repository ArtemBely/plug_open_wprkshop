import Main from './Main';

const routes = [
  {
    path: ['/', '/work', '/contracts', '/finances', '/clients'],
    exact: true,
    component: Main
  }
]

export default routes;
