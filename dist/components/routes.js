import Main from './Main';
//import Ch from './Ch';
import MainBankAccount from './MainBankAccount';
import MainTaxes from './MainTaxes';
import MainAml from './MainAml';
import MainAbout from './MainAbout';
import MainBlog from './MainBlog';
import MainBusinessSw from './MainBusinessSw';
import MainDevelopment from './MainDevelopment';
import MainEmTech from './MainEmTech';
import MainError from './MainError';
import MainInvestment from './MainInvestment';
import MainSwCompanies from './MainSwCompanies';
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
    },
    {
        path: '/about',
        exact: true,
        component: MainAbout
    },
    {
        path: '/blog',
        exact: true,
        component: MainBlog
    },
    {
        path: '/business_in_switzerland',
        exact: true,
        component: MainBusinessSw
    },
    {
        path: '/business_development',
        exact: true,
        component: MainDevelopment
    },
    {
        path: '/emtech_in_davos',
        exact: true,
        component: MainEmTech
    },
    {
        path: '/error',
        exact: true,
        component: MainError
    },
    {
        path: '/investment_club_start',
        exact: true,
        component: MainInvestment
    },
    {
        path: '/swiss_companies_setup',
        exact: true,
        component: MainSwCompanies
    }
    /*  {
        path: '/check',
        exact: true,
        component: Ch
      }*/
];
export default routes;
