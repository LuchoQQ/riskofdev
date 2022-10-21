import { Flex, Icon, Text, useTheme } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";
import { IconType } from "react-icons";
import { MdArchitecture } from "react-icons/md";

type Props = {
  icon: IconType;
  text: string;
};

const ServicesCard: React.FC<Props> = ({ icon, text }) => {
  const theme = useTheme();
  return (
    <>
      <Flex
        as={motion.div}
        whileHover={{ translateY: -10 }}
        whileTap={{ scale: 0.9 }}
        transition="0.2s linear"
        _hover={{
          filter: "drop-shadow(0px 10px 4px rgba(23, 46, 101, 0.4))",
        }}
        alignSelf="center"
      >
        <Flex
          w="200px"
          h="300px"
          bg="#fff"
          rounded="20px"
          flexDir="column"
          alignContent="center"
          justifyContent="center"
          gap="2rem"
          py='2rem'
        >
          <Icon as={icon} alignSelf="center" fontSize="6xl" />
          <Text
            px="1rem"
            textAlign="center"
            fontFamily={theme.fonts.secondary}
            fontSize="2xl"
            mb='auto'
          >
            {text}
          </Text>
        </Flex>
      </Flex>
    </>
  );
};

export default ServicesCard;
