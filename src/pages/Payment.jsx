import React, { useState } from "react";
import {
  Box,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Card,
  Flex,
  CardBody,
  Stack,
  Text,
  Heading,
  Image,
  HStack,
  FormControl,
  FormLabel,
  Input,
  WrapItem,
  Avatar,
  Divider,
  Spacer,
} from "@chakra-ui/react";
import { FaCalendar, FaMapMarker } from "react-icons/fa";

const Payment = () => {
  const {  onOpen, onClose } = useDisclosure();

  const [showModal, setShowModal] = useState(true);

  console.log(onOpen);

  return (
    <Box>
      <Modal
        size={"4xl"}
        onClose={onClose}
        isOpen={showModal}
      >
        <ModalOverlay />
        <ModalContent style={{ marginTop: "0px" }}>
          <ModalHeader
            style={{ fontSize: 40 }}
            backgroundColor={"black"}
            color={"white"}
            padding={7}
          >
            Choose the form of payment
          </ModalHeader>
          <ModalCloseButton
            color={"white"}
            onClick={() => {
              setShowModal(false);
            }}
          />
          <ModalBody padding={10}>
            <>
              <Card
                direction={{ base: "column", sm: "row" }}
                overflow="hidden"
                variant="outline"
                paddingY={15}
                paddingX={5}
                borderRadius={20}
                backgroundColor={"gray.100"}
              >
               
                  <Flex>
                    <WrapItem>
                      <Avatar
                        height={70}
                        width={70}
                        backgroundColor={"gray.200"}
                        name="Johsan"
                        src="https://bit.ly/tioluwani-kolawole"
                      />
                    </WrapItem>
                    <CardBody py={2} px={2}>
                      <Heading size="md">John</Heading>
                      <Text color={"gray.700"}>(88) 99602-2404</Text>
                    </CardBody>
                  </Flex>
                  <Spacer />
                  
                    <Button
                      style={{ marginTop: "8px", height: "55px" }}
                      variant="solid"
                      backgroundColor={"gray.200"}
                    >
                      Log out
                    </Button>
              </Card>
            </>

            <>
              <Heading as="h4" size="md" paddingY={4}>
                Selected Service
              </Heading>

              <Card
                direction={{ base: "column", sm: "row" }}
                overflow="hidden"
                variant="outline"
                paddingX={5}
                borderRadius={20}
              >
                <HStack>
                  <Image
                    objectFit="cover"
                    borderRadius={15}
                    height={75}
                    width={75}
                    src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
                    alt="Caffe Latte"
                  />

                  <CardBody width="10%">
                    <Stack spacing={0}>
                      <Heading size="md">Japanese Lessons</Heading>
                      <HStack>
                        <FaCalendar />
                        <Text fontSize={15} color={"gray.700"}>
                          Dec 2,2020- 11:00 1 month
                        </Text>
                      </HStack>

                      <HStack>
                        <FaMapMarker />
                        <Text as="span" fontSize={15} color={"gray.700"}>
                          Client's place
                        </Text>
                      </HStack>

                      <Heading as={"h5"} size="md">
                        Rp 1.350.000
                      </Heading>
                    </Stack>
                  </CardBody>
                </HStack>
              </Card>
            </>

            <FormControl>
              <FormLabel py={5} fontWeight={"semibold"}>
                <Heading as={"h5"} size="md">
                  Enter Your Location
                </Heading>
              </FormLabel>
              <Input
                type="text"
                height="60px"
                placeholder="Enter address"
                size={"lg"}
              />
              <FormLabel py={5} fontWeight={"semibold"}>
                <Heading as={"h5"} size="md">
                  Note (Optional)
                </Heading>
              </FormLabel>
              <Input
                type="text"
                height="60px"
                placeholder="Enter text here"
                size={"lg"}
              />
            </FormControl>

            <Heading as={"h2"} size={"lg"} py={7}>
              Choose a way to pay
            </Heading>

            <HStack width={"100%"} spacing={10}>
              <Button
                size={"lg"}
                width={"100%"}
                height="60px"
                bgColor="white"
                variant="outline"
                borderColor="1px solid black"
              >
                Cash
              </Button>
              <Button size={"lg"} height="60px" width={"100%"}>
                Credit Card
              </Button>
            </HStack>
            <Button
              style={{ marginTop: "24px" }}
              height="60px"
              size={"lg"}
              width={"47%"}
            >
              eVallet/Virtual Bank
            </Button>
          </ModalBody>
          <Divider height={4} />
          <Flex py={10}>
            <Button
              size={"lg"}
              variant="ghost"
              onClick={() => {
                setShowModal(false);
              }}
            >
              Previous
            </Button>
            <Spacer />
            <Button
              size={"lg"}
              colorScheme="blue"
              mr={3}
              width={40}
              backgroundColor="#1e21ff"
              style={{ height: "60px" }}
              onClick={() => {
                setShowModal(false);
              }}
            >
              Next
            </Button>
          </Flex>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default Payment;
