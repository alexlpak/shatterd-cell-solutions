import { Image } from './Image.styled';
import { Text } from './Text.styled';
import { Section } from './Section.styled';
import { Flex } from './Flex.styled';
import CompanyLogo from '../assets/images/shatterd-cell-solutions-logo.svg';
import { RouterLink } from './RouterLink.styled';
import { Link } from './Link.styled';
import styled from 'styled-components';
import { smoothScrollToElement, smoothScrollToTop } from '../helper/smoothScrollToElement';
import { useLocation } from 'react-router-dom'
import { useEffect, useState, useRef } from 'react';
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

const HeaderLinksStyled = styled(Flex)`
    position: relative;
    & ${Link} > ${Text}, ${RouterLink} > ${Text} {
        background-color: white;
        padding: 1rem;
        text-align: center;
        transition: background-color 250ms ease;
        width: 100%;
        max-width: 100%;
        &:hover {
            background-color: ${({ $isMobile, theme }) => $isMobile && theme.colors.lightGray.main};
            transition: background-color 250ms ease;
        };
    };
    & #hamburger {
        padding: 1rem;
        height: 1.25rem;
    };
`;

const HeaderLinks = ({ isHomePage, isMobile }) => {
    const [isOpen, setIsOpen] = useState(false);
    const hamburgerRef = useRef(null);

    useEffect(() => {
        const handleClick = (e) => {
            e.target !== hamburgerRef.current && setIsOpen(false);
        };
        isOpen && document.addEventListener('click', handleClick);
        return () => document.removeEventListener('click', handleClick);
    }, [isOpen]);

    const HomeLink = () => {
        if (isHomePage) {
            return (
                <Link onClick={() => smoothScrollToTop()}>
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
        <HeaderLinksStyled $isMobile={isMobile}>
            {isMobile &&
                <Link ref={hamburgerRef} onClick={() => setIsOpen(!isOpen)}>
                    <FontAwesomeIcon id='hamburger' icon={faBars} />
                </Link>
            }
            <Flex
                $flexDirection={isMobile ? 'column' : 'row'}
                style={{
                    display: isMobile && !isOpen ? 'none' : 'flex',
                    position: isMobile && isOpen ? 'fixed' : null,
                    top: isMobile && isOpen ? document.querySelector('header').getBoundingClientRect().bottom : null,
                    right: isMobile && isOpen ? 0 : null,
                    width: isMobile && isOpen ? '100%' : null,
                }}
            >
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
            </Flex>
        </HeaderLinksStyled>
    );
};

const Header = () => {
    const location = useLocation();

    const isBreakpoint = useMediaQuery({ maxWidth: 720 });

    return (
        <HeaderStyled as='header' $padding='2rem'>
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