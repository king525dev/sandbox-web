import { 
  Route, 
  createBrowserRouter, 
  createRoutesFromElements, 
  RouterProvider 
} from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import './styles/home.css';
import './styles/project.css';
import './styles/loading.css'
import HomePage from './pages/HomePage';
import ProjectPage from './pages/ProjectPage';
import NotFoundPage from './pages/NotFoundPage';
import DataPage from './pages/DataPage';
import QuickHomePage from './pages/QuickHomePage';
import ErrorPage from './pages/ErrorPage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route index element={<HomePage />} />
      <Route path='/project/:id' element={<ProjectPage />} />
      <Route path='/data' element={<DataPage />} />
      <Route path='/home' element={<QuickHomePage />} />
      <Route path='*' element={<NotFoundPage />} />
    </>
  )
);

function App() {

  return (
    <ErrorBoundary  FallbackComponent={ErrorPage}>
      <RouterProvider router={router}/>
    </ErrorBoundary>
  )
}

export default App
