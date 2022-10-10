import React, {useEffect} from 'react';
import {Layout, Menu} from 'antd';
import {NavLink, NavLinkProps, useLocation} from "react-router-dom";
import MenuItem from "antd/es/menu/MenuItem";
import {RadiusSettingOutlined, ShoppingOutlined} from "@ant-design/icons";

import "./index.css";

const {Sider} = Layout;

const getitem = (label: NavLinkProps, key: string, icon: React.ReactNode): MenuItem => {
    return {
        label,
        key,
        icon
    };
};

const items = [
    getitem(<NavLink to={"/"}>插件状态</NavLink>, '/', <RadiusSettingOutlined/>),
    getitem(<NavLink to={"/shop"}>插件市场</NavLink>, '/shop', <ShoppingOutlined/>),
];

const SiderM = () => {
    const {
        pathname
    } = useLocation();
    console.log(pathname);
    useEffect(() => {
    }, []);

    return (
        <Sider theme={"light"} className={"sider"}>
            <div className={"logo"}>
                <span>
                    插件管理
                </span>
            </div>
            <div className={"menu"}>
                <Menu items={items} defaultSelectedKeys={["/"]} selectedKeys={[pathname]}/>
            </div>
        </Sider>
    );
};

export default SiderM;