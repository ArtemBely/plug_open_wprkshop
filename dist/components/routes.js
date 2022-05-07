import Main from './Main';
//import Ch from './Ch';
import MainBankAccount from './MainBankAccount';
import MainTaxes from './MainTaxes';
import MainAml from './MainAml';
const routes = [
    {
        path: '/',
        exact: true,
        component: Main
    },
    {
        path: '/account_in_sw',
        exact: true,
        component: MainBankAccount
    },
    {
        path: '/taxes',
        exact: true,
        component: MainTaxes
    },
    {
        path: '/aml_control',
        exact: true,
        component: MainAml
    }
    /*  {
        path: '/check',
        exact: true,
        component: Ch
      }*/
];
export default routes;
