import './App.css'
import Home from './pages/Home'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import SuccessStoriesVideos from './pages/SuccessStoriesVideos';
import Sponsor from './pages/Sponsor';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "success-stories-videos",
    element: <SuccessStoriesVideos/>,
  },
  {
    path: "sponsor",
    element: <Sponsor/>,
  },
]);

export default function App(){
  return <RouterProvider router={router} />
}
