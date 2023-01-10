import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Page from './Components/404Page/Page';
import Blog from './Components/Blog/Blog';
import Topics from './Components/Header/Topics/Topics';
import Quizs from './Components/Quizs/Quizs';
import Statistics from './Components/Statistics/Statistics';
import Main from './Outlay/Main';

function App() {
  useEffect(() => {
    AOS.refresh();
  }, [])

  const router = createBrowserRouter([
    {
      path: '/', element: <Main />, children: [
        {
          path: '/topics', element: <Topics />,
          loader: async () => fetch(`https://openapi.programming-hero.com/api/quiz`),

        },
        {
          path: '/', element: <Topics />,
          loader: async () => fetch(`https://openapi.programming-hero.com/api/quiz`),

        }
      ]
    },

    {
      path: '/quiz/:reactId', element:<Quizs/>,
      loader:async({params})=>{
        return fetch(`https://openapi.programming-hero.com/api/quiz/${params.reactId}`)
      }
    },
    {path:'/statistics',element:<Statistics/>,loader:async()=>fetch(`https://openapi.programming-hero.com/api/quiz`)},
    {path:'/blog',element:<Blog/>},
    {path:'*',element:<Page/>}

  ])
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
