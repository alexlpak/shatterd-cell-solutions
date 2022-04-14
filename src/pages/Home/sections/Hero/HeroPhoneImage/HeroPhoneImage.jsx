import { Image } from '../../../../../components/Image.styled';
import PhoneBase from '../../../../../assets/images/phone-internals.png';
import ScreenBroken from '../../../../../assets/images/phone-cracked-glass.png';
import ScreenFixed from '../../../../../assets/images/phone-fixed-glass.png';
import { Flex } from '../../../../../components/Flex.styled';
import { slideInRight, screenLiftOff, screenPlaceOn } from '../../../../../animations/animations';

const HeroPhoneImage = () => {
    return (
        <Flex {...slideInRight} style={{ position: 'relative' }} $alignItems='center' $justifyContent='center' $height='20rem' $width='20rem'>
            <Image style={{ position: 'absolute', left: 0, top: 0 }} src={PhoneBase} $height='20rem' />
            <Image {...screenLiftOff} style={{ position: 'absolute', left: 0, top: 0 }} src={ScreenBroken} $height='20rem' />
            <Image {...screenPlaceOn} style={{ position: 'absolute', left: 0, top: 0 }} src={ScreenFixed} $height='20rem' />
        </Flex>
    );
};

export default HeroPhoneImage;