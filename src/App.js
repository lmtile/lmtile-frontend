import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./Routes/Route/Route";
import WhatsApp from "./WhatsApp/WhatsApp";

function App() {
  return (
    <div className="mx-auto">
      <RouterProvider router={router}></RouterProvider>
      <WhatsApp></WhatsApp>
    </div>
  );
}

export default App;
