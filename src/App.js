import React, { useState,useEffect } from "react"
import facade from "./apiFacade"
import LogIn from "./components/LoginForm";
import LoggedIn from "./components/LoggedIn";

function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [user, setUser] = useState({ name: "", roles: "" })


  const logout = () => {  
    facade.logout()
    setLoggedIn(false)
    setUser({ name: "", roles: "" })
  } 

  const login = (user, pass) => { 
    facade.login(user,pass).then(() => {
      const token = facade.readJWTTokken(facade.getToken());
      setUser({ name: token.username, roles: token.roles })
      setLoggedIn(true);
    })
   } 

  return (
    <div>
      {!loggedIn ? (<LogIn login={login} />) :
        (<div>
          <LoggedIn user={user}/>
          <button onClick={logout}>Logout</button>
        </div>)}
    </div>
  )
}









export default App;
