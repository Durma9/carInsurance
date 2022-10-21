import React, {Component} from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HeaderComponent from './HeaderComponent';
import LoginComponent from './LoginComponent';
import ErrorComponent from './ErrorComponent';
import FooterComponent from './FooterComponent';
import LogoutComponent from './LogoutComponent';
import WelcomeAgentComponent from './WelcomeAgentComponent';
import WelcomeAdminComponent from './WelcomeAdminComponent';
import withNavigation from './WithNavigation'

class CarInsurance extends Component {
    render() {
    const LoginComponentWithNavigation = withNavigation(LoginComponent);
    const WelcomeAdminComponentWithNavigation = withNavigation(WelcomeAdminComponent);
    // const WelcomeComponentWithNavigation = withNavigation(WelcomeComponent);
    const WelcomeAgentComponentWithNavigation = withNavigation(WelcomeAgentComponent);
    const LogoutComponentWithNavigation = withNavigation(LogoutComponent);
    const HeaderComponentWithNavigation = withNavigation(HeaderComponent);
//  const WelcomeComponentWithParams = withParams(WelcomeComponent);  WELCOME SA PARAMETRIMA
        return (
            <div className="TodoApp">
        <Router>
          <HeaderComponentWithNavigation />
          <Routes>
            <Route path="/" element={<LoginComponentWithNavigation />} />
            <Route path="/login" element={<LoginComponentWithNavigation />} />
            {/* <Route path="/welcome/admin" element={<AuthenticatedRoute> <WelcomeAdminComponentWithNavigation /> </AuthenticatedRoute>} /> */}
            <Route path="/welcome/admin" element={<WelcomeAdminComponentWithNavigation />} />
            <Route path="/welcome/agent" element={<WelcomeAgentComponentWithNavigation />} />
            {/* <Route path="/welcome" element={<WelcomeComponentWithNavigation />} /> */}
            <Route path="/logout" element={<LogoutComponentWithNavigation />} />
            {/* <Route path="/welcome/:name" element={<WelcomeComponentWithParams />} />   WELCOME SA PARAMETRIMA */}
            <Route path="*" element={<ErrorComponent />} />
          </Routes>
          <FooterComponent />
        </Router>
      </div>
        )
    }
}

export default CarInsurance