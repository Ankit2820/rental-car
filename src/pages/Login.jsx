import styled from "styled-components"
import { Link } from "react-router-dom";

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: 
    url("https://images.unsplash.com/photo-1588623259724-71e3e35834c9?auto=format&fit=crop&q=60&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNhciUyMGJsdWV8ZW58MHx8MHx8fDA%3D")
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
    background-color: #000d6b;
    color: white;
    cursor: pointer;
    margin-bottom: 10px;
`;

const Signitem = styled.h1`
   margin: 5px 0px;
   font-size: 12px;
   text-decoration: underline;
   cursor: pointer;
`
const Signitems = styled.h1`
   margin: 5px 0px;
   font-size: 12px;
   text-decoration: underline;
   cursor: pointer;
`
const Login = () => {
  return (
      <Container>
      <Wrapper>
            <Title>SIGN IN</Title>
            <Form>
             <Input placeholder="username"/>
             <Input placeholder="password"/>      
           <Button>LOGIN</Button>
           <Link to={"/Logins"}>
           <Signitem>DO NOT YOU REMEMBER THE PASSWORD?</Signitem>
           </Link>
           <Link to={"/Register"}>
            <Signitems>CREATE A NEW ACCOUNT</Signitems>
            </Link>
            </Form>
        </Wrapper>
        </Container>
    
  )
}

export default Login

