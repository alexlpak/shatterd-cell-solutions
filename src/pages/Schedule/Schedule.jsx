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
import ScheduleStep from './steps/ScheduleStep';
import useLocalStorage from '../../hooks/useLocalStorage';
import styled from 'styled-components';
import ConfirmationDetails from './components/ConfirmationDetails';
import Modal from '../../components/ConfirmModal';
import { useNavigate } from 'react-router-dom';
import ConfirmationPage from './steps/ConfirmationPage';

const Schedule = () => {
    const navigate = useNavigate();

    const theme = useTheme();
    const [data, setData] = useLocalStorage('schedule-data',{});
    const [activeStep, setActiveStep] = useState(0);
    const [activeStepName, setActiveStepName] = useState('');
    const [confirmModalOpen, setConfirmModalOpen] = useState(false);
    const [confirmationVisible, setConfirmationVisible] = useState(false);

    useEffect(() => {
        console.log(activeStep, steps.length);
        return () => {
            localStorage.clear();
        };
    }, []);

    useEffect(() => {
        setActiveStepName(steps[activeStep].name);
    }, [activeStep]);

    useEffect(() => {
        console.log(activeStepName);
    }, [activeStepName]);

    useEffect(() => {
        console.log(data);
    }, [data]);

    const handleChange = (dataObj) => {
        setData(prevData => ({ ...prevData, ...dataObj }));
    };

    const steps = [
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
        },
        {
            name: 'contact',
            display: 'Contact',
            instructions: 'Please enter your information',
            view: <UserInfoStep name='contact' onChange={handleChange} />,
            completion: 'all'
        },
        {
            name: 'schedule',
            display: 'Schedule',
            instructions: 'Please select a date and time for your appointment',
            view: <ScheduleStep name='schedule' onChange={handleChange} />,
            completion: 'all'
        }
    ];

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
        <>
            {confirmModalOpen && (
                <Modal
                    title='Confirm'
                    message='Please confirm your appointment details.'
                    onCancel={() => setConfirmModalOpen(false)}
                    onSubmit={() => {
                        setConfirmModalOpen(false);
                        setConfirmationVisible(true);
                    }}
                >
                    <ConfirmationDetails data={data} />
                </Modal>
            )}
            {!confirmationVisible && <Section>
                <Flex $flexDirection='column' $alignItems='center' $gap='1rem'>
                    <Heading $color={theme.colors.primary.main} $textAlign='center'>Schedule Appointment</Heading>
                    <Flex $gap='1rem' $flexDirection='column' $alignItems='center'>
                        <Flex $gap='2em'>
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
                        <Text $fontWeight={600}>{steps[activeStep].instructions}</Text>
                        {steps[activeStep].view}
                        <Flex $gap='1rem'>
                            {activeStep === 0 && <RouterLink to='/'><Button $secondary>Cancel</Button></RouterLink>}
                            {activeStep > 0 && <Button $secondary onClick={decrementStep}>Back</Button>}
                            {activeStep >= 0 && activeStep < steps.length-1 && <Button $primary disabled={!checkFormCompletion(steps[activeStep].name, steps[activeStep].completion)} onClick={incrementStep}>Next</Button>}
                            {activeStep === steps.length-1 && <Button $primary disabled={!checkFormCompletion(steps[activeStep].name, steps[activeStep].completion)} onClick={() => setConfirmModalOpen(true)}>Finish</Button>}
                        </Flex>
                    </Flex>
                </Flex>
            </Section>}
            {confirmationVisible && <ConfirmationPage data={data} />}
        </>
    );
};

export default Schedule