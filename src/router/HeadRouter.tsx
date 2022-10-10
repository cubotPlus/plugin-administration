import React from 'react';
import {Route, Routes} from "react-router-dom"
import PluginView from "../pages/Header/PluginView";
import PluginShop from "../pages/Header/PluginShop";

const HeadRouter = () => {
    return (
        <Routes>
            <Route path={"/"} element={<PluginView/>}/>
            <Route path={"/shop"} element={<PluginShop/>}/>
        </Routes>
    );
};

export default HeadRouter;