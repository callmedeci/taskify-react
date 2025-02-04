import { lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router';

import { Toaster } from 'react-hot-toast';

import Layout from './components/Layout';
import TasksProvider from './features/tasksContext/TasksContext';

const PageNotFound = lazy(() => import('./pages/PageNotFound'));
const Home = lazy(() => import('./pages/Home'));
const Tasks = lazy(() => import('./pages/Tasks'));
const TasksReducerPage = lazy(() => import('./pages/TasksReducerPage'));
const TasksContextPage = lazy(() => import('./pages/TasksContextPage'));

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
          <Route path='tasks-reducer' element={<TasksReducerPage />} />

          <Route
            path='tasks-context'
            element={
              <TasksProvider>
                <TasksContextPage />
              </TasksProvider>
            }
          />

          <Route path='*' element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
