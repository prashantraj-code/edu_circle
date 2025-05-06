import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";

const Container = styled.div`
  height: 100vh;
  display: flex;
  width: 100%;
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

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log("User created:", user);

      navigate("/login"); // Redirect to login page after successful signup
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error("Signup error:", errorCode, errorMessage);
      alert("Error signing up: " + errorMessage);
    }
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Title>Sign Up</Title>
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
        <Input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <Button type="submit">Create Account</Button>
        <SecondaryButton type="button" onClick={() => navigate("/login")}>
          Already have an account? Login
        </SecondaryButton>
      </Form>
    </Container>
  );
};

export default Signup;
