import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import routes, {cocktailDBRoutes} from './routes';
import Entry from '../components/Entry';

const AppRouter = () => {
	return (
    <Router>
       <Routes>
          <Route path="/entry" element={<Entry/>} exact={true}/>                
           {
             routes.map( (route) => 
               <Route key={route.path} path={route.path} element={route.element} exact={route.exact}/>
             )
           }         
          {
            cocktailDBRoutes.map((route) =>
              <Route key={route.path} path={route.path} element={route.element} exact={route.exact}/>
            )
          }
          <Route path="/*" element={<Navigate to="/entry"/>} />                
       </Routes> 
    </Router>
	);
}

export default AppRouter;