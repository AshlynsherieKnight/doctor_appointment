import { Link } from "react-router-dom";
import { ListGroup, Button,} from 'react-bootstrap';
import Image from 'react-bootstrap/Image';

const UserList = ({ patients }) => (
  <>
    <ListGroup variant="flush">
      { patients.map( u =>
        <ListGroup.Item>
          <div>
            <h6>First Name</h6>
            <p>{u.first_name}</p>
            <h6>Last Name</h6>
            <p>{u.last_name}</p>
            <h6>DOB</h6>
            <p>{u.dob}</p>
          </div>
          <br />
          <Image src="https://images.unsplash.com/photo-1597953601374-1ff2d5640c85?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80" bsPrefix
          width='200px'/>
          <br />
          <Link to={`/patients/${u.id}`}>
            <Button variant="info">show</Button>
          </Link>
        </ListGroup.Item>
      )}
    </ListGroup>
  </>
)

export default UserList;