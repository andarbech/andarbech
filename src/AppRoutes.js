import Tickets from "./components/pages/Tickets/Tickets";
import Home from "./components/pages/Home/Home";

const AppRoutes = [
  {
    index: true,
        element: <Home />
    },
    {
        path: '/Tickets', // Add a path for the About component
        element: <Tickets />
    },
];

export default AppRoutes;
