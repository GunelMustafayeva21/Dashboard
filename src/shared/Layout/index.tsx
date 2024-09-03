
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Urls } from "@/shared/constants/Urls"
import { Link } from "react-router-dom"

import {
  MenuFoldOutlined,
  MenuUnfoldOutlined
} from '@ant-design/icons';

import { Button, Layout, theme, Typography } from 'antd';
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
    <Layout >
      <Sider trigger={null} collapsible collapsed={collapsed} style={{height:'100vh', marginLeft:'-20px', paddingRight:'10px'}} >
       
       
        <ul style={{listStyleType:'none'}} className=' d-flex pt-4 flex-column gap-3'>
        
        <Link to={Urls.HOME} className='text-decoration-none btn btn-light'><li >    Home    </li></Link>
        <Link to={Urls.ABOUT} className='text-decoration-none btn btn-light'><li>    About  </li></Link> 
        <Link to={Urls.SERVICES} className='text-decoration-none btn btn-light'><li> Services </li></Link>
        <Link to={Urls.PRODUCTS} className='text-decoration-none btn btn-light'><li> Products </li></Link>
        
        

    </ul>
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

          <button className='btn btn-dark' onClick={()=>dispatch(revertAll())}>Log out</button>
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