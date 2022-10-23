import { Box, Flex, Grid, Image, Text, useTheme } from "@chakra-ui/react";
import React from "react";
import TeamSkillsCard from "../components/TeamSkillsCard";

const AboutPage: React.FC = () => {
  const theme = useTheme();

  return (
    <>
      <Grid
        w="100%"
        h="100vh"
        bg="radial-gradient(circle, rgba(35,11,113,1) 17%, rgba(18,7,52,1) 100%)"
        justifyContent="center"
        alignContent="center"
      >
        <Text
          color="#dedede"
          fontFamily={theme.fonts.secondary}
          fontSize="6xl"
          textAlign="center"
          mb="2rem"
        >
          ¿Por qué elegirnos?
        </Text>
        <Flex justifyContent="center">
          <Box w="35%">
            <Image src="https://res.cloudinary.com/diylksocz/image/upload/v1666346865/mobile-web-design_dpzdcz.svg" />
          </Box>
          <Box w="30%">
            <Grid templateColumns="repeat(2,1fr)" gap="1rem">
              <TeamSkillsCard
                text="Experience"
                image="https://res.cloudinary.com/diylksocz/image/upload/v1666347172/experience_icn-removebg-preview_oc1fuu.png"
              />
              <TeamSkillsCard
                text="Tech Capacity"
                image="https://res.cloudinary.com/diylksocz/image/upload/v1666347172/capacity_icn-removebg-preview_okrrx2.png"
              />
              <TeamSkillsCard
                text="Quality Process"
                image="https://res.cloudinary.com/diylksocz/image/upload/v1666347172/processes_icn-removebg-preview_eywbzh.png"
              />
              <TeamSkillsCard
                text="Passionate Professionals"
                image="https://res.cloudinary.com/diylksocz/image/upload/v1666347171/team_icn-removebg-preview_xamgco.png"
              />
            </Grid>
          </Box>
        </Flex>
      </Grid>
    </>
  );
};

export default AboutPage;
