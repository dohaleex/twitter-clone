import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import * as styled from 'styled-components';
import reset from 'styled-reset';
import { useEffect, useState } from 'react';
import CreateAccount from './routes/create-account';
import Login from './routes/login';
import Profile from './routes/profile';
import Layout from './components/layout';
import Home from './routes/home';
import LoadingScreen from './components/loading-screen';

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

const GlobalStyle = styled.createGlobalStyle`
  ${reset}
  * {
    box-sizing: border-box;
  }
  body {
    background-color: black;
    color: white;
    font-family:
      system-ui,
      -apple-system,
      BlinkMacSystemFont,
      'Segoe UI',
      Roboto,
      Oxygen,
      Ubuntu,
      Cantarell,
      'Open Sans',
      'Helvetica Neue',
      sans-serif;
  }
`;

function App() {
  const [isLoading, setLoading] = useState(true);

  const init = async () => {
    setTimeout(() => setLoading(false), 1000);
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <div>
      <GlobalStyle />
      {isLoading ? <LoadingScreen /> : <RouterProvider router={router} />}
    </div>
  );
}

export default App;
