import React, { useState } from "react";
import { Layout } from "antd";
import {
    LoginOutlined,
    DatabaseOutlined,
    BarChartOutlined,
    LogoutOutlined,
} from "@ant-design/icons";
import { Link, useLocation } from "react-router-dom";
import "../App.css";
const { Sider } = Layout;

const Sidebar = () => {
    const [selected, setSelected] = useState("home");

    const menu = [
        { key: "inward", label: "Inward", icon: <LoginOutlined />, path: "/inward" },

    ];

    return (
        <Sider width={220} className="custom-sider">


            <div className="menu-list">
                {menu.map((item) => (
                    <Link to={item.path} key={item.key} className="menu-link">
                        <div
                            key={item.key}
                            className={`menu-item ${selected === item.key ? "active" : ""
                                }`}
                            onClick={() => setSelected(item.key)}
                        >
                            <div className="menu-icon">{item.icon}</div>
                            <span className="menu-label">{item.label}</span>
                        </div>
                    </Link>
                ))}
            </div>


        </Sider>
    );
};

export default Sidebar;
