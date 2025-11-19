// Navbar.jsx
import React from "react";
import { Layout, Space, Avatar, Dropdown, Menu } from "antd";
import { UserOutlined } from "@ant-design/icons";
import "../App.css";
const { Header } = Layout;

const Navbar = () => {
    const userMenu = (
        <Menu
            items={[

                { key: "2", label: "Logout" },
            ]}
        />
    );

    return (
        <Header className="app-header">
            {/* Push everything else to the right */}
            <div className="app-header-spacer">Inventory</div>

            <Dropdown overlay={userMenu} placement="bottomRight">
                <Space className="app-header-user">
                    <Avatar icon={<UserOutlined />} />
                    <span className="app-header-username">Admin</span>
                </Space>
            </Dropdown>
        </Header>
    );
};

export default Navbar;
