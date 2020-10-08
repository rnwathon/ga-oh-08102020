import React from 'react';
import {
  Container,
  Row,
  Col,
  Button
} from 'reactstrap';

function Home(props){
  let [role, setRole] = React.useState("")

  // Component Did Mount
  React.useEffect(() => {
    let access = JSON.parse(localStorage.getItem("access"))
    if(access && access.role){
      setRole(access.role)
    }
  }, [])

  const onMenu1Click = () => {
    if(role === "user"){
      console.log("Lakukan khusus untuk user")
    } else if (role === "admin"){
      console.log("Lakukan khusus admin")
    }
  }

  const onMenu2Click = () => {
    props.history.push("/postMovie")
  }

  return(
    <Container>
      <Row className="mt-5">
        <h1>Role: {role}</h1>
      </Row>
      <Row className="mt-5">
        <Col md="4">
          <Button color="primary" block onClick={onMenu1Click}>Search Movie</Button>
        </Col>
        {role === "admin" &&
          <>
            <Col md="4">
              <Button color="primary" block onClick={onMenu2Click}>Post Movie</Button>
            </Col>
          </>
        }
      </Row>
    </Container>
  )
}

export default Home;