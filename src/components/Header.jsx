import { Image } from './Image.styled';
import { Text } from './Text.styled';
import { Section } from './Section.styled';
import { Flex } from './Flex.styled';
import CompanyLogo from '../assets/images/shatterd-cell-solutions-logo.svg';
import { RouterLink } from './RouterLink.styled';
import { Link } from './Link.styled';
import styled from 'styled-components';
import { smoothScrollToElement } from '../helper/smoothScrollToElement';
import { Router, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const HeaderStyled = styled(Section)`
    position: sticky;
    top: 0;
    background-color: white;
    z-index: 999;
    transition: all 150ms ease;
`;

const HeaderLinksStyled = styled(Flex).attrs({
    $gap: '2rem'
})``;

const HeaderLinks = ({ isHomePage, isMobile }) => {
    const HomeLink = () => {
        if (isHomePage) {
            return (
                <Link onClick={() => smoothScrollToElement('#hero')}>
                    <Text $fontWeight={500}>Home</Text>
                </Link>
            );
        }
        else return (
            <RouterLink to='/'>
                <Text $fontWeight={500}>Home</Text>
            </RouterLink>
        );
    };

    return (
        <HeaderLinksStyled>
            {isMobile && <FontAwesomeIcon icon={faBars} />}
            {!isMobile &&
                <>
                    <HomeLink />
                    {isHomePage &&
                        <>
                            <Link onClick={() => smoothScrollToElement('#services')}>
                                <Text $fontWeight={500}>Services</Text>
                            </Link>
                            <Link onClick={() => smoothScrollToElement('#reviews')}>
                                <Text $fontWeight={500}>Reviews</Text>
                            </Link>
                            <Link onClick={() => smoothScrollToElement('#promotions')}>
                                <Text $fontWeight={500}>Sell</Text>
                            </Link>
                            <Link onClick={() => smoothScrollToElement('#contact')}>
                                <Text $fontWeight={500}>Contact</Text>
                            </Link>
                        </>
                    }
                </>
            }
        </HeaderLinksStyled>
    );
};

const Header = () => {
    const location = useLocation();

    const isBreakpoint = useMediaQuery({ maxWidth: 720 });

    return (
        <HeaderStyled as='header'>
            <Flex $alignItems='center' $justifyContent='space-between' $width='100%' $position='relative'>
                <RouterLink to='/'>
                    <Image src={CompanyLogo} $height='3rem' />
                </RouterLink>
                <HeaderLinks isMobile={isBreakpoint} isHomePage={location.pathname === '/'} />
            </Flex>
        </HeaderStyled>
    );
};

export default Header;