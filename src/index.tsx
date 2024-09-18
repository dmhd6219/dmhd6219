import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import NowPlaying from "./components/other/NowPlaying";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
    },

    {
        path: "/now-playing/redirect",
        element: <NowPlaying/>
    }
]);

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>
);

