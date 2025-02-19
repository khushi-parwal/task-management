import {
    Button,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Tag,
} from '@chakra-ui/react';
import React from 'react';
import { MdDelete } from "react-icons/md";
function ReadTaskModal({ isOpen, onClose }) {

    return (
        <Modal isOpen={isOpen} onClose={onClose} size="xl" closeOnOverlayClick={false} isCentered>
            <ModalOverlay />
            <ModalContent >
                <ModalHeader>Read Task</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <div className='task-card-container'>
                        <p className='task-title'>Attend Wilsons Group meet
                            Party</p>
                        <div className='task-desc-container'>
                            <p className='task-desc'> Attend the meet scheduled next week with the Wilsons 
                            group and complete the 50% of their current project to show it in the meet.</p> </div>
                        
                        <div className='task-card-footer-container'>
                            <div>
                                <Tag size='lg' colorScheme='red' borderRadius='full'>
                                    <p className='tag-text'>Important</p>
                                </Tag>
                            </div>
                            <div>
                                <div className='task-read'>
                                    <MdDelete  className='read-icon' />
                                </div>
                            </div>
                        </div>
                        <p className='created'>Created on: 19/02/2023</p>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button variant='solid' color="white" bg='darkcyan' mr={3} onClick={onClose}>
                        Close
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
}

export default ReadTaskModal;
