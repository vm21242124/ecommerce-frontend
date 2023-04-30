import React, { } from 'react'
import './Dashboard.css'
const Dashboard = () => {
  // const [data,setData]=useState([]);

  return (
    <div className="dashboard">
      <div className="dashboardtop">
        <div className="dashboardtoporderstats" style={{ "backgroundColor": "rgb(151, 141, 246)" }}>ordered</div>
        <div style={{ "backgroundColor": "rgb(219, 255, 187)" }} className="dashboardtoporderstats">shipped</div>

        <div style={{ "backgroundColor": "rgb(250, 142, 247)" }} className="dashboardtoporderstats">Delivered</div>
        <div style={{ "backgroundColor": "rgb(255, 128, 128)" }} className="dashboardtoporderstats">Cancelled</div>
      </div>
      <div className="DashboardOrders">
        <div className="DashboardOrdersTop">
          <span className="orderHeading">sn</span><span className="orderHeading">order id</span><span className="orderHeading">custumer name</span><span className="orderHeading">status</span><span className="orderHeading">date</span><span className="orderHeading">price</span>action<span className="orderHeading"></span>
        </div>
        <div className="DashboardOrdersScroll">
          <p>there are no orders yet</p>
        </div>
      </div>
    </div>
  )
}

export default Dashboard