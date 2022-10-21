import React from "react";
import {
  Flex,
  Text,
  useTheme,
  Image,
  Box,
  chakra,
  shouldForwardProp,
} from "@chakra-ui/react";
import { motion, isValidMotionProp } from "framer-motion";

const IndexPage: React.FC = () => {
  const theme = useTheme();

  const ChakraBox = chakra(motion.div, {
    /**
     * Allow motion props and non-Chakra props to be forwarded.
     */
    shouldForwardProp: (prop) =>
      isValidMotionProp(prop) || shouldForwardProp(prop),
  });
  return (
    <>
      <Flex
        w="100%"
        h="100vh"
        fontFamily={theme.fonts.primary}
        justifyContent="center"
      >
        <Image
          src="https://res.cloudinary.com/diylksocz/image/upload/v1666332142/bg2_gftm4w.jpg"
          position="absolute"
          w="100vw"
          h="100vh"
          fit="cover"
          filter="brightness(0.8)"

        />

        <Flex
          alignSelf="center"
          gap="2rem"
          position="relative"
          justifyContent="center"
        >
          <ChakraBox
            style={{
              overflow: "hidden",
            }}
            animate={{
              y: [10, -10, 10],
              transform: ["rotate(0deg)", "rotate(10deg)", "rotate(0deg)"],
            }}
            // @ts-ignore no problem in operation, although type error appears.
            transition={{
              duration: 15,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "loop",
            }}
            w="40%"
          >
            <Image
              src="https://res.cloudinary.com/diylksocz/image/upload/v1654723277/Egvz6bdXsAIDorV_jahu6h.png"
              w="400px"
              h="400px"
            />
          </ChakraBox>
          <Box alignSelf="center" w="50%">
            <Text
              color="#fff"
              fontFamily={theme.fonts.secondary}
              fontSize="6xl"
              textAlign="center"
              maxW="800px"
            >
              SOFTWARE SOLUTIONS AT YOUR SERVICE
            </Text>
            <Text
              color="#dedede"
              fontFamily={theme.fonts.primary}
              fontSize="lg"
              textAlign="center"
              maxW="600px"
            >
              With more{" "}
              <strong style={{ color: "#dedede" }}>
                than 12 years of experience innovating{" "}
              </strong>
              , we launch your digital project developed with technology
              and processes that meet international standards processes
            </Text>
          </Box>
        </Flex>
      </Flex>
    </>
  );
};

export default IndexPage;
