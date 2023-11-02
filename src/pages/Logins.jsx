import styled from "styled-components"
import { Link } from "react-router-dom";
const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(
        rgba(255, 255, 255, 0.5),
        rgba(255, 255, 255, 0.5)
        ),   
    url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
    center;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const Wrapper = styled.div`
padding: 20px;
width: 25%;
background-color: white;
@media only screen and (max-width: 390px){
  width: 75%;
 }
`
const Title = styled.h1`
  font-size: 20px;
  font-weight: 300;
`
const Form = styled.form`
    display: flex;
    flex-direction: column;
`

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0px;
  padding: 10px;
`

const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    cursor: pointer;
    margin-bottom: 10px;
`;
const Logins = () => {
  return (
    <Container>
      <Wrapper>
            <Title>SIGN IN</Title>
            <Form>
             <Input placeholder="username"/>
             <Input placeholder="changepassword"/>   
             <Input placeholder="confirmpassword"/>         
                <Link to="/Login">
                <Button>LOGIN</Button>
                </Link>       
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Logins
