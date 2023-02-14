import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { fetchPerson } from "../api";

function User() {
  const [followers, setFollowers] = useState<any>();
  const nFollowers = Math.round(Math.random() * 10);
  return (
    <>
      <div>
        <h1>Hongjin</h1>
        <Link to={"followers"} state={["a"]}>followers</Link>
        <Link to={"following"} >following</Link>
      </div>
      <hr></hr>
      <div>
        <Outlet 
        context={{fuckers: 'hongjin'}}
        />
      </div>
    </>
  )
}

export default User;