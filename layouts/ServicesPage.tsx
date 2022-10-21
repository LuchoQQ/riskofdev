import { Flex, Grid, Text, useTheme } from "@chakra-ui/react";
import React from "react";
import { MdArchitecture, MdCloud, MdOutlineDesignServices, MdSecurity,  } from "react-icons/md";
import { SiSpeedtest } from "react-icons/si";
import ServicesCard from "../components/ServicesCard";

const ServicesPage: React.FC = () => {
    const theme = useTheme()
  return (
    <>
      <Grid
        w="100%"
        minH="100vh"
        bg="#dedede"
        justifyContent="center"
        alignContent="center"
        gap="1rem"
      >
        <Text
          textAlign="center"
          fontSize="4xl"
          fontFamily={theme.fonts.secondary}
        >
          ¿Que podemos ofrecerte?
        </Text>

        <Flex gap="1rem">
          <ServicesCard
            icon={MdArchitecture}
            text="Arquitectura de Software e Integracion de aplicaciones"
          />
          <ServicesCard
            icon={MdOutlineDesignServices}
            text="Diseño centrado en el cliente"
          />
          <ServicesCard icon={MdSecurity} text="Soluciones de Seguridad" />
          <ServicesCard
            icon={MdCloud}
            text="Infraestructura, sustento y migracion en la nube"
          />
          <ServicesCard
            icon={SiSpeedtest}
            text="Testing y control de calidad"
          />
        </Flex>
      </Grid>
    </>
  );
};

export default ServicesPage;
