import React, { useEffect, useState } from 'react'
import './Dashboard.css'
import axios from 'axios';
import {AiOutlineEye,AiOutlineDelete} from 'react-icons/ai'
import {BiEditAlt} from 'react-icons/bi'


const Dashboard = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("/order/all").then((res) => setData(res.data.orders)).catch(e => console.log(e.message))
  })
  console.log(data);

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
          <span className="orderHeading">sn</span><span className="orderHeading">order id</span><span className="orderHeading">status</span><span className="orderHeading">date</span><span className="orderHeading">price</span><span className="orderHeading">action</span>
        </div>
        <div className="DashboardOrdersScroll">
          {data.map((item, i) => (
            <div className="DashboardOrdersTop" key={i}>
              <span className="orderHeading">{i}</span><span className="orderHeading">{item._id}</span><span className="orderHeading">{item.status}</span><span className="orderHeading">{item.createdAt}</span><span className="orderHeading">{item.amount}</span>
              
              <div className='topindxing5'>
                    <span>
                        <AiOutlineEye />
                    </span>
                    <span>
                        <BiEditAlt />
                    </span>
                    <span >
                        <AiOutlineDelete />
                    </span>
                </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Dashboard