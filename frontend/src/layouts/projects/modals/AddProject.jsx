import {
    Button, Input,
    Modal,
    ModalBody, ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Spinner,
    Stack,
    Tag,
    Textarea,
    useBreakpointValue, useToast
} from '@chakra-ui/react';
import axios from 'axios';
import React, { useState } from 'react';

function AddProjectModal({ isOpen, onClose }) {
    const toast = useToast();
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        clientName: '',
        startDate: '',
        status: 'On Hold',
        priority: 'Most Important'
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleStatusClick = (status) => {
        setFormData({ ...formData, status });
    };
    
    const handleTagClick = (priority) => {
        setFormData({ ...formData, priority });
    };

    const token = localStorage.getItem("tm_token");
    const axiosInstance = axios.create({
        headers: { Authorization: `Bearer ${token}` },
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const response = await axiosInstance.post('/api/project', formData);
            setFormData({
                title: '', description: '', clientName: '', startDate: '',
                status: 'On Hold', priority: 'Most Important'
            });
            toast({
                title: response.data.message,
                status: 'success',
                position: 'top',
                duration: 5000,
                isClosable: true,
            });
            setLoading(false);
            onClose();
        } catch (error) {
            toast({
                title: error.response?.data?.message || 'Something went wrong!',
                status: 'error',
                position: 'top',
                duration: 5000,
                isClosable: true,
            });
            setLoading(false);
        }
    };

    const modalSize = useBreakpointValue({ base: "full", sm: "md", md: "lg", lg: "xl" });

    return (
        <Modal isOpen={isOpen} onClose={onClose} size={modalSize} closeOnOverlayClick={false} isCentered>
            <ModalOverlay />
            <ModalContent>
                <form onSubmit={handleSubmit}>
                    <ModalHeader>Add Project</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Stack spacing={4}>
                            <Input placeholder='Title' name='title' value={formData.title} onChange={handleChange} required/>
                            <Textarea placeholder='Description' name='description' value={formData.description} onChange={handleChange} required/>
                            <Input placeholder='Client Name' name='clientName' value={formData.clientName} onChange={handleChange} required />
                            <Input placeholder="Start Date" type="date" name='startDate' value={formData.startDate} onChange={handleChange} required />

                            <Stack direction={{ base: "column", md: "row" }}>
                                <p>Status: </p>
                                {['On Hold', 'In Progress', 'Testing', 'Completed'].map((status) => (
                                    <Tag key={status} cursor="pointer"
                                        colorScheme={formData.status === status ? 'blue' : 'gray'}
                                        onClick={() => handleStatusClick(status)}
                                    >
                                        {status}
                                    </Tag>
                                ))}
                            </Stack>

                            <Stack direction={{ base: "column", md: "row" }}>
                                <p>Priority: </p>
                                {['Most Important', 'Important', 'Least Important'].map((priority) => (
                                    <Tag key={priority} cursor="pointer"
                                        colorScheme={formData.priority === priority ? 'red' : 'gray'}
                                        onClick={() => handleTagClick(priority)}
                                    >
                                        {priority}
                                    </Tag>
                                ))}
                            </Stack>
                        </Stack>
                    </ModalBody>
                    <ModalFooter>
                        <Button variant='solid' color="white" bg='darkcyan' mr={3} onClick={onClose}>Close</Button>
                        <Button variant='outline' type='submit'>
                            {loading ? <Spinner color='green' /> : 'Add Project'}
                        </Button>
                    </ModalFooter>
                </form>
            </ModalContent>
        </Modal>
    );
}

export default AddProjectModal;
