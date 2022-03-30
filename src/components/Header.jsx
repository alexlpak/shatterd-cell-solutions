import { Image } from './Image.styled';
import { Text } from './Text.styled';
import { Section } from './Section.styled';
import { Flex } from './Flex.styled';
import CompanyLogo from '../assets/images/shatterd-cell-solutions-logo.svg';
import { RouterLink } from './RouterLink.styled';
import { Link } from './Link.styled';
import styled from 'styled-components';
import { smoothScrollToElement } from '../helper/smoothScrollToElement';

const HeaderStyled = styled(Section)`
    position: sticky;
    top: 0;
    background-color: white;
    z-index: 999;
`;

const Header = () => {
    return (
        <HeaderStyled as='header'>
            <Flex alignItems='center' justifyContent='space-between' width='100%'>
                <RouterLink to='/'>
                    <Image src={CompanyLogo} height='3rem' />
                </RouterLink>
                <Flex gap='2rem'>
                    <RouterLink to='/'><Text fontWeight={500}>Home</Text></RouterLink>
                    <Link onClick={() => smoothScrollToElement('#services')}><Text fontWeight={500}>Services</Text></Link>
                    <Link onClick={() => smoothScrollToElement('#reviews')}><Text fontWeight={500}>Reviews</Text></Link>
                    <Link onClick={() => smoothScrollToElement('#promotions')}><Text fontWeight={500}>Sell</Text></Link>
                    <Link onClick={() => smoothScrollToElement('#contact')}><Text fontWeight={500}>Contact</Text></Link>
                </Flex>
            </Flex>
        </HeaderStyled>
    );
};

export default Header;