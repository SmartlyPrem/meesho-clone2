import React from 'react';
import ClientHeader from '../../Components/Client/Header';
import ClientFooter from '../../Components/Client/Footer';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
       <>
        <ClientHeader />
            <Outlet/>
        <ClientFooter />
       </>
    );
}

export default Main;
