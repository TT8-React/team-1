import React, { Suspense } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom"; import ErrorBoundary from './Components/ErrorBoundary/ErrorBoundary'
import Spinner from './Components/Spinners/Spinner'
import { BaseLayout } from './Layout/BaseLayout'
import ForgetPassword from './Pages/Auth/ForgetPassword';
import Login from './Pages/Auth/Login'
import Register from './Pages/Auth/Register';
import Verification from './Pages/Auth/Verification';
import CompanyDetails from './Pages/Home/CompanyDetails';
import Dashboard from './Pages/Home/Dashboard';
import Report from './Pages/Home/Reports';
import { RouteWrapper } from './routes/RouteWrapper'
import './App.css'
function App() {
  return (
    <>
      <Suspense fallback={<Spinner />}>
        <ErrorBoundary>
          <Router>
            <Switch>
              <Route path={"/login"} component={Login} />
              <Route path={"/register"} component={Register} />
              <Route path={"/forgetPassword"} component={ForgetPassword} />
              <Route path={"/verification"} component={Verification} />
              <RouteWrapper path="/profile-details" exact component={Dashboard} layout={BaseLayout} />
              <RouteWrapper path="/company-details" exact component={CompanyDetails} layout={BaseLayout} />
              <RouteWrapper path="/report" exact component={Report} layout={BaseLayout} />
              <RouteWrapper path="/" exact component={Dashboard} layout={BaseLayout} />
            </Switch>
          </Router>
        </ErrorBoundary>
      </Suspense>

    </>
  )
}

export default App
