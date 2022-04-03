import { Image } from '../../../../../components/Image.styled';
import PhoneImg from '../../../../../assets/images/phone.png';

const HeroPhoneImage = () => {
    return (
        <Image drag src={PhoneImg} height='20rem' />
    );
};

export default HeroPhoneImage;