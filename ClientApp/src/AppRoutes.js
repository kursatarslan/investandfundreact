import { Counter } from "./components/Counter";
import { FetchData } from "./components/FetchData";
import { FetchStudioData } from "./components/FetchStudioData";
import { Home } from "./components/Home";
import { Login } from "./components/Login";
import StudioItemDetail from "./components/StudioItemDetail";

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    index: true,
    element: <Login />
  },
  {
    path: '/counter',
    element: <Counter />
  },
  {
    path: '/fetch-data',
    element: <FetchData />
  },
  {
    path: '/fetch-studio-data',
    element: <FetchStudioData />
  },
  {
    path: '/studio-item-detail/:id',
    element: <StudioItemDetail />
  }
];

export default AppRoutes;
