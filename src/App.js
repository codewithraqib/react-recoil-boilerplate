import './App.css';
import React from 'react';
import {
  RecoilRoot,
} from 'recoil';
import { HashRouter, Route, Switch } from 'react-router-dom';

// import TodosList from './todos/TodosList';
const Default = React.lazy(() => import('./Shopping/Default.js'));
// const TodosList = React.lazy(() => import('./Shopping/Items.js'));

const loading = (
	<div className="pt-3 text-center">
		<div className="sk-spinner sk-spinner-pulse"></div>
	</div>
);

function App() {
  
  return (
    <RecoilRoot>
      <HashRouter>
				<React.Suspense fallback={loading}>
					<Switch>
						<Route
							exact
							path="/"
							name="Home"
							render={props => <Default {...props} />}
						/>
            {/* <Route
							exact
							path="/todos"
							name="Todos"
							render={props => <TodosList {...props} />}
						/> */}
					</Switch>
				</React.Suspense>
			</HashRouter>
    </RecoilRoot>
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
