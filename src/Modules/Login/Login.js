import React from 'react';
import {
  Row,
  Col,
  Container,
  Label,
  Input,
  Button,
  Card,
  CardHeader,
  CardBody
} from 'reactstrap'

function Login(props){
  let [username, setUsername] = React.useState("")
  let [password, setPassword] = React.useState("")

  const onLogin = (e) => {
    e.preventDefault();

    let account = [
      { username: "user", password: "123", role: "user" },
      { username: "admin", password: "1234", role: "admin" },
    ]

    let accountObj = account.find(item => item.username === username && item.password === password)

    if(accountObj){
      let loginObj = {
        token: "xxxxx",
        ...accountObj
      }
      localStorage.setItem("access", JSON.stringify(loginObj))
      props.history.replace("/")
      console.log("Login Berhasil!")
    }else{
      console.log("Username atau Password salah!")
    }

 


  }

  return(
    <React.Fragment>
      <Container>
        <Row>
          <Col md={{offset: "4", size: "4"}}>
            <Card className="mt-5">
              <CardHeader>Login</CardHeader>
              <CardBody>
                <Label for="username">Username</Label>
                <Input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)}/>
                <Label for="password">Password</Label>
                <Input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                <br />
                <Button color="primary" onClick={onLogin} block>Login</Button>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  )
}

export default Login;