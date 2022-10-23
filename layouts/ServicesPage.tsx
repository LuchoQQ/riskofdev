import { Flex, Grid, Text, useTheme } from "@chakra-ui/react";
import React, { useEffect } from "react";
import {
  MdArchitecture,
  MdCloud,
  MdOutlineDesignServices,
  MdSecurity,
} from "react-icons/md";
import { SiSpeedtest } from "react-icons/si";
import ServicesCard from "../components/ServicesCard";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";


const variants = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};
const variants2 = {
  hidden: { opacity: 0, y: 70 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeInOut",
    },
  },
};
const variants3 = {
  hidden: { opacity: 0, y: -70 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeInOut",
    },
  },
};

const ServicesPage: React.FC = () => {
  const control = useAnimation();
  const [ref, inView] = useInView();
  const theme = useTheme();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

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
        <motion.div
          ref={ref}
          animate={control}
          initial="hidden"
          variants={variants}
        >
          <Text
            textAlign="center"
            fontSize="4xl"
            fontFamily={theme.fonts.secondary}
            mb='1rem'
          >
            ¿Que podemos ofrecerte?
          </Text>

          <Flex gap="1rem">
            <motion.div variants={variants2}>
              <ServicesCard
                icon={MdArchitecture}
                text="Arquitectura de Software e Integracion de aplicaciones"
              />
            </motion.div>
            <motion.div variants={variants3}>
              <ServicesCard
                icon={MdOutlineDesignServices}
                text="Diseño centrado en el cliente"
              />
            </motion.div>
            <motion.div variants={variants2}>
              <ServicesCard icon={MdSecurity} text="Soluciones de Seguridad" />
            </motion.div>
            <motion.div variants={variants3}>
              <ServicesCard
                icon={MdCloud}
                text="Infraestructura, sustento y migracion en la nube"
              />
            </motion.div>
            <motion.div variants={variants2}>
              <ServicesCard
                icon={SiSpeedtest}
                text="Testing y control de calidad"
              />
            </motion.div>
          </Flex>
        </motion.div>
      </Grid>
    </>
  );
};

export default ServicesPage;
