import { useContext } from "react";
import context from "./AuthContext";
export default function Home() {
  const data = useContext(context);
  return (
    <div>
      <h1>Login to access Profile and dashboard</h1>
      <button
        onClick={
            (e)=>{ e.target.innerText='Loading...';setTimeout( ()=>{data.toggleLogin(!data.loginStatus)} ,1000 )
            }
        }
          
      >
        {data.loginStatus == true ? "Logout" : "Login"}
      </button>
    </div>
  );
}
