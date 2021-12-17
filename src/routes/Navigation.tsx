import {
  BrowserRouter,
  Navigate,
  NavLink,
  Route,
  Routes,
} from 'react-router-dom';
import {
  DynamicForm,
  FormikAbstractationPage,
  FormikBasicPage,
  FormikComponentsPage,
  FormikYupPage,
  RegisterFormikPage,
  RegisterPage,
} from '../03-forms/pages';
import logo from '../logo.svg';

export const Navigation = () => {
  return (
    <BrowserRouter>
      <div className="main-layout">
        <nav>
          <img src={logo} alt="ReactLogo" />
          <ul>
            <li>
              <NavLink
                to="/register"
                className={({ isActive }) => (isActive ? 'nav-active' : '')}
              >
                Register
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/register-formik"
                className={({ isActive }) => (isActive ? 'nav-active' : '')}
              >
                Formik Register
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/formik-basic"
                className={({ isActive }) => (isActive ? 'nav-active' : '')}
              >
                Formik Basic
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/formik-yup"
                className={({ isActive }) => (isActive ? 'nav-active' : '')}
              >
                Formik yup
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/formik-components"
                className={({ isActive }) => (isActive ? 'nav-active' : '')}
              >
                Formik components
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/formik-abstractation"
                className={({ isActive }) => (isActive ? 'nav-active' : '')}
              >
                Formik abstractation
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dynamic-form"
                className={({ isActive }) => (isActive ? 'nav-active' : '')}
              >
                Dynamic Form
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/users"
                className={({ isActive }) => (isActive ? 'nav-active' : '')}
              >
                Users
              </NavLink>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/register-formik" element={<RegisterFormikPage />} />
          <Route path="/formik-basic" element={<FormikBasicPage />} />
          <Route path="/formik-components" element={<FormikComponentsPage />} />
          <Route
            path="/formik-abstractation"
            element={<FormikAbstractationPage />}
          />
          <Route path="/dynamic-form" element={<DynamicForm />} />
          <Route path="/formik-yup" element={<FormikYupPage />} />
          <Route path="users" element={<h1>Users Page</h1>} />
          <Route path="/*" element={<Navigate to="/register" replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
