import { useLocation, useOutletContext } from "react-router-dom";

interface followersProps {
  state: string[]
}

interface fuckersProps {
  fuckers: string;
}

function Followers() {
  const {state} : followersProps = useLocation();
  const {fuckers}: fuckersProps = useOutletContext();
  console.log(fuckers);
  console.log(state);
  return (
    <>
      {state.map((item, key) => {
        return <li key={key}>{item}</li>
      })}
    </>
  )
};

export default Followers;