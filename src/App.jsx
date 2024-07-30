import { createBrowserRouter, RouterProvider } from "react-router-dom"
import RootLayout from "./layouts"
import LandingPage from "./landing page"
import TeacherListing from "./teacherListing"


function App() {
 const router = createBrowserRouter ([
    {
      path: "/",
      element: <RootLayout />,
      Children: [
          {
            index: true,
            element: <LandingPage />,
          },
          {
            path: "explore",
            element: <TeacherListing />
          },
      ]
    }
 ]);

  return <RouterProvider router={router} />

}

export default App