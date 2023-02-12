import { Outlet } from "react-router-dom";
import Header from "./components/molecules/Header";

function Root () {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
};

export default Root;