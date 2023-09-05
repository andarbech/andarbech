import Tickets from "./components/pages/Tickets/Tickets";
import Home from "./components/pages/Home/Home";
import NotFound from "./components/pages/NotFound/NotFound";

const AppRoutes = [
  {
    path: '/andarbech',
        element: <Home />
    },
    {
        path: '/Tickets', // Add a path for the About component
        element: <Tickets />
    },
    {
        path:'*',
        element:<NotFound/>
    }
];

export default AppRoutes;
