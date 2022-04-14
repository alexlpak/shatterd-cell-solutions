import { Text } from '../../../../components/Text.styled';
import { ProfileImage } from '../../../../components/ProfileImage.styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { Card } from '../../../../components/Card.styled';
import { Flex } from '../../../../components/Flex.styled';
import { useTheme } from 'styled-components';

const ReviewCard = ({ author_name, profile_photo_url, relative_time_description, text, rating }) => {
    const theme = useTheme();
        
    return (
        <Card $width='fit-content' $margin='0 auto' $padding='2rem' $border={`2px solid ${theme.colors.lightGray.main}`}>
            <Flex $gap='1rem' $alignItems='center' $width='100%'>
                <ProfileImage $size='4rem' src={profile_photo_url || null} />
                <Flex $flexDirection='column'>
                    <Text $fontWeight={600}>{author_name}</Text>
                    <Text>{relative_time_description}</Text>
                </Flex>
            </Flex>
            <Flex $flexDirection='column' $gap='1rem'>
            <Flex>
                {new Array(5).fill('').map((item, index) => {
                    const starColor = index+1 <= rating ? theme.colors.primary.main : theme.colors.lightGray.main;
                    return <FontAwesomeIcon key={author_name+index} icon={faStar} color={starColor} />
                })}
            </Flex>
                <Text>{text}</Text>
            </Flex>
        </Card>
    );
};

export default ReviewCard;