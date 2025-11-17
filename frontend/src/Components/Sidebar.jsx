import React from "react";
import { Layout, Menu } from "antd";
import {
    DashboardOutlined,
    ShoppingCartOutlined,
    BarChartOutlined,
    AppstoreOutlined,
    DatabaseOutlined,
    GiftOutlined,
} from "@ant-design/icons";

const { Sider } = Layout;

const Sidebar = ({ collapsed, onCollapse }) => {
    return (
        <Sider
            collapsible
            collapsed={collapsed}
            onCollapse={onCollapse}
            width={240}
            style={{
                background: "#0051ff",
                color: "#fff",
                height: "100vh",
                position: "fixed",
                left: 0,
                top: 0,
            }}
        >
            <div
                style={{
                    height: 100,
                    margin: 16,
                    color: "#fff",
                    fontSize: 22,
                    fontWeight: "bold",
                    textAlign: collapsed ? "center" : "left",
                }}
            >
                {collapsed ? "eP" : "eProduct"}
            </div>

            <Menu
                theme="dark"
                mode="inline"
                style={{ background: "#0051ff" }}
                defaultSelectedKeys={["1"]}
                items={[
                    { key: "1", icon: <DashboardOutlined />, label: "Dashboard" },
                    { key: "2", icon: <ShoppingCartOutlined />, label: "Order" },
                    { key: "3", icon: <BarChartOutlined />, label: "Statistic" },
                    { key: "4", icon: <AppstoreOutlined />, label: "Product" },
                    { key: "5", icon: <DatabaseOutlined />, label: "Stock" },
                    { key: "6", icon: <GiftOutlined />, label: "Offer" },
                ]}
            />
        </Sider>
    );
};

export default Sidebar;
