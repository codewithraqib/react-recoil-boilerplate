import "./App.css";
import React from "react";
import { RecoilRoot } from "recoil";
import { HashRouter, Route, Switch } from "react-router-dom";
import Login from "./Home/Login";
import NewUser from "./Home/NewUser";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Gallery from "./Home/Gallery";
import Grievance from "./Home/Grievance";
import Details from "./Home/Details";
import AddGrievance from "./Home/AddGrievance";
import WomenHelp from "./Home/WomenHelp";
import Contacts from "./Home/Contacts";
import ForgotPassword from "./Home/ForgotPassword";
import NewPassword from "./Home/NewPassword";
import Header from "./Home/Header";
import Footer from "./Home/Footer";
import ContactUs from "./Home/ContactUs";
import PrivacyPolicy from "./Home/PrivacyPolicy";
import TermAndCondition from "./Home/TermAndCondition";
import AboutUs from "./Home/AboutUs";
import apiCall from "./axios/apiCall";


// import TodosList from './todos/TodosList';
const Default = React.lazy(() => import("./Home/Default.js"));
// const TodosList = React.lazy(() => import('./Shopping/Items.js'));

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
);

function App() {
  return (
    <div>
     
    <RecoilRoot>
      <HashRouter>
        <React.Suspense fallback={loading}>
        <Header/>
          <Switch>
          
            <Route
              exact
              path="/"
              name="Home"
              render={(props) => <Default {...props} />}
            />
             <Route
              exact
              path="/Header"
              name="header"
              render={(props) => <Header {...props} />}
            />
            <Route
              exact
              path="/Login"
              name="login"
              render={(props) => <Login {...props} />}
            />
            <Route
              exact
              path="/NewUser"
              name="newuser"
              render={(props) => <NewUser {...props} />}
            />
            <Route
              exact
              path="/auth"
              name="auth"
              render={(props) => <Auth {...props} />}
            />
            <Route
              exact
              path="/Gallery"
              name="gallery"
              render={(props) => <Gallery {...props} />}
            />
            <Route
              exact
              path="/Grievance"
              name="grievance"
              render={(props) => <Grievance {...props} />}
            />
            <Route
              exact
              path="/Details"
              name="details"
              render={(props) => <Details {...props} />}
            />
            <Route
              exact
              path="/AddGrievance"
              name="addgrievance"
              render={(props) => <AddGrievance {...props} />}
            />

            <Route
              exact
              path="/WomenHelp"
              name="womenhelp"
              render={(props) => <WomenHelp {...props} />}
            />
			  <Route
              exact
              path="/Contacts"
              name="contacts"
              render={(props) => <Contacts {...props} />}
            />
             <Route
              exact
              path="/ForgotPassword"
              name="forgotpassword"
              render={(props) => <ForgotPassword {...props} />}
            />
               <Route
              exact
              path="/NewPassword"
              name="newpassword"
              render={(props) => <NewPassword {...props} />}
            />
               <Route
              exact
              path="/ContactUs"
              name="contact-us"
              render={(props) => <ContactUs {...props} />}
            />
               <Route
              exact
              path="/PrivacyPolicy"
              name="privacypolicy"
              render={(props) => <PrivacyPolicy {...props} />}
            />
               <Route
              exact
              path="/TermAndCondition"
              name="term-and-condition"
              render={(props) => <TermAndCondition {...props} />}
            />
                <Route
              exact
              path="/AboutUs"
              name="about-us"
              render={(props) => <AboutUs {...props} />}
            />
          </Switch>
          <Footer/>
        </React.Suspense>
       
      </HashRouter>
    </RecoilRoot>
   
    </div>
  

  );
}

export default App;

// import './scss/style.scss';
// import 'react-toastify/dist/ReactToastify.css';

// import { HashRouter, Route, Switch } from 'react-router-dom';

// import AuthRoute from './AuthRoute';
// import React from 'react';
// import { ToastContainer } from 'react-toastify';
// import useRestoreAuthDetails from './components/RestoreAuthDetails';

// const loading = (
// 	<div className="pt-3 text-center">
// 		<div className="sk-spinner sk-spinner-pulse"></div>
// 	</div>
// );

// // Containers
// const TheLayout = React.lazy(() => import('./containers/TheLayout'));

// // Pages
// const Login = React.lazy(() => import('./views/pages/login/Login'));
// const Page404 = React.lazy(() => import('./views/pages/page404/Page404'));
// const Page500 = React.lazy(() => import('./views/pages/page500/Page500'));

// const App = () => {
// 	// Restore Auth Details form Custom Hook
// 	useRestoreAuthDetails();

// 	return (
// 		<div>
// 			<HashRouter>
// 				<React.Suspense fallback={loading}>
// 					<Switch>
// 						<Route
// 							exact
// 							path="/login"
// 							name="Login Page"
// 							render={props => <Login {...props} />}
// 						/>
// 						<AuthRoute
// 							path="/"
// 							name="Home"
// 							render={props => <TheLayout {...props} />}
// 						/>
// 						<Route
// 							exact
// 							path="/404"
// 							name="Page 404"
// 							render={props => <Page404 {...props} />}
// 						/>
// 						<Route
// 							exact
// 							path="/500"
// 							name="Page 500"
// 							render={props => <Page500 {...props} />}
// 						/>
// 					</Switch>
// 				</React.Suspense>

// 				<ToastContainer
// 					position="top-right"
// 					autoClose={3000}
// 					hideProgressBar={false}
// 					newestOnTop={false}
// 					closeOnClick
// 					rtl={false}
// 					pauseOnFocusLoss
// 					pauseOnHover
// 				/>
// 			</HashRouter>
// 		</div>
// 	);
// };

// export default App;
