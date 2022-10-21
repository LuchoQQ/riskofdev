import React from "react";
import { Flex, useTheme, Text, Icon, Image } from "@chakra-ui/react";
import { GiAlienBug } from "react-icons/gi";
import Link from "next/link";

const Header: React.FC = () => {
  const theme = useTheme();

  const navLinks = [
    {
      Index: "/",
    },
    {
      "Our Work": "/work",
    },
    {
      Services: "/services",
    },
    {
      "About Us": "/abouts",
    },
    {
      "Our Team": "/team",
    },
    {
      Contact: "/contact",
    },
  ];

  return (
    <>
      <Flex
        position="fixed"
        zIndex={99999}
        fontFamily={theme.fonts.primary}
        pl="4rem"
        pr="3rem"
        w="100%"
        py="2rem"
      >
        <Flex gap="1rem">
          <Icon
            as={GiAlienBug}
            alignSelf="center"
            fill="#dedede"
            fontSize="3xl"
          />
          <Text
            alignSelf="center"
            color="#dedede"
            fontSize="2xl"
            fontFamily={theme.fonts.secondary}
          >
            RISKofDEV
          </Text>
        </Flex>
        <Flex gap="1rem" alignItems="center" ml="auto" fontSize=".8rem">
          {navLinks.map((link, index) => {
            console.log(link);
            return (
              <>
                <Text
                  key={index}
                  color="#dedede"
                  _hover={{ color: theme.colors.primary }}
                  textTransform="uppercase"
                  cursor='pointer'
                >
                  {Object.keys(link)[0]}
                </Text>
              </>
            );
          })}

          <Flex gap="2rem">
            <Flex>
              <Image src="https://res.cloudinary.com/diylksocz/image/upload/v1666332721/argentine_flag_drns5v.svg" />
              <Text color="#dedede">ES</Text>
            </Flex>
            <Flex>
              <Image src="https://res.cloudinary.com/diylksocz/image/upload/v1666332719/eeuu_flag_txf6yj.svg" />
              <Text color="#dedede">EN</Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default Header;
