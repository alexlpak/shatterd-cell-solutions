import { Text } from './Text.styled';
import { Flex } from './Flex.styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Card } from './Card.styled';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fas);

const IconCard = (props) => {
    return (
        <Card
            border={props.border}
            justifyContent={props.justifyContent}
            alignItems={props.alignItems}
        >
            <FontAwesomeIcon icon={['fas', props.icon]} size={props.size} color={props.iconColor} />
            <Text fontWeight={600} textAlign='center'>{props.label}</Text>
        </Card>
    );
};

IconCard.defaultProps = {
    icon: 'star',
    size: '1x',
    label: 'Lorem Ipsum'
};

export default IconCard;