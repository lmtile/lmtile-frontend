import { RouterProvider } from "react-router-dom";
import "./App.css";
import RoomvoAssistant from "./RoomVo/RoomvoAssistant";
import router from "./Routes/Route/Route";


function App() {
  return (
    <div className="mx-auto">
      <RouterProvider router={router}></RouterProvider>
      <div id="roomvoAssistant"><RoomvoAssistant /></div>
    </div>
  );
}

export default App;
