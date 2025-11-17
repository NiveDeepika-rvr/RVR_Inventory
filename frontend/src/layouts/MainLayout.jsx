import React, { useState } from "react";
import { Layout } from "antd";
import Sidebar from "../Components/Sidebar";
import Navbar from "../Components/Navbar";

const { Content } = Layout;

const MainLayout = ({ children }) => {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <Layout>
            <Sidebar collapsed={collapsed} onCollapse={setCollapsed} />

            <Navbar />

            <Content
                style={{
                    marginLeft: collapsed ? 80 : 240,
                    marginTop: 80,
                    padding: 20,
                }}
            >
                {children}
            </Content>
        </Layout>
    );
};

export default MainLayout;
