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
//     Select,
//     Spinner,
//     Tag,
//     Textarea,
//     useToast,
// } from '@chakra-ui/react';
// import axios from 'axios';
// import React, { useEffect, useState } from 'react';

// function AddTimesheetModal({ isOpen, onClose }) {
//     const toast = useToast();
//     const [loading, setLoading] = useState(false);
//     const [employeesData, setEmployeesData] = useState([]);
//     const [projectsData, setProjectsData] = useState([]);
//     const [tasksData, setTasksData] = useState([]);
//     const [formData, setFormData] = useState({
//         notes: '',
//         employee: '',
//         project: '',
//         task: '',
//         progress: '',
//         timeSpent: '',
//         createdDate: '',
//         type: 'Development'
//     });

//     const handleChange = (e) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//     };
//     const handleTypeClick = (type) => {
//         setFormData({ ...formData, type });
//     };
//     const token = localStorage.getItem("tm_token");
//     const axiosInstance = axios.create({
//         headers: {
//             Authorization: `Bearer ${token}`
//         },
//     });

//     const getEmployees = async () => {
//         try {
//             const response = await axios.get('api/employees')
//             setEmployeesData(response.data)
//         } catch (error) {
//             console.error('Error:', error);
//         }
//     }
//     const getProjects = async () => {
//         try {
//             const response = await axios.get('api/projects')
//             setProjectsData(response.data)
//         } catch (error) {
//             console.error('Error:', error);
//         }
//     }
//     const getTasks = async () => {
//         try {
//             const response = await axios.get('api/tasks')
//             setTasksData(response.data)
//         } catch (error) {
//             console.error('Error:', error);
//         }
//     }
//     useEffect(() => {
//         getEmployees()
//         getProjects()
//         getTasks()
//     }, [])

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setLoading(true);
//         try {
//             const response = await axiosInstance.post('/api/timesheet', formData);
//             setFormData({
//                 notes: '',
//                 employee: '',
//                 project: '',
//                 task: '',
//                 progress: '',
//                 timeSpent: '',
//                 date: '',
//                 type: 'Development'
//             });
//             let Message = response.data.message
//             toast({
//                 title: Message,
//                 status: 'success',
//                 position: 'top',
//                 duration: 5000,
//                 isClosable: true,
//             });
//             setLoading(false);
//             onClose();
//         } catch (error) {
//             let Error = error.response.data.message
//             toast({
//                 title: Error,
//                 status: 'error',
//                 position: 'top',
//                 duration: 5000,
//                 isClosable: true,
//             });
//             setLoading(false);
//         }
//     };
//     return (
//         <Modal isOpen={isOpen} onClose={onClose} size="xl" closeOnOverlayClick={false} isCentered>
//             <ModalOverlay />
//             <ModalContent >
//                 <form onSubmit={handleSubmit}>
//                     <ModalHeader>Add Timesheet</ModalHeader>
//                     <ModalCloseButton />
//                     <ModalBody>
//                         <Textarea rows={7} mt={3} mb={3} placeholder='Notes' name='notes' value={formData.notes} onChange={handleChange} required />
//                         <Select mt={3} mb={3} placeholder='Employee' name='employee' value={formData.employee} onChange={handleChange} required>
//                             {employeesData.map(employee => (
//                                 <option key={employee._id} value={employee._id}>{`${employee.firstName} ${employee.lastName}`}</option>
//                             ))}
//                         </Select>
                        
//                         <Select mt={3} mb={3} placeholder='Task' name='task' value={formData.task} onChange={handleChange} required>
//                             {tasksData.map(task => (
//                                 <option key={task._id} value={task._id}>{task.title}</option>
//                             ))}<Select mt={3} mb={3} placeholder='Project' name='project' value={formData.project} onChange={handleChange} required>
//                             {projectsData.map(project => (
//                                 <option key={project._id} value={project._id}>{project.title}</option>
//                             ))}
//                         </Select>
//                         </Select>
                        
//                         <Input mt={3} mb={3} placeholder="Progress %" name='progress' type='number' value={formData.progress} onChange={handleChange} required />
//                         <Input mt={3} mb={3} placeholder="Time Spent (hours)" type='number' name='timeSpent' value={formData.timeSpent} onChange={handleChange} required />
//                         <Input mt={3} mb={3} placeholder="Today Date" type="date" name='date' value={formData.date} onChange={handleChange} required />
//                         <div className='priority-container'>
//                             <p>Type: </p>
//                             <Tag
//                                 size='lg'
//                                 cursor={'pointer'}
//                                 colorScheme={formData.type === 'Development' ? 'green' : 'gray'}
//                                 borderRadius='full'
//                                 onClick={() => handleTypeClick('Development')}
//                             >
//                                 <p className='tag-text'>Development</p>
//                             </Tag>
//                             <Tag
//                                 size='lg'
//                                 cursor={'pointer'}
//                                 colorScheme={formData.type === 'Testing' ? 'yellow' : 'gray'}
//                                 borderRadius='full'
//                                 onClick={() => handleTypeClick('Testing')}
//                             >
//                                 <p className='tag-text'>Testing</p>
//                             </Tag>
//                             <Tag
//                                 size='lg'
//                                 cursor={'pointer'}
//                                 colorScheme={formData.type === 'Other' ? 'red' : 'gray'}
//                                 borderRadius='full'
//                                 onClick={() => handleTypeClick('Other')}
//                             >
//                                 <p className='tag-text'>Other</p>
//                             </Tag>
//                         </div>
//                     </ModalBody>
//                     <ModalFooter>
//                         <Button variant='solid' color="white" bg='darkcyan' mr={3} onClick={onClose}>
//                             Close
//                         </Button>
//                         <Button variant='outline' type='submit'>{loading ? <Spinner color='green' /> : 'Add TimeSheet'}</Button>
//                     </ModalFooter>
//                 </form>
//             </ModalContent>
//         </Modal>
//     );
// }

// export default AddTimesheetModal;

// import {
//     Button,
//     Flex,
//     Input,
//     Modal,
//     ModalBody,
//     ModalCloseButton,
//     ModalContent,
//     ModalFooter,
//     ModalHeader,
//     ModalOverlay,
//     Select,
//     Tag,
//     VStack,
//     useToast
// } from '@chakra-ui/react';
// import axios from 'axios';
// import React, { useEffect, useState } from 'react';

// function AddTimesheetModal({ isOpen, onClose }) {
//     const toast = useToast();
//     const [loading, setLoading] = useState(false);
//     const [employeesData, setEmployeesData] = useState([]);
//     const [projectsData, setProjectsData] = useState([]);
//     const [tasksData, setTasksData] = useState([]);
//     const [formData, setFormData] = useState({
//         notes: '',
//         employee: '',
//         project: '',
//         task: '',
//         progress: '',
//         timeSpent: '',
//         createdDate: '',
//         type: 'Development'
//     });

//     const handleChange = (e) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//     };
//     const handleTypeClick = (type) => {
//         setFormData({ ...formData, type });
//     };
    
//     const token = localStorage.getItem("tm_token");
//     const axiosInstance = axios.create({
//         headers: { Authorization: `Bearer ${token}` },
//     });

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const [employeesRes, projectsRes, tasksRes] = await Promise.all([
//                     axiosInstance.get('/api/employees'),
//                     axiosInstance.get('/api/projects'),
//                     axiosInstance.get('/api/tasks'),
//                 ]);
//                 setEmployeesData(employeesRes.data);
//                 setProjectsData(projectsRes.data);
//                 setTasksData(tasksRes.data);
//             } catch (error) {
//                 console.error('Error fetching data:', error);
//             }
//         };
//         fetchData();
//     }, []);

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setLoading(true);
//         try {
//             await axiosInstance.post('/api/timesheet', formData);
//             toast({
//                 title: "Timesheet added successfully!",
//                 status: 'success',
//                 position: 'top',
//                 duration: 5000,
//                 isClosable: true,
//             });
//             setFormData({
//                 notes: '',
//                 employee: '',
//                 project: '',
//                 task: '',
//                 progress: '',
//                 timeSpent: '',
//                 createdDate: '',
//                 type: 'Development'
//             });
//             onClose();
//         } catch (error) {
//             toast({
//                 title: error.response?.data?.message || "Error adding timesheet!",
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
//         <Modal isOpen={isOpen} onClose={onClose} size={{ base: "full", md: "xl" }} closeOnOverlayClick={false} isCentered>
//             <ModalOverlay />
//             <ModalContent>
//                 <form onSubmit={handleSubmit}>
//                     <ModalHeader>Add Timesheet</ModalHeader>
//                     <ModalCloseButton />
//                     <ModalBody>
//                         <VStack spacing={3}>
                    
//                             <Select placeholder='Employee' name='employee' value={formData.employee} onChange={handleChange} required>
//                                 {employeesData.map(emp => (
//                                     <option key={emp._id} value={emp._id}>{emp.firstName} {emp.lastName}</option>
//                                 ))}
//                             </Select>
//                             <Select placeholder='Project' name='project' value={formData.project} onChange={handleChange} required>
//                                 {projectsData.map(proj => (
//                                     <option key={proj._id} value={proj._id}>{proj.title}</option>
//                                 ))}
//                             </Select>
//                             <Select placeholder='Task' name='task' value={formData.task} onChange={handleChange} required>
//                                 {tasksData.map(task => (
//                                     <option key={task._id} value={task._id}>{task.title}</option>
//                                 ))}
//                             </Select>
//                             <Input placeholder="Progress %" name='progress' type='number' value={formData.progress} onChange={handleChange} required />
//                             <Input placeholder="Time Spent (hours)" type='number' name='timeSpent' value={formData.timeSpent} onChange={handleChange} required />
//                             <Input placeholder="Today Date" type="date" name='createdDate' value={formData.createdDate} onChange={handleChange} required />
//                             <Flex wrap='wrap' justify='center' gap={2}>
//                                 {['Development', 'Testing', 'Other'].map(type => (
//                                     <Tag key={type} size='lg' cursor='pointer' colorScheme={formData.type === type ? 'blue' : 'gray'} borderRadius='full' onClick={() => handleTypeClick(type)}>
//                                         {type}
//                                     </Tag>
//                                 ))}
//                             </Flex>
//                         </VStack>
//                     </ModalBody>
//                     <ModalFooter>
//                         <Button colorScheme='red' mr={3} onClick={onClose}>Close</Button>
//                         <Button colorScheme='blue' type='submit'>Add Timesheet</Button>
//                     </ModalFooter>
//                 </form>
//             </ModalContent>
//         </Modal>
//     );
// }

// export default AddTimesheetModal;


import {
    Button,
    Flex,
    Input,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Select,
    Tag,
    VStack,
    useToast
} from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

function AddTimesheetModal({ isOpen, onClose }) {
    const toast = useToast();
    const [loading, setLoading] = useState(false);
    const [employeesData, setEmployeesData] = useState([]);
    const [projectsData, setProjectsData] = useState([]);
    const [tasksData, setTasksData] = useState([]);
    const [formData, setFormData] = useState({
        notes: '',
        employee: '',
        project: '',
        task: '',
        progress: '',
        timeSpent: '',
        createdDate: '',
        type: 'Development'
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const handleTypeClick = (type) => {
        setFormData({ ...formData, type });
    };
    
    const token = localStorage.getItem("tm_token");
    const axiosInstance = axios.create({
        headers: { Authorization: `Bearer ${token}` },
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [employeesRes, projectsRes, tasksRes] = await Promise.all([
                    axiosInstance.get('/api/employees'),
                    axiosInstance.get('/api/projects'),
                    axiosInstance.get('/api/tasks'),
                ]);
                setEmployeesData(employeesRes.data);
                setProjectsData(projectsRes.data);
                setTasksData(tasksRes.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            await axiosInstance.post('/api/timesheet', formData);
            toast({
                title: "Timesheet added successfully!",
                status: 'success',
                position: 'top',
                duration: 5000,
                isClosable: true,
            });
            setFormData({
                notes: '',
                employee: '',
                project: '',
                task: '',
                progress: '',
                timeSpent: '',
                createdDate: '',
                type: 'Development'
            });
            onClose();
        } catch (error) {
            toast({
                title: error.response?.data?.message || "Error adding timesheet!",
                status: 'error',
                position: 'top',
                duration: 5000,
                isClosable: true,
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose} size={{ base: "full", md: "xl" }} closeOnOverlayClick={false} isCentered>
            <ModalOverlay />
            <ModalContent>
                <form onSubmit={handleSubmit}>
                    <ModalHeader>Add Timesheet</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <VStack spacing={3}>
                            
                            <Select placeholder='Employee' name='employee' value={formData.employee} onChange={handleChange} required>
                                {employeesData.map(emp => (
                                    <option key={emp._id} value={emp._id}>{emp.firstName} {emp.lastName}</option>
                                ))}
                            </Select>
                            <Select placeholder='Project' name='project' value={formData.project} onChange={handleChange} required>
                                {projectsData.map(proj => (
                                    <option key={proj._id} value={proj._id}>{proj.title}</option>
                                ))}
                            </Select>
                            <Select placeholder='Task' name='task' value={formData.task} onChange={handleChange} required>
                                {tasksData.map(task => (
                                    <option key={task._id} value={task._id}>{task.title}</option>
                                ))}
                            </Select>
                            <Input placeholder="Progress %" name='progress' type='number' value={formData.progress} onChange={handleChange} required />
                            <Input placeholder="Time Spent (hours)" type='number' name='timeSpent' value={formData.timeSpent} onChange={handleChange} required />
                            <Input placeholder="Today Date" type="date" name='createdDate' value={formData.createdDate} onChange={handleChange} required />
                            <Flex wrap='wrap' justify='center' gap={2}>
                                {['Development', 'Testing', 'Other'].map(type => (
                                    <Tag key={type} size='lg' cursor='pointer' colorScheme={formData.type === type ? 'blue' : 'gray'} borderRadius='full' onClick={() => handleTypeClick(type)}>
                                        {type}
                                    </Tag>
                                ))}
                            </Flex>
                        </VStack>
                    </ModalBody>
                    <ModalFooter>
                        <Button colorScheme='red' mr={3} onClick={onClose}>Close</Button>
                        <Button colorScheme='blue' type='submit' isLoading={loading}>Add Timesheet</Button>
                    </ModalFooter>
                </form>
            </ModalContent>
        </Modal>
    );
}

export default AddTimesheetModal;



