import { Section } from '../../components/Section.styled';
import { Flex } from '../../components/Flex.styled';
import { Heading } from '../../components/Heading.styled';
import { useTheme } from 'styled-components';
import { useEffect, useState } from 'react';
import { Button } from '../../components/Button.styled';
import { RouterLink } from '../../components/RouterLink.styled';
import UserInfoStep from './steps/UserInfoStep';
import { Text } from '../../components/Text.styled';
import DeviceInfoStep from './steps/DeviceInfoStep';

const Schedule = () => {
    const theme = useTheme();
    const [data, setData] = useState({});
    const [activeStep, setActiveStep] = useState(0);
    const [activeStepName, setActiveStepName] = useState('');
    const [stepComplete, setStepComplete] = useState(false);

    useEffect(() => {
        setActiveStepName(steps[activeStep].name);
    }, [activeStep]);

    useEffect(() => {
        console.log(activeStepName);
    }, [activeStepName]);

    useEffect(() => {
        console.log(data);
        setStepComplete(checkFormCompletion(activeStepName));
    }, [data]);

    const handleChange = (dataObj) => {
        setData(prevData => ({ ...prevData, ...dataObj }));
    };

    const steps = [
        {
            name: 'userInfo',
            display: 'User Info',
            view: <UserInfoStep name='userInfo' onChange={handleChange} />
        },
        {
            name: 'deviceInfo',
            display: 'Device Info',
            view: <DeviceInfoStep name='deviceInfo' onChange={handleChange} />
        }
    ];

    const checkFormCompletion = (stepName) => {
        const stepKeys = data[stepName] ? Object.keys(data[stepName]) : [];
        if (stepKeys.length) {
            const isComplete = stepKeys.every(key => {
                return data[stepName][key];
            });
            return isComplete;
        };
        return false;
    };

    const decrementStep = () => setActiveStep(prevStep => prevStep > 0 ? prevStep - 1 : prevStep);
    const incrementStep = () => setActiveStep(prevStep => prevStep < steps.length-1 ? prevStep + 1 : prevStep);

    return (
        <Section>
            <Flex flexDirection='column' alignItems='center' gap='1rem'>
                <Heading color={theme.colors.primary.main} textAlign='center'>Schedule Appointment</Heading>
                <Flex gap='1rem' flexDirection='column' alignItems='center'>
                    <Flex gap='1rem'>
                        {steps.map(step => {
                            return <Button key={step.name} primary={checkFormCompletion(step.name)}>{step.display}</Button>
                        })}
                    </Flex>
                    <Text>Active Step: {steps[activeStep].display}</Text>
                    <Text>Step Complete: {`${stepComplete}`}</Text>
                    {steps[activeStep].view}
                    <Flex gap='1rem'>
                        <Button secondary onClick={decrementStep}>Back</Button>
                        <Button primary disabled={!stepComplete} onClick={incrementStep}>Next</Button>
                    </Flex>
                </Flex>
            </Flex>
        </Section>
    );
};

export default Schedule;