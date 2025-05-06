import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase"; // Import your Firebase auth instance

const Container = styled.div`
  height: 100vh;
  display: flex;
  width: 100%;
  right: 0;
  left: 0;
  justify-content: center;
  align-items: center;
`;

const Form = styled.form`
  background: white;
  padding: 2.5rem;
  border-radius: 16px;
  box-shadow: 0 10px 25px rgba(91, 60, 196, 0.2);
  width: 100%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  position: relative;
  z-index: 1;
`;

const Input = styled.input`
  padding: 0.75rem 1rem;
  border: 2px solid #e0d8f7;
  border-radius: 10px;
  font-size: 1rem;
  outline: none;
  transition: border-color 0.3s;

  &:focus {
    border-color: #5b3cc4;
  }
`;

const Button = styled.button`
  padding: 0.75rem 1rem;
  background-color: #5b3cc4;
  color: white;
  font-weight: bold;
  border: none;
  border-radius: 10px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #432a9c;
  }
`;

const SecondaryButton = styled.button`
  padding: 0.75rem 1rem;
  background-color: transparent;
  color: #5b3cc4;
  font-weight: bold;
  border: 2px solid #5b3cc4;
  border-radius: 10px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: #5b3cc4;
    color: white;
  }
`;

const Title = styled.h2`
  text-align: center;
  color: #5b3cc4;
  margin-bottom: 0.5rem;
`;

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log("User logged in:", user);

      window.location.href = "/home"; 
      navigate("/"); // Redirect to the home page after successful login
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert("Invalid credentials");
      console.error("Login error:", errorCode, errorMessage);
    }
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Title>Login</Title>
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <Button type="submit">Login</Button>
        <SecondaryButton type="button" onClick={() => navigate("/signup")}>
          Create Account
        </SecondaryButton>
      </Form>
    </Container>
  );
};

export default Login;
