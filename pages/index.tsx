import { Grid, Text, Flex, Image, useTheme, Box, Icon } from "@chakra-ui/react";
import type { NextPage } from "next";
import IndexPage from "../layouts/IndexPage";
import Header from "../components/Header";
import ServicesPage from "../layouts/ServicesPage";
import AboutPage from "../layouts/AboutPage";
import TeamCard from "../components/TeamCard";

const Home: NextPage = () => {
  const theme = useTheme();
  return (
    <>
      <Header />
      <IndexPage />
      <ServicesPage />
      <AboutPage />
      <Grid
        w="100%"
        h="100vh"
        bg="#f3f4f5"
        justifyContent="center"
        alignContent="center"
      >
        <Grid templateColumns="repeat(4,1fr)"gap='2rem'>
          <TeamCard/>
          <TeamCard/>
          <TeamCard/>
          <TeamCard/>
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
