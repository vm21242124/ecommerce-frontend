import React, { useState } from "react";
import "./AdminDashboard.css";
import Dashboard from "./Admincomponents/Dashboard/Dashboard";
import Products from "./Admincomponents/products/Products";
import Order from './Admincomponents/order/Order'
import Coupons from './Admincomponents/coupons/Coupons'
import Users from './Admincomponents/users/User'
import Categories from './Admincomponents/categories/Categories'

const AdminDashboard = () => {
    const [active, setActive] = useState("dashboard");
    let display;
    switch (active) {
        case "dashboard":
            display = <Dashboard />
            break

        case "products":
            display = <Products />
            break;
        case "order":
            display = <Order/>
            break;
        case "coupons":
            display = <Coupons/>
            break;
        case "users":
            display = <Users/>
            break;
        case "categories":
            display = <Categories/>
            break;
        default:
            display = <Dashboard />
    }
    return (
        <div className="admindashboard">
            <div className="admindashboardleftmenu">
                <span onClick={() => setActive("dashboard")} className="dashboarditem">Dashboard</span>
                <span onClick={() => setActive("products")} className="dashboarditem">Products</span>
                <span onClick={() => setActive("coupons")} className="dashboarditem">Coupons</span>
                <span onClick={() => setActive("categories")} className="dashboarditem">Categories</span>
                <span onClick={() => setActive("users")} className="dashboarditem">Users</span>
                <span onClick={() => setActive("order")} className="dashboarditem">Order</span>
            </div>
            <div className="admindashboardRightCard">
                {display}
            </div>
        </div>
    );
};

export default AdminDashboard;
