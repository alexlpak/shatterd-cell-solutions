import { Text } from '../../../../components/Text.styled';
import { ProfileImage } from '../../../../components/ProfileImage.styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { Card } from '../../../../components/Card.styled';
import { Flex } from '../../../../components/Flex.styled';
import { useTheme } from 'styled-components';

const ReviewCard = (props) => {
    const theme = useTheme();

    return (
        <Card $width='15rem' $margin={props.margin} $padding='2rem' $border={`2px solid ${theme.colors.lightGray.main}`}>
            <Flex $gap='1rem' $alignItems='center' $width='100%'>
                <ProfileImage $size='4rem' src={props.imgSrc || null} />
                <Flex $flexDirection='column'>
                    <Text $fontWeight={600}>{props.name}</Text>
                    <Text>{props.date}</Text>
                </Flex>
            </Flex>
            <Flex $flexDirection='column' $gap='1rem'>
                <Text $fontWeight={600}>{props.title}</Text>
                <Text>{props.body}</Text>
            </Flex>
            <Flex>
                {new Array(5).fill('').map((item, index) => {
                    if (index+1 <= props.rating) {
                        return <FontAwesomeIcon key={props.name+index} icon={faStar} color={theme.colors.primary.main} />
                    }
                    else {
                        return <FontAwesomeIcon key={props.name+index} icon={faStar} color={theme.colors.lightGray.main} />
                    };
                })}
            </Flex>
        </Card>
    );
};

export default ReviewCard;