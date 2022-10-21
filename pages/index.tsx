import { Grid, Text, Flex, Image, useTheme, Box, Icon } from "@chakra-ui/react";
import type { NextPage } from "next";
import { useState, useEffect } from "react";
import styles from "../styles/Home.module.css";
import { GiAlienBug } from "react-icons/gi";
import IndexPage from "../layouts/IndexPage";
import Header from "../components/Header";

const Home: NextPage = () => {
  const theme = useTheme();
  return (
    <>
      <Header />
      <IndexPage />
      <Box w="500px" h="500px" bg='blue'></Box>
    </>
  );
};

export default Home;
