import { Section } from '../../../../components/Section.styled';
import { Flex } from '../../../../components/Flex.styled';
import PromotionCard from './PromotionCard';
import styled, { useTheme } from 'styled-components';

const data = [
    {
        icon: 'piggy-bank',
        title: 'We Buy\nBroken Devices',
        text: 'Have a broken device that you don\'t want to get repaired?\n\nTrade it in for cash or use the credit towards your repair.'
    },
    {
        icon: 'money-bill-wave',
        title: 'Get a 10% Discount',
        text: 'Get a 10% discount on all purchases and repairs for First Responders, Military (Veterans/Active Duty), College Students, and Teachers.\n\nMust present badge or ID card for discount.'
    }
];

const CardContainerStyled = styled(Flex)`
    align-items: flex-start;
    justify-content: space-between;
    width: 100%;
    flex-wrap: nowrap;
    gap: 1rem;
    @media screen and (max-width: 645px) {
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
    };
`;

const Promotions = () => {
    const theme = useTheme();
    return (
        <Section $backgroundColor={theme.colors.primary.main} id='promotions'>
            <CardContainerStyled>
                {data.map(promo => {
                    return <PromotionCard key={promo.title} {...promo} iconColor={theme.colors.primary.main} />
                })}
            </CardContainerStyled>
        </Section>
    );
};

export default Promotions;