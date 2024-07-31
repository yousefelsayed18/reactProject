import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Layout from './Components/Layout/Layout';
import About from './Components/About/About';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Components/Home/Home';
import NotFound from './Components/NotFound/NotFound';
import Portfolio from './Components/Portfolio/Portfolio';
import Contact from './Components/Contact/Contact';

function App() {
  const [count, setCount] = useState(0);
  
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {index:true , element: <Home/>},

        { path: "portfolio", element: <Portfolio /> },
        { path: "about", element: <About /> },
        { path: "contact", element: <Contact /> },
        { path: "home", element: <Home/> },
        

        
        {path:"*",element:<NotFound/>}
      ]
    }
  ]);

  return (
    <RouterProvider router={routes} />
  );
}

export default App;
