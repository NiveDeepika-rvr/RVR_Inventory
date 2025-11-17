import React from "react";
import { Layout, Input, Space, Avatar, Badge, Dropdown, Menu } from "antd";
import { BellOutlined, UserOutlined } from "@ant-design/icons";

const { Header } = Layout;

const Navbar = () => {
    const userMenu = (
        <Menu
            items={[
                { key: "1", label: "Profile" },
                { key: "2", label: "Logout" },
            ]}
        />
    );

    return (
        <Header
            style={{
                background: "#fff",
                padding: "0 20px",
                marginLeft: 240,  // space for sidebar
                height: 64,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                position: "fixed",
                top: 0,
                width: "calc(100% - 240px)",
                boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
                zIndex: 10,
            }}
        >
            <Input.Search placeholder="Search" style={{ maxWidth: 300 }} />

            <Space size="large">
                <Badge dot>
                    <BellOutlined style={{ fontSize: 22 }} />
                </Badge>

                <Dropdown overlay={userMenu} placement="bottomRight">
                    <Space>
                        <Avatar icon={<UserOutlined />} />
                        <span style={{ fontWeight: 500 }}>Admin</span>
                    </Space>
                </Dropdown>
            </Space>
        </Header>
    );
};

export default Navbar;
