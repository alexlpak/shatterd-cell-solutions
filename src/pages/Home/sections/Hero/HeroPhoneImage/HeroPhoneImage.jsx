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
        <Flex {...slideInRight} style={{ position: 'relative' }} $alignItems='center' $justifyContent='center' $width='16rem' $height='20rem'>
            <Image style={{ position: 'absolute' }} src={PhoneBase} $width='100%' />
            <Image {...screenLiftOff} style={{ position: 'absolute' }} src={ScreenBroken} $width='100%' />
            <Image {...screenPlaceOn} style={{ position: 'absolute' }} src={ScreenFixed} $width='100%' />
        </Flex>
    );
};

export default HeroPhoneImage;