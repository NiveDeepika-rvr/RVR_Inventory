import React, { useState } from "react";
import { Layout } from "antd";
import Sidebar from "../Components/Sidebar";
import Navbar from "../Components/Navbar";
import { useLocation, useNavigate, Outlet } from "react-router-dom";

const { Content, Footer } = Layout;

const MainLayout = () => {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <Layout>
            <Sidebar collapsed={collapsed} onCollapse={setCollapsed} />

            <Navbar />


            <Layout>
                <Content className="main-content">

                    <Outlet />
                </Content>

                <Footer className="main-footer">
                    <span className="footer-text">© Developed by RVR PRIVATE LIMITED</span>
                </Footer>
            </Layout>
        </Layout>
    );
};

export default MainLayout;
