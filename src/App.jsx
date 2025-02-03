import { lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router';

import { Toaster } from 'react-hot-toast';

import Layout from './components/Layout';

const PageNotFound = lazy(() => import('./pages/PageNotFound'));
const TasksReducer = lazy(() => import('./pages/TasksReducer'));
const Home = lazy(() => import('./pages/Home'));
const Tasks = lazy(() => import('./pages/Tasks'));

function App() {
  return (
    <BrowserRouter>
      <Toaster
        reverseOrder={false}
        position='top-center'
        toastOptions={{
          removeDelay: 1500,
          style: {
            color: 'var(--color-zinc-200)',
            backgroundColor: 'var(--color-zinc-800)',
            fontWeight: 'var(--font-weight-medium)',
          },
          success: {
            iconTheme: {
              primary: 'var(--color-zinc-900)',
              secondary: 'var(--color-green-400)',
            },
          },
        }}
      />

      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='tasks' element={<Tasks />} />
          <Route path='tasks-reducer' element={<TasksReducer />} />

          <Route path='*' element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
