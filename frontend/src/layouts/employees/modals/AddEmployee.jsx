import {
    Button,
    Input,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Spinner,
    Tag,
    useToast,
} from '@chakra-ui/react';
import axios from 'axios';
import React, { useState } from 'react';

function AddEmployeeModal({ isOpen, onClose }) {
    const toast = useToast();
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        employee_id: '1',
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        residentialAddress: '',
        cnic: '',
        role: '',
        dateOfBirth: '',
        startDate: '',
        status: 'Active',
        gender: 'Male'
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleStatusClick = (status) => {
        setFormData({ ...formData, status });
    };

    const handleGenderClick = (gender) => {
        setFormData({ ...formData, gender });
    };
    const token = localStorage.getItem("tm_token");
    const axiosInstance = axios.create({
        headers: {
            Authorization: `Bearer ${token}`
        },
    });
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const response = await axiosInstance.post('/api/employee', formData);
            setFormData({
                employee_id: '1',
                firstName: '',
                lastName: '',
                email: '',
                phone: '',
                residentialAddress: '',
                cnic: '',
                role: '',
                dateOfBirth: '',
                startDate: '',
                status: 'Active',
                gender: 'Male'
            });
            let Message = response.data.message
            toast({
                title: Message,
                status: 'success',
                position: 'top',
                duration: 5000,
                isClosable: true,
            });
            setLoading(false);
            onClose();
        } catch (error) {
            let Error = error.response.data.message
            toast({
                title: Error,
                status: 'error',
                position: 'top',
                duration: 5000,
                isClosable: true,
            });
            setLoading(false);
        }
    };
    return (
        <Modal isOpen={isOpen} onClose={onClose} size="xl" closeOnOverlayClick={false} isCentered>
            <ModalOverlay />
            <ModalContent >
                <form onSubmit={handleSubmit}>
                    <ModalHeader>Add Employee</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Input mt={3} mb={3} type='hidden' name='employee_id' value={formData.employee_id} />
                        <Input mt={3} mb={3} type='text' required placeholder='First Name' name='firstName' value={formData.firstName} onChange={handleChange} />
                        <Input mt={3} mb={3} type='text' required placeholder='Last Name' name='lastName' value={formData.lastName} onChange={handleChange} />
                        <Input mt={3} mb={3} type='email' required placeholder='Email' name='email' value={formData.email} onChange={handleChange} />
                        <Input mt={3} mb={3} type='number' required placeholder='Phone' name='phone' value={formData.phone} onChange={handleChange} />
                        <Input mt={3} mb={3} type='text' required placeholder='Residential Address' name='residentialAddress' value={formData.residentialAddress} onChange={handleChange} />
                        <Input mt={3} mb={3} type='text' required placeholder='Aadhar ID' name='cnic' value={formData.cnic} onChange={handleChange} />
                        <Input mt={3} mb={3} type='text' required placeholder='Role' name='role' value={formData.role} onChange={handleChange} />
                        <Input mt={3} mb={3} required placeholder="Date Of Birth" type="date" 
                        name='dateOfBirth' value={formData.dateOfBirth} onChange={handleChange} />
                        <Input mt={3} mb={3} required placeholder="Start Date" type="date" name='startDate' value={formData.startDate} onChange={handleChange} />
                        <div className='priority-container'>
                            <p>Status: </p>
                            <Tag
                                size='lg'
                                cursor={'pointer'}
                                colorScheme={formData.status === 'Active' ? 'green' : 'gray'}
                                borderRadius='full'
                                onClick={() => handleStatusClick('Active')}
                            >
                                <p className='tag-text'>Active</p>
                            </Tag>
                            <Tag
                                size='lg'
                                cursor={'pointer'}
                                colorScheme={formData.status === 'In Active' ? 'yellow' : 'gray'}
                                borderRadius='full'
                                onClick={() => handleStatusClick('In Active')}
                            >
                                <p className='tag-text'>In Active</p>
                            </Tag>
                            <Tag
                                size='lg'
                                cursor={'pointer'}
                                colorScheme={formData.status === 'Terminated' ? 'red' : 'gray'}
                                borderRadius='full'
                                onClick={() => handleStatusClick('Terminated')}
                            >
                                <p className='tag-text'>Terminated</p>
                            </Tag>
                        </div>
                        <div className='priority-container'>
                            <p>Gender: </p>
                            <Tag
                                size='lg'
                                cursor={'pointer'}
                                colorScheme={formData.gender === 'Male' ? 'green' : 'gray'}
                                borderRadius='full'
                                onClick={() => handleGenderClick('Male')}
                            >
                                <p className='tag-text'>Male</p>
                            </Tag>
                            <Tag
                                size='lg'
                                cursor={'pointer'}
                                colorScheme={formData.gender === 'Female' ? 'yellow' : 'gray'}
                                borderRadius='full'
                                onClick={() => handleGenderClick('Female')}
                            >
                                <p className='tag-text'>Female</p>
                            </Tag>
                        </div>
                    </ModalBody>
                    <ModalFooter>
                        <Button variant='solid' color="white" bg='darkcyan' mr={3} onClick={onClose}>
                            Close
                        </Button>
                        <Button variant='outline' type="submit">{loading ? <Spinner color='green' /> : 'Add Employee'}</Button>
                    </ModalFooter>
                </form>
            </ModalContent>
        </Modal>
    );
}

export default AddEmployeeModal;

// import {
//     Button,
//     Input,
//     Modal,
//     ModalBody,
//     ModalCloseButton,
//     ModalContent,
//     ModalFooter,
//     ModalHeader,
//     ModalOverlay,
//     Spinner,
//     Tag,
//     useToast,
// } from '@chakra-ui/react';
// import axios from 'axios';
// import React, { useState } from 'react';

// function AddEmployeeModal({ isOpen, onClose }) {
//     const toast = useToast();
//     const [loading, setLoading] = useState(false);
//     const [formData, setFormData] = useState({
//         firstName: '',
//         lastName: '',
//         email: '',
//         phone: '',
//         residentialAddress: '',
//         cnic: '',
//         role: '',
        
//         startDate: '',
//         status: 'Active',
//         gender: 'Male'
//     });

//     const handleChange = (e) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//     };

//     const handleStatusClick = (status) => {
//         setFormData({ ...formData, status });
//     };

//     const handleGenderClick = (gender) => {
//         setFormData({ ...formData, gender });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setLoading(true);
//         const token = localStorage.getItem("tm_token");
        
//         try {
//             const axiosInstance = axios.create({
//                 headers: {
//                     Authorization: `Bearer ${token}`
//                 },
//             });

//             const response = await axiosInstance.post('/api/employee', formData);

//             // Reset form
//             setFormData({
//                 firstName: '',
//                 lastName: '',
//                 email: '',
//                 phone: '',
//                 residentialAddress: '',
//                 cnic: '',
//                 role: '',
//                 startDate: '',
//                 status: 'Active',
//                 gender: 'Male'
//             });

//             // Success Toast
//             toast({
//                 title: response.data.message || 'Employee added successfully!',
//                 status: 'success',
//                 position: 'top',
//                 duration: 5000,
//                 isClosable: true,
//             });

//             onClose();
//         } catch (error) {
//             console.error("Error adding employee:", error);

//             let errorMessage = 'Something went wrong. Please try again.';
//             if (error.response && error.response.data) {
//                 errorMessage = typeof error.response.data.message === 'string' 
//                     ? error.response.data.message 
//                     : JSON.stringify(error.response.data);
//             }

//             // Error Toast
//             toast({
//                 title: errorMessage,
//                 status: 'error',
//                 position: 'top',
//                 duration: 5000,
//                 isClosable: true,
//             });
//         } finally {
//             setLoading(false);
//         }
//     };

//     return (
//         <Modal isOpen={isOpen} onClose={onClose} size="xl" closeOnOverlayClick={false} isCentered>
//             <ModalOverlay />
//             <ModalContent>
//                 <form onSubmit={handleSubmit}>
//                     <ModalHeader>Add Employee</ModalHeader>
//                     <ModalCloseButton />
//                     <ModalBody>
//                         <Input mt={3} mb={3} type='text' required placeholder='First Name' name='firstName' value={formData.firstName} onChange={handleChange} />
//                         <Input mt={3} mb={3} type='text' required placeholder='Last Name' name='lastName' value={formData.lastName} onChange={handleChange} />
//                         <Input mt={3} mb={3} type='email' required placeholder='Email' name='email' value={formData.email} onChange={handleChange} />
//                         <Input mt={3} mb={3} type='number' required placeholder='Phone' name='phone' value={formData.phone} onChange={handleChange} />
//                         <Input mt={3} mb={3} type='text' required placeholder='Residential Address' name='residentialAddress' value={formData.residentialAddress} onChange={handleChange} />
//                         <Input mt={3} mb={3} type='text' required placeholder='Aadhar ID' name='cnic' value={formData.cnic} onChange={handleChange} />
//                         <Input mt={3} mb={3} type='text' required placeholder='Role' name='role' value={formData.role} onChange={handleChange} />
//                         <Input mt={3} mb={3} required placeholder="Start Date" type="date" name='startDate' value={formData.startDate} onChange={handleChange} />

//                         {/* Status Selection */}
//                         <div className='priority-container'>
//                             <p>Status: </p>
//                             {['Active', 'In Active', 'Terminated'].map(status => (
//                                 <Tag
//                                     key={status}
//                                     size='lg'
//                                     cursor='pointer'
//                                     colorScheme={formData.status === status ? (status === 'Active' ? 'green' : status === 'In Active' ? 'yellow' : 'red') : 'gray'}
//                                     borderRadius='full'
//                                     onClick={() => handleStatusClick(status)}
//                                 >
//                                     <p className='tag-text'>{status}</p>
//                                 </Tag>
//                             ))}
//                         </div>

//                         {/* Gender Selection */}
//                         <div className='priority-container'>
//                             <p>Gender: </p>
//                             {['Male', 'Female'].map(gender => (
//                                 <Tag
//                                     key={gender}
//                                     size='lg'
//                                     cursor='pointer'
//                                     colorScheme={formData.gender === gender ? (gender === 'Male' ? 'green' : 'yellow') : 'gray'}
//                                     borderRadius='full'
//                                     onClick={() => handleGenderClick(gender)}
//                                 >
//                                     <p className='tag-text'>{gender}</p>
//                                 </Tag>
//                             ))}
//                         </div>
//                     </ModalBody>
//                     <ModalFooter>
//                         <Button variant='solid' color="white" bg='darkcyan' mr={3} onClick={onClose}>
//                             Close
//                         </Button>
//                         <Button variant='outline' type="submit">
//                             {loading ? <Spinner color='green' /> : 'Add Employee'}
//                         </Button>
//                     </ModalFooter>
//                 </form>
//             </ModalContent>
//         </Modal>
//     );
// }

// export default AddEmployeeModal;

