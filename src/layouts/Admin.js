import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// components

import AdminNavbar from "components/Navbars/AdminNavbar.js";
import Sidebar from "components/Sidebar/Sidebar.js";
import HeaderStats from "components/Headers/HeaderStats.js";
import FooterAdmin from "components/Footers/FooterAdmin.js";

// views

import Dashboard from "views/admin/Dashboard.js";
import Maps from "views/admin/Maps.js";
import Settings from "views/admin/Settings.js";
import Tables from "views/admin/Tables.js";
import EgoldUniversal from "views/admin/EgoldUniversal";
import EgoldTrade from "views/admin/EgoldTrade";
import EgoldStaking from "views/admin/EgoldStaking";
import EgoldMining from "views/admin/EgoldMining";
import TagLiquidityPool from "views/admin/TagLiquidityPool.js";

export default function Admin() {
  return (
    <>
      <Sidebar />
      <div className="relative md:ml-64 bg-blueGray-100">
        <AdminNavbar />
        {/* Header */}
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
          <Switch>
            <Route path="/" exact component={Dashboard} />
            <Route path="/admin/dashboard" exact component={Dashboard} />
            <Route path="/admin/maps" exact component={Maps} />
            <Route path="/admin/settings" exact component={Settings} />
            <Route path="/admin/tables" exact component={Tables} />
            <Route path="/admin/egoldmining" exact component={EgoldMining} />
            <Route path="/admin/egolduniversal" exact component={EgoldUniversal} />
            <Route path="/admin/egoldtrade" exact component={EgoldTrade} />
            <Route path="/admin/egoldstaking" exact component={EgoldStaking} />
            <Route path="/admin/TagLiquidityPool" exact component={TagLiquidityPool} />
            <Redirect from="/admin" to="/admin/dashboard" />
          </Switch>
        </div>
      </div>
    </>
  );
}
