import { Grid, Image, Text, useTheme } from '@chakra-ui/react';
import React from 'react';

type Props = {
    image: string;
    text: string;
};

const TeamSkillsCard: React.FC<Props> = ({image, text}) => {
    const theme = useTheme()
    return (
        <>
            <Grid
                bg="#dedede"
                justifyContent="center"
                alignContent="center"
                maxW="180px"
                rounded="20px"
              >
                <Image
                  w="100px"
                  src={image}
                  justifySelf='center'
                />
                <Text fontFamily={theme.fonts.secondary} textAlign='center' fontSize='2xl' mt='auto'>{text}</Text>
              </Grid>
        </>
    );
};

export default TeamSkillsCard;