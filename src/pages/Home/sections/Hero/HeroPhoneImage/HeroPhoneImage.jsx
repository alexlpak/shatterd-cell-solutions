import { Image } from '../../../../../components/Image.styled';
// import PhoneBase from '../../../../../assets/images/';
import PhoneImg from '../../../../../assets/images/phone.png'
import { Flex } from '../../../../../components/Flex.styled';
import { slideInRight } from '../../../../../animations/animations';

const HeroPhoneImage = () => {
    return (
        <Flex {...slideInRight} $alignItems='center' $justifyContent='center' $height='20rem' $width='20rem'>
            <Image drag src={PhoneImg} $height='20rem' />
        </Flex>
    );
};

export default HeroPhoneImage;