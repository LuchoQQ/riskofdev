import { Flex, Icon, Image, Text, useTheme } from "@chakra-ui/react";
import { FaLinkedinIn } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import React from "react";

const TeamCard: React.FC = () => {
  const theme = useTheme();
  return (
    <>
      <Flex
        w="200px"
        h="350px"
        bg="#fff"
        alignContent="center"
        justifyContent="center"
        alignItems="center"
        flexDir="column"
        boxShadow="0px 0px 10px 10px rgba(0,0,0,0.1)"
        position="relative"
      >
        <Image
          py="1rem"
          src="https://res.cloudinary.com/diylksocz/image/upload/v1658451055/378a270e775265622393da8c0527417e_phnp4l.jpg"
          rounded="50%"
          w="50%"
          justifySelf="center"
        />
        <Text
          mb="auto"
          fontSize="xl"
          fontFamily={theme.fonts.secondary}
          textAlign="center"
        >
          Rigoberto Baratuso
        </Text>

        <Flex gap="1rem" py=".5rem" mt="auto">
          <Flex
            w="30px"
            h="30px"
            border="2px solid black"
            rounded="100%"
            justifyContent="center"
            alignContent="center"
          >
            <Icon as={FaLinkedinIn} alignSelf="center" cursor="pointer" />
          </Flex>
          <Flex
            w="30px"
            h="30px"
            border="2px solid black"
            rounded="100%"
            justifyContent="center"
            alignContent="center"
          >
            <Icon as={AiFillGithub} alignSelf="center" cursor="pointer" />
          </Flex>
          <Flex
            w="30px"
            h="30px"
            border="2px solid black"
            rounded="100%"
            justifyContent="center"
            alignContent="center"
          >
            <Icon as={FaLinkedinIn} alignSelf="center" cursor="pointer" />
          </Flex>
        </Flex>
        <Flex
          justifyContent="center"
          alignContent="center"
          p="1rem"
          bg="#dedede"
          w="100%"
        >
          <Flex
            bg="#090909"
            rounded="100px"
            px="1rem"
            py=".5rem"
            cursor="pointer"
          >
            <Text
              color="#f3f4f5"
              fontFamily={theme.fonts.primary}
              fontSize="sm"
            >
              Descargar CV
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default TeamCard;
