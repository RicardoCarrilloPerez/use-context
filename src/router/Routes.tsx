import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Header from '../components/common/Header';

import About from '../components/About';
import Login from '../components/Login';

export const Routes = createBrowserRouter([
    {
        path: "/",
        element: <Header/>,
        children: [
            {
                path: 'Login',
                element: <Login/>
            },
            {
                path: 'About',
                element: <About/>
            }
        ]
    },
]);

export default Routes