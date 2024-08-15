
import React, { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Button, Layout, Menu, theme, Typography } from 'antd';
import { UseAppDispatch } from '@/redux/store';
import { revertAll } from '@/redux/api/constants';


const { Header, Sider, Content } = Layout;
interface IndexProps {
  children: React.ReactNode;
}

const Index: React.FC<IndexProps> = ({children}) => {

  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();


  const dispatch= UseAppDispatch()
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed} style={{height:'100vh'}}>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              icon: <UserOutlined />,
              label: 'nav 1',
            },
            {
              key: '2',
              icon: <VideoCameraOutlined />,
              label: 'nav 2',
            },
            {
              key: '3',
              icon: <UploadOutlined />,
              label: 'nav 3',
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: '0 20px', background: colorBgContainer, display:'flex', justifyContent:'space-between', alignItems:'center'}}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />

          <button style={{ width: 64, height: 32,}} onClick={()=>dispatch(revertAll())}>Log out</button>
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Typography>
           {children}
          </Typography>
         
        </Content>
      </Layout>
    </Layout>
  );
};

export default Index;