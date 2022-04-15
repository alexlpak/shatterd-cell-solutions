import { Image } from '../../../../../components/Image.styled';
import PhoneBase from '../../../../../assets/images/phone-internals.png';
import ScreenBroken from '../../../../../assets/images/phone-cracked-glass.png';
import ScreenFixed from '../../../../../assets/images/phone-fixed-glass.png';
import { Flex } from '../../../../../components/Flex.styled';
import {
    slideInRight,
    screenLiftOff,
    screenPlaceOn
} from '../../../../../animations/animations';

const HeroPhoneImage = () => {
    return (
        <Flex {...slideInRight} style={{ position: 'relative' }} $alignItems='center' $justifyContent='center' $width='18rem' $height='20rem'>
            <Image style={{ position: 'absolute' }} src={PhoneBase} $height='100%' />
            <Image {...screenLiftOff} style={{ position: 'absolute' }} src={ScreenBroken} $height='100%' />
            <Image {...screenPlaceOn} style={{ position: 'absolute' }} src={ScreenFixed} $height='100%' />
        </Flex>
    );
};

export default HeroPhoneImage;