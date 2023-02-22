import Login from "../components/Login";
import MainPage from "../pages/MainPage";
export const routes =  [
    {path:'/',element:<MainPage/>},
    { path: "/login", element: <Login/> },
    
    
  ];
   
  export default routes;