import { Section } from '../../components/Section.styled';
import { Flex } from '../../components/Flex.styled';
import { Heading } from '../../components/Heading.styled';
import { useTheme } from 'styled-components';
import { useEffect, useState } from 'react';
import StepButton, { Button } from '../../components/Button.styled';
import { RouterLink } from '../../components/RouterLink.styled';
import UserInfoStep from './steps/UserInfoStep';
import { Text } from '../../components/Text.styled';
import DeviceInfoStep from './steps/DeviceInfoStep';
import ServiceStep from './steps/ServiceStep';

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
        setStepComplete(checkFormCompletion(activeStepName, 'all'));
    }, [data]);

    const handleChange = (dataObj) => {
        setData(prevData => ({ ...prevData, ...dataObj }));
    };

    const steps = [
        {
            name: 'user',
            display: 'User',
            instructions: 'Please enter your information',
            view: <UserInfoStep name='user' onChange={handleChange} />,
            completion: 'all'
        },
        {
            name: 'device',
            display: 'Device',
            instructions: 'Please select your device below',
            view: <DeviceInfoStep name='device' onChange={handleChange} />,
            completion: 'all'
        },
        {
            name: 'service',
            display: 'Service',
            instructions: 'Please select the service(s) you need',
            view: <ServiceStep name='service' onChange={handleChange} />,
            completion: 'one'
        }
    ];

    const getStepFromName = stepName => {
        return steps.filter(step => {
            return step.name === stepName;
        })
    };

    const checkFormCompletion = (stepName, completionMethod) => {
        const stepKeys = data[stepName] ? Object.keys(data[stepName]) : [];
        if (stepKeys.length) {
            let isComplete = false;
            if (completionMethod === 'all') {
                isComplete = stepKeys.every(key => {
                    return data[stepName][key];
                });
            }
            else if (completionMethod === 'one') {
                isComplete = stepKeys.some(key => {
                    return data[stepName][key];
                });
            };
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
                        {steps.map((step, index) => {
                            return (
                                <StepButton
                                    key={step.name}
                                    complete={checkFormCompletion(step.name, step.completion)}
                                    label={step.display}
                                    active={activeStep === index}
                                >
                                    {index + 1}
                                </StepButton>
                            );
                        })}
                    </Flex>
                    <Text fontWeight={600}>{steps[activeStep].instructions}</Text>
                    {steps[activeStep].view}
                    <Flex gap='1rem'>
                        <Button secondary onClick={decrementStep}>Back</Button>
                        <Button primary disabled={!checkFormCompletion(steps[activeStep].name, steps[activeStep].completion)} onClick={incrementStep}>Next</Button>
                    </Flex>
                </Flex>
            </Flex>
        </Section>
    );
};

export default Schedule;