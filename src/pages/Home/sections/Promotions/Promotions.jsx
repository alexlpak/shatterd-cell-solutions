import { Section } from '../../../../components/Section.styled';
import { Flex } from '../../../../components/Flex.styled';
import PromotionCard from './PromotionCard';
import { useTheme } from 'styled-components';

const data = [
    {
        icon: 'piggy-bank',
        title: 'We Buy Broken Devices',
        text: 'Have a broken device that you don\'t want to get repaired?\n\nTrade it in for cash or use the credit towards your repair.'
    },
    {
        icon: 'money-bill-wave',
        title: 'Get a 10% Discount',
        text: 'Get a 10% discount on all purchases and repairs for First Responders, Military (Veterans/Active Duty), College Students, and Teachers.\n\nMust present badge or ID card for discount.'
    }
];

const Promotions = () => {
    const theme = useTheme();
    return (
        <Section $backgroundColor={theme.colors.lightGray.main} id='promotions'>
            <Flex $alignItems='center' $justifyContent='center' $flexWrap='wrap' $gap='1rem'>
                {data.map(promo => {
                    return <PromotionCard key={promo.title} {...promo} iconColor={theme.colors.primary.main} />
                })}
            </Flex>
        </Section>
    );
};

export default Promotions;