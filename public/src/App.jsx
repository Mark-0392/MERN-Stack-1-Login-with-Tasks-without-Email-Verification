import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// importing Pages
import {
  LoginPage,
  RegisterPage,
  ForgotPassword,
  ResetPassword,
  UpdateUser,
  UpdateUserPassword,
  HomeLayout,
  Landing,
  Single_Task,
  EditTasks,
  Error,
  About,
  NewsLetter,
  Credits,
} from './Pages'

// importing components
import { ErrorElement } from './Components'

// importing actions
import { action as registerAction } from './Pages/RegisterPage'
import { action as loginAction } from './Pages/LoginPage'
import { action as forgotPasswordAction } from './Pages/ForgotPassword'
import { action as resetPasswordAction } from './Pages/ResetPassword'
import { action as updateUserAction } from './Pages/UpdateUser'
import { action as updateUserPasswordAction } from './Pages/UpdateUserPassword'
import { action as createTaskAction } from './Pages/Landing'
import { action as editTaskAction } from './Pages/EditTasks'

// importing loaders
import { loader as getUserLoader } from './Pages/HomeLayout'
import { loader as getAllTasksLoader } from './Pages/Landing'
import { loader as getSingleTaskLoader } from './Pages/SingleTask'
import { loader as editTaskLoader } from './Pages/EditTasks'

// import store.js
import { store } from '../store'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RegisterPage />,
    errorElement: <Error />,
    action: registerAction,
  },

  {
    path: '/login',
    element: <LoginPage />,
    errorElement: <Error />,
    action: loginAction(store),
  },
  {
    path: '/forgotPassword',
    element: <ForgotPassword />,
    errorElement: <Error />,
    action: forgotPasswordAction,
  },
  {
    path: '/resetPassword',
    element: <ResetPassword />,
    errorElement: <Error />,
    action: resetPasswordAction,
  },

  {
    path: '/dashboard',
    element: <HomeLayout />,
    errorElement: <Error />,
    loader: getUserLoader,
    children: [
      {
        index: true,
        element: <Landing />,
        errorElement: <ErrorElement />,
        action: createTaskAction,
        loader: getAllTasksLoader,
      },
      {
        path: 'about',
        element: <About />,
        errorElement: <ErrorElement />,
      },
      {
        path: 'newsLetter',
        element: <NewsLetter />,
        errorElement: <ErrorElement />,
      },
      {
        path: 'credits',
        element: <Credits />,
        errorElement: <ErrorElement />,
      },
      {
        path: 'singleTask/:id',
        element: <Single_Task />,
        errorElement: <Error />,
        loader: getSingleTaskLoader,
      },
      {
        path: 'editTasks/:id',
        element: <EditTasks />,
        errorElement: <Error />,
        action: editTaskAction,
        loader: editTaskLoader,
      },
      {
        path: 'user/updateUserDetails',
        element: <UpdateUser />,
        errorElement: <Error />,
        action: updateUserAction,
      },
      {
        path: 'user/updateUserPassword',
        element: <UpdateUserPassword />,
        errorElement: <Error />,
        action: updateUserPasswordAction,
      },
    ],
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App
