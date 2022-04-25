import Main from './Main';
import Ch from './Ch';
const routes = [
    {
        path: '/',
        exact: true,
        component: Main
    },
    {
        path: '/check',
        exact: true,
        component: Ch
    }
];
export default routes;
