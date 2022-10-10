import React from 'react';
import { Layout } from 'antd';
import SiderM from '../pages/Sider/Sider';
import HeadRouter from '../router/HeadRouter';
import MainViewRouter from '../router/MainViewRouter';
import './index.css';

const { Header, Content, Footer, Sider } = Layout;

const LayoutM: React.FC = () => (
  <Layout>
    <SiderM />
    <Layout>
      <Header className="site-layout-sub-header-background">
        <HeadRouter />
      </Header>
      <Content style={{ margin: '24px 16px 0' }}>
        <MainViewRouter />
      </Content>
      <Footer style={{ textAlign: 'center' }}>77</Footer>
    </Layout>
  </Layout>
);

export default LayoutM;
