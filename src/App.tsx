import {RouterProvider} from "react-router-dom";
import { UserProvider } from "./components/hooks/UseContext";
import { Routes } from './router/Routes'


function App() {
  return (
    <UserProvider>
      <RouterProvider router={Routes} />
    </UserProvider>
  );
}

export default App