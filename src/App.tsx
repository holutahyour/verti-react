import {lazy, Suspense} from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import './@verti/styles/Sass/main.css';

function App() {
  const Home = lazy(() => import('./app/pages/Home'))
  const LeftSideBar = lazy(() => import('./app/pages/LeftSideBar'))
  const RightSideBar = lazy(() => import('./app/pages/RightSideBar'))
  const NoSideBar = lazy(() => import('./app/pages/NoSideBar'))
  return (
    <>
      <Router>
        <Routes>
          <Route 
            path='/'
            element={
              <Suspense>
                <Home />
              </Suspense>
            }
          />
          <Route 
            path='/left-sidebar'
            element={
              <Suspense>
                <LeftSideBar />
              </Suspense>
            }
          />
          <Route 
            path='/right-sidebar'
            element={
              <Suspense>
                <RightSideBar />
              </Suspense>
            }
          />
          <Route 
            path='/no-sidebar'
            element={
              <Suspense>
                <NoSideBar />
              </Suspense>
            }
          />
        </Routes>
        
      </Router>

    </>
    
    
  );
}

export default App;
