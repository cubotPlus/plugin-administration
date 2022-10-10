import React from 'react';
import {Route, Routes} from "react-router-dom"
import PluginView from "../pages/PluginView/PluginView";
import PluginShop from "../pages/PluginShop/PluginShop";

const MainViewRouter = () => {
    return (
        <Routes>
            <Route path={"/"} element={<PluginView/>}/>
            <Route path={"/shop"} element={<PluginShop/>}/>
        </Routes>
    );
};

export default MainViewRouter;