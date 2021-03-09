import React from "react";
import { Layout, Menu } from "antd";
import "antd/dist/antd.css";
import styled from "styled-components";
import { UserOutlined } from "@ant-design/icons";
const { Header } = Layout;
const StyledWrapper = styled.div`
  .ant-layout-header {
    padding: 0px 10px !important;
  }
`;
const Topbar = () => {
  return (
    <StyledWrapper>
      <Layout className="layout">
        <Header>
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
            <Menu.Item key="1" icon={<UserOutlined />}>
              LOGIN
            </Menu.Item>
          </Menu>
        </Header>
      </Layout>
    </StyledWrapper>
  );
};

export default Topbar;
