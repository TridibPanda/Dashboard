/*!

=========================================================
* Material Dashboard React - v1.8.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import ListAltIcon from '@material-ui/icons/ListAlt';
import EmailIcon from '@material-ui/icons/Email';
// core components/views for Admin layout
import DashboardPage from "views/Dashboard/Dashboard.js";
import Users from "views/Users/Users";
import AddList from "views/AddList/AddList";
import EmailTemplate from "views/EmailTemplate/EmailTemplate";
import UserProfile from "views/UserProfile/UserProfile.js";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: Dashboard,
    component: DashboardPage,
    layout: "/admin",
  },
  {
    path: "/users",
    name: "Users",
    icon: Person,
    component: Users,
    layout: "/admin",
  },
  {
    path: "/addList",
    name: "Add List",
    icon: ListAltIcon,
    component: AddList,
    layout: "/admin",
  },
  {
    path: "/EmailTemplate",
    name: "Email Template",
    icon: EmailIcon,
    component: EmailTemplate,
    layout: "/admin",
  },
  // {
  //   path: "/userprofile",
  //   name: "User Profile",
  //   icon: Person,
  //   component: UserProfile,
  //   layout: "/admin"
  // }
];

export default dashboardRoutes;
