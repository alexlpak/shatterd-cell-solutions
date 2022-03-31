import { Text } from './Text.styled';
import { Section } from './Section.styled';
import { Flex } from './Flex.styled';
import { useTheme } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faInstagramSquare } from '@fortawesome/free-brands-svg-icons';
import { Link } from './Link.styled';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const Footer = () => {
    const theme = useTheme();
    
    return (
        <Section
        as='footer'
        padding='4rem'
        backgroundColor={theme.colors.primary.main}
        color='white'
        >
            <Flex alignItems='center' justifyContent='space-between' width='100%'>
                <Text maxWidth='unset'>Copyright © 2022 Shatter'd Cell Solutions - All Rights Reserved.</Text>
                <Flex gap='1rem'>
                    <Link href='https://www.facebook.com/shatterdcell/' target='_blank'>
                        <FontAwesomeIcon icon={faFacebookSquare} size='2x' />
                    </Link>
                    <Link href='https://www.instagram.com/shatterd_cell_solutions_' target='_blank'>
                        <FontAwesomeIcon icon={faInstagramSquare} size='2x' />
                    </Link>
                </Flex>
            </Flex>
        </Section>
    );
};

export default Footer;