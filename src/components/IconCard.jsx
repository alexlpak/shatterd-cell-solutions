import { Text } from './Text.styled';
import { Flex } from './Flex.styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Card } from './Card.styled';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fas);

const IconCard = (({
    $border,
    $justifyContent,
    $alignItems,
    $margin,
    $height,
    $width,
    $icon,
    $size,
    $iconColor,
    $label,
    onClick
}) => {
    return (
        <Card
            $border={$border}
            $justifyContent={$justifyContent}
            $alignItems={$alignItems}
            $margin={$margin}
            $height={$height}
            $width={$width}
            onClick={onClick}
        >
            <FontAwesomeIcon icon={['fas', $icon]} size={$size} color={$iconColor} />
            <Text $fontWeight={600} $textAlign='center'>{$label}</Text>
        </Card>
    );
});

IconCard.defaultProps = {
    $icon: 'star',
    $size: '1x',
    $label: 'Lorem Ipsum'
};

export default IconCard;