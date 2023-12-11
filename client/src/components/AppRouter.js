import React, {useContext} from 'react';
import {Route, Routes} from "react-router-dom";
import {ADMIN_ROUTE, BASKET_ROUTE, DEVICE_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE} from "../utils/consts";
import Admin from "../pages/Admin";
import Basket from "../pages/Basket";
import Shop from "../pages/Shop";
import Auth from "../pages/Auth";
import DevicePage from "../pages/DevicePage";
import {Context} from "../index";


const AppRouter = () => {
    const {user} = useContext(Context);

    return (
        <Routes>
           <Route path={BASKET_ROUTE} element={<Basket/>}/>
           <Route path={ADMIN_ROUTE} element={<Admin/>}/>

           <Route path={SHOP_ROUTE} element={<Shop/>}/>
           <Route path={LOGIN_ROUTE} element={<Auth/>}/>
           <Route path={REGISTRATION_ROUTE} element={<Auth/>}/>
           <Route path={DEVICE_ROUTE + '/:id'} element={<DevicePage/>}/>
           {/*<Route path="*" element={<Navigate to={'/shop'} replace />}/>*/}
        </Routes>
    );
};

export default AppRouter;