import './App.css';
import LandingComponent from './Components/LandingComponent';
import FeedComponent from './Components/FeedComponent';
import HomeComponent from './Components/HomeComponent';
import NavbarComponent from './Components/NavbarComponent';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { token, login } from './store/actions/index';
import { useEffect } from 'react';
import ProtectedRoute from './Components/ProtectedRoute';
import AddPostComponent from './Components/AddPostComponent';
import MyProfileComponent from './Components/MyProfileComponent';
import SearchComponent from './Components/SearchComponent';
import UserProfileComponent from './Components/UserProfileComponent';
import RegisterComponent from './Components/RegisterComponent';
function App() {
  var dispatch = useDispatch();
  var logins = useSelector(state => state.islogged);
  useEffect(() => {
    if(!logins){
      const loginsession = sessionStorage.getItem('login');
  var rem = localStorage.getItem('token');
  if(rem !== 'null'){
    dispatch(token(rem));
    dispatch(login());
  }
  else if(loginsession === 'true'){
    dispatch(token(sessionStorage.getItem('token')));
    dispatch(login());
  }
    }
  },[]); 
    return(
      <div className="App">
      <Router>
        <NavbarComponent />
      <Switch>
      <Route path='/' exact component={LandingComponent} />    
      <Route path='/register' component={RegisterComponent} />
      <ProtectedRoute path='/feed' component={FeedComponent} myfeed={"false"} userid={false} user={"false"} />  
      <ProtectedRoute path='/home' component={HomeComponent}/>
      <ProtectedRoute path='/addpost' component={AddPostComponent} />
      <ProtectedRoute path='/search:query' component={SearchComponent}/>
      <ProtectedRoute path='/myprofile' component={MyProfileComponent} />
      <ProtectedRoute path='/user' component={UserProfileComponent} />
      </Switch>
      </Router>
      </div>
    );
  
}

export default App;
