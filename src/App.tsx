import {createBrowserRouter, RouterProvider} from "react-router";
import Root from "./components/Root";

const router = createBrowserRouter(
    [
        {path:"*", Component:Root}  // All paths (*) must be handled by <Root> component's routing schema
    ]
    // Could also use an array of many routing schemas
)

function App() {

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
