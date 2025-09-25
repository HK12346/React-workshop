import { useParams } from "react-router-dom";

function Profile(){
const {userid} = useParams();
  return(
    <>
    <h1>User Profile</h1>
    </>
  );
}
export default Profile;