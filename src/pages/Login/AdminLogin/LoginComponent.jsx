import {
    Button,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    InputRightElement,
    VStack,
    useToast,
  } from "@chakra-ui/react";
  import axios from "axios";
  import React, { useState } from "react";
  import { useNavigate } from "react-router-dom";
  import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
  import auth from "../../../firebase.init";
import useToken from "../../../hooks/useToken";
  const LoginComponent = () => {

    const [signInWithEmailAndPassword, user, firebaseLoading, error] =
      useSignInWithEmailAndPassword(auth);
    const [loading, setLoading] = useState(false);
    const [passShow, setPassShow] = useState(false);
  const role="admin"
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const toast = useToast();
    const navigate = useNavigate();
    const [token] = useToken(user,role);
    if(token){
      return navigate("/");
    }
  
    const handleShowHide = () => {
      setPassShow(!passShow);
    };
  
    const submitLoginHandler = async (e) => {
      e.preventDefault();
      setLoading(true);
      if (!email || !password) {
        toast({
          title: "Please Fill all the Fields",
          status: "warning",
          duration: 5000,
          isClosable: true,
          position: "bottom",
        });
        setLoading(false);
        return;
      }
    
  
      try {
        const config = {
          headers: {
            "Content-type": "application/json",
          },
        };
  
        const { data } = await axios.post(
          "http://localhost:5000/api/admin/login",
          { email, password },
          config
        );
  
        const accessToken = data.token;
        localStorage.setItem("accessToken", accessToken);
        await signInWithEmailAndPassword(email, password);
        toast({
          title: "Login Successful",
          status: "success",
          duration: 5000,
          isClosable: true,
          position: "bottom",
        });
        setLoading(false);
       
      } catch (error) {
        toast({
          title: "Error Occurred!",
          description: error.response.data.message,
          status: "error",
          duration: 5000,
          isClosable: true,
          position: "bottom",
        });
        setLoading(false);
      }
    };

    return (
      <>
        <VStack spacing="5px" color="black">
          <FormControl id="email" isRequired>
            <FormLabel>Email</FormLabel>
            <Input
              placeholder="Enter Your Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormControl>
          <FormControl id="password" isRequired>
            <FormLabel>Password</FormLabel>
            <InputGroup>
              <Input
                type={passShow ? "text" : "password"}
                placeholder="Enter Your Password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <InputRightElement width="4.5rem">
                <Button h="1.75rem" size="sm" onClick={handleShowHide}>
                  {passShow ? "Hide" : "Show"}
                </Button>
              </InputRightElement>
            </InputGroup>
          </FormControl>
  
          <Button
            // backgroundColor={secondary}
            colorScheme="blue"
            color="white"
            width="100%"
            style={{ marginTop: 15 }}
            // _hover={{
            //   backgroundColor: "#021431",
            // }}
            onClick={submitLoginHandler}
            isLoading={loading}
          >
            Login
          </Button>
        </VStack>
      </>
    );
  };
  
  export default LoginComponent;
  