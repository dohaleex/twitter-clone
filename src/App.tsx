import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import CreateAccount from './routes/create-account';
import Login from './routes/login';
import Profile from './routes/profile';
import Layout from './components/layout';
import Home from './routes/home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/profile',
        element: <Profile />,
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/create-account',
    element: <CreateAccount />,
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
