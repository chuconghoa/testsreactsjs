import {BrowserRouter ,createBrowserRouter , Navigate, Outlet} from 'react-router-dom'
export const router = createBrowserRouter ([
      {
            path : "/",
            element : (
                  <div>
                        Layout Website  <Outlet/>
                  </div>
            ),
            children :[
                  {index : true , element : <div> Home page </div>},
                  {path : "about", element : <div> About</div>}
            ]
      },
      // dinh nghia cho route admin
      {
            path : "/admin",
            element : (
                  <div>
                        Sidebar admin <Outlet/>
                  </div>
            ),
            children : [
                  { index : true , element: <Navigate to="dashboard" />},
                  { path : "dashboard", element : <div>Dashboard</div>},
                  { path: "product", element: <div>Product Management</div> },
            ]
      },
      {
            path : "**" , element : "Not Found Page"
      }
]);
