import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import filmsLoader from './utils/filmsLoader';
import filmLoader from './utils/filmLoader';
import ErrorPage from './error-page';
import Root from './routes/root';
import Home from './routes/Home';
import Shop from './routes/shop/Shop';
import Films from './routes/Films';
import Cart from './routes/shop/Cart';
import CheckOut from './routes/shop/CheckOut';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/shop',
        element: <Shop />,
        loader: filmsLoader,
      },
      {
        path: '/shop/cart',
        element: <Cart />,
      },
      {
        path: '/shop/checkout',
        element: <CheckOut />,
      },
      {
        path: 'films/:filmId',
        element: <Films />,
        loader: filmLoader,
      },
    ],
  },
]);

export default router;
