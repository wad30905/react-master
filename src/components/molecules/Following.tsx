import { useOutletContext } from "react-router-dom";

interface fuckersProps {
  fuckers: string;
}

function Following() {

  const {fuckers}:fuckersProps = useOutletContext();
  return (
    <>
      {fuckers}
    </>
  );
}

export default Following;