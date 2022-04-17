import { Image } from '../../../../../components/Image.styled';
import PhoneBase from '../../../../../assets/images/phone-internals.webp';
import ScreenBroken from '../../../../../assets/images/phone-cracked-glass.webp';
import ScreenFixed from '../../../../../assets/images/phone-fixed-glass.webp';
import { Flex } from '../../../../../components/Flex.styled';
import {
    slideInRight,
    screenLiftOff,
    screenPlaceOn
} from '../../../../../animations/animations';

const HeroPhoneImage = () => {
    return (
        <Flex {...slideInRight} style={{ position: 'relative' }} $alignItems='center' $justifyContent='center' $width='18rem' $height='22rem'>
            <Image alt='smart phone without front screen' style={{ position: 'absolute' }} src={PhoneBase} $height='100%' />
            <Image alt='smart phone broken screen' {...screenLiftOff} style={{ position: 'absolute' }} src={ScreenBroken} $height='100%' />
            <Image alt='smart phone fixed screen' {...screenPlaceOn} style={{ position: 'absolute' }} src={ScreenFixed} $height='100%' />
        </Flex>
    );
};

export default HeroPhoneImage;