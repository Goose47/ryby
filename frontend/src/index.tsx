/* eslint-disable import/no-extraneous-dependencies */
import {createRoot} from 'react-dom/client';
import {Link, RouterProvider, createBrowserRouter} from 'react-router-dom';
import {Pedigree} from './pages/Pedigree';

const router = createBrowserRouter([
    {
        path: '/',
        element: (
            <div>
                <h1>Hello World</h1>
                <Link to="about">About Us</Link>
            </div>
        ),
    },
    {
        path: 'about',
        element: <div>About</div>,
    },
    {
        path: 'pedigree',
        element: <Pedigree />,
    },
]);

createRoot(document.getElementById('root') as HTMLElement).render(
    <RouterProvider router={router} />,
);
