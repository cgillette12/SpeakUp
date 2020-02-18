import React from "react";

const Dashboard = React.lazy(() => import (`./views/Dashboard/Dashboard`));
const Clients = React.lazy(() => import (`./views/Clients/Clients`));
const Timelogs = React.lazy(() => import (`./views/Timelogs/Timelogs`));
const Projects = React.lazy(() => import ("./views/Projects/Projects"));
const Expenses = React.lazy(() => import ("./views/Expenses/Expenses"));
const Invoices = React.lazy(() => import ("./views/Invoices/Invoices"));
const Partners = React.lazy(() => import ("./views/Partners/Partners"));

const routes = [
  { path: `/admin/dashboard`, name: `Dashboard`, component: Dashboard },
  { path: `/admin/clients`, name: `Clients`, component: Clients },
  { path: `/admin/expenses/:id`, name: `expenses`, component: Expenses },
  { path: `/admin/invoices/:id`, name: `Invoices`, component: Invoices },
  { path: `/admin/partners`, name: `Clients`, component: Partners },
  { path: `/admin/project/:id`, name: `Projects`, component: Projects},
  { path: `/admin/timelogs/:id`, name: `Timelogs`, component: Timelogs },
  { path: `/client/projects`, name: `Projects`, component: Projects },
  { path: `/client/invoices`, name: `Invoices`, component: Invoices },
  { path: `/client/timelogs`, name: `Timelogs`, component: Timelogs },
  { path: `/partner/expenses`, name: `expenses`, component: Expenses },
  { path: `/partner/invoices`, name: `invoices`, component: Invoices },
];

export default routes;
