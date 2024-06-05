import {
  Drawer,
  DrawerBody,
  
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Input,
} from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import React from "react";

export default function Drawer() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      <Button ref={btnRef} colorScheme="orange" onClick={onOpen}>
        ⬇
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
        size={"md"}
      >
        <DrawerContent className="">
          <DrawerCloseButton />

          <DrawerBody className="m-10 ">
            <Input placeholder="Search for area,street name.." />
            <Button className="mt-10 p-2 text-gray-400 bg-white-400 ">
              Get current location
              <br />
              using GPS
            </Button>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
