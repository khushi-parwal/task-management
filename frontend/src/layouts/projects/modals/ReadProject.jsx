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
function ReadProjectModal({ isOpen, onClose }) {

    return (
        <Modal isOpen={isOpen} onClose={onClose} size="xl" closeOnOverlayClick={false} isCentered>
            <ModalOverlay />
            <ModalContent >
                <ModalHeader>Read Project</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <div className='task-card-container'>
                        <p className='task-title'>Attend Nischal’s Birthday
                            Party</p>
                        <div className='task-desc-container'>
                            <p className='task-desc'>Buy gifts on  way and pick up cake frothem the bakery. (6 PM | Fresh Elements).....n  way and pick up cake frothem the bakery. (6 PM | n  way and pick up cake frothem the bakery. (6 PM | n  way and pick up cake frothem the bakery. (6 PM | n  way and pick up cake frothem the bakery. (6 PM | n  way and pick up cake frothem the bakery. (6 PM | n  way and pick up cake frothem the bakery. (6 PM | n  way and pick up cake frothem the bakery. (6 PM | n  way and pick up cake frothem the bakery. (6 PM | n  way and pick up cake frothem the bakery. (6 PM | </p>
                        </div>
                        <div className='task-card-footer-container'>
                            <div>
                                <Tag size='lg' colorScheme='red' borderRadius='full'>
                                    <p className='tag-text'>Most Important</p>
                                </Tag>
                            </div>
                            <div>
                                {/* <div className='task-read'>
                                    <MdDelete  className='read-icon' />
                                </div> */}
                            </div>
                        </div>
                        <p className='created'>Created on: 15/02/2025</p>
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

export default ReadProjectModal;
