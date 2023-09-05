import Tickets from "./components/pages/Tickets/Tickets";
import Home from "./components/pages/Home/Home";

const AppRoutes = [
  {
    path: '/andarbech',
        element: <Home />
    },
    {
        path: '/Tickets', // Add a path for the About component
        element: <Tickets />
    },
];

export default AppRoutes;
