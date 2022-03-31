import axios from "axios";
import { useNavigate, useParams } from "react-router";
import { deleteUser, getUser } from "../users";

export function User() {
  const { userId } = useParams();
  const user = getUser(+userId);
  const [res, setRes] = useState('')

  useEffect(() => {
    axios.get('http://localhost:3001/project/findFullDataProject')
    .then(function (response) {
      // handle success
      setRes(response.data)
     // console.log(response);
      
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });
 
 
  
}, [])

 
  return (
    <div>
      <h2>{user.name}</h2>
      <div>
        <strong>Phone: </strong> {user.phone}
      </div>
      <div>
        <strong>Website: </strong> {user.website}
      </div>
      <br />
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}
