import React ,{createContext, useReducer}from 'react'
import {Route,Switch} from 'react-router-dom'
import './App.css'
import 'bootstrap/dist/css/bootstrap.css'
import About from './components/About'
import Contact from './components/Contact'
import Home from './components/Home'
import Login from './components/Login'
import Navbar from './components/Navbar'
import Signup from './components/Signup'
import Employee from './components/Employee'
import ErrorPage from './components/ErrorPage'
import Logout from './components/Logout'
import { initialState, reducer} from '../src/reducer/UseReducer'


export const UserContext = createContext(); 
function App() {
 
  //1. context api
   
  const [state, dispatch] = useReducer(reducer, initialState)


  return (
   <>
   <UserContext.Provider value ={{state, dispatch}}>
   <Navbar/>
   <Switch>
   <Route exact path="/" >
   <Home/>
   </Route>

   <Route path="/about">
   <About/>
   </Route>

   <Route path="/contact">
   <Contact/>
   </Route>

   <Route path="/login">
   <Login/>
   </Route>

   <Route path="/signup">
   <Signup/>
   </Route>

   <Route path="/employee">
   <Employee/>
   </Route>
   
   <Route path="/logout">
   <Logout/>
   </Route>

   <Route>
   <ErrorPage/>
   </Route>
   </Switch>
   </UserContext.Provider>
   </>
  )
}

export default App
