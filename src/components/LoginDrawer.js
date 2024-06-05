import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Input,
} from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import React, { useState } from "react";

export default function LoginDrawer() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  const [toggleForm,setToggleForm]=useState(false);


  function showSignupForm(){
    setToggleForm(!toggleForm);
  }

  return (
    <>
      <Button ref={btnRef} colorScheme="orange" onClick={onOpen}>
        Sign In
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
        size={"sm"}
      >
        <DrawerContent className="">
          <DrawerCloseButton />

          <DrawerBody className="">
            <div className="flex flex-col  ">
              <h1 className="mt-24 m-1 text-3xl ">  {toggleForm ? "SignUp": "Login" }  </h1>

              <p className="text-md">
                or
                <span className="text-orange-400 cursor-pointer" onClick={()=>{showSignupForm()}}>
                  create an account
                </span>{" "}
              </p>

              <img
                src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/Image-login_btpq7r"
                style={{marginLeft:"270px",marginTop:"-90px",width:'120px',height:'120px'}}
              />
            </div>
           
          
            {toggleForm &&  <Input
              placeholder="Name"
              required
              height="70px"
              width="350px"
              style={{ padding: "6px",marginTop:"60px"}}
            /> }
              {toggleForm &&   <Input
              placeholder="Email Address"
              height="70px"
         
              required
              width="350px"
              style={{ padding: "6px"}}
            /> }
       
             <Input
              placeholder="Phone Number"
              height="70px"
              required
              width="350px"
              style={{ padding: "6px"}}
            />
        
            <Button
              colorScheme="orange"
              size="lg"
              height="70px"
              width="350px"
              style={{ marginTop: "16px",padding:"10px" }}
              onClick={()=>handleCheckValidate()}
            >
              {toggleForm ?  "CONTINUE" : "LOGIN"}
            </Button>
            <a href="https://www.swiggy.com/privacy-policy">
            <p className="p-2 m-3 cursor-pointer text-sm" >
              By clicking on Login,I accept the Terms & conditions & Privacy
              Policy
            </p>
            </a>
            
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
