// import { CircularProgress, CircularProgressLabel, Tag } from '@chakra-ui/react';
// import React, { useState } from 'react';
// import { FcStatistics } from "react-icons/fc";
// import { IoMdAdd } from "react-icons/io";
// import { IoReaderOutline } from "react-icons/io5";
// import book from '../../assets/tasks/Book.png';
// import pending from '../../assets/tasks/Pending.png';
// import complete from '../../assets/tasks/complete.png';
// import totalcomplete from '../../assets/tasks/totalcomplete.png';
// import totalpending from '../../assets/tasks/totalpending.png';
// import totalprogress from '../../assets/tasks/totalprogress.png';
// import totaltasks from '../../assets/tasks/totaltasks.png';
// import Navbar from '../../components/navbar/Navbar';
// import Sidenav from '../../components/sidenav/Sidenav';
// import AddTaskModal from './modals/AddTask';
// import ReadTaskModal from './modals/ReadTask';
// import "./tasks.css";

// function Tasks() {
//     const [isAddTaskModalOpen, setIsAddTaskModalOpen] = useState(false);
//     const [isReadTaskModalOpen, setIsReadTaskModalOpen] = useState(false);
    
//     const openAddTaskModal = () => {
//         setIsAddTaskModalOpen(true);
//     };
//     const openReadTaskModal = () => {
//         setIsReadTaskModalOpen(true);
//     };

//     const closeAddTaskModal = () => {
//         setIsAddTaskModalOpen(false);
//     };
//     const closeReadTaskModal = () => {
//         setIsReadTaskModalOpen(false);
//     };
    
//     return (
//         <>
//             <AddTaskModal isOpen={isAddTaskModalOpen} onClose={closeAddTaskModal} />
//             <ReadTaskModal isOpen={isReadTaskModalOpen} onClose={closeReadTaskModal} />
//             <div className='app-main-container'>
//                 <div className='app-main-left-container'><Sidenav /></div>
//                 <div className='app-main-right-container'>
//                     <Navbar />
//                     <div className='dashboard-main-container'>
//                         <div className='dashboard-main-left-container'>
//                             <div className='task-status-card-container'>
//                                 <div className='add-task-inner-div'>
//                                     <FcStatistics className='task-stats' />
//                                     <p className='todo-text'>Tasks Statistics</p>
//                                 </div>
//                                 <div className='stat-first-row'>
//                                     <div className='stats-container container-bg1'>
//                                         <img className='stats-icon' src={totaltasks} alt="totaltasks" />
//                                         <div>
//                                             <p className='stats-num'>1200</p>
//                                             <p className='stats-text'>Total Task</p>
//                                         </div>
//                                     </div>
//                                     <div className='stats-container container-bg4'>
//                                         <img className='stats-icon' src={totalcomplete} alt="totalcomplete" />
//                                         <div>
//                                             <p className='stats-num'>1200</p>
//                                             <p className='stats-text'>Completed</p>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <div className='stat-second-row'>
//                                     <div className='stats-container container-bg2'>
//                                         <img className='stats-icon' src={totalprogress} alt="totalprogress" />
//                                         <div>
//                                             <p className='stats-num'>1200</p>
//                                             <p className='stats-text'>In Progress</p>
//                                         </div>
//                                     </div>
//                                     <div className='stats-container container-bg3'>
//                                         <img className='stats-icon' src={totalpending} alt="totalpending" />
//                                         <div>
//                                             <p className='stats-num'>1200</p>
//                                             <p className='stats-text'>Pending</p>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className='add-task-main-container'>
//                                 <div className='add-task-main-div'>
//                                     <div className='add-task-inner-div'>
//                                         <img src={pending} alt="pending" />
//                                         <p className='todo-text'>To-Do Tasks</p>
//                                     </div>
//                                     <button className='table-btn-task' onClick={openAddTaskModal}><IoMdAdd />Add Task</button>
//                                 </div>
//                                 <div className='task-card-container'>
//                                     <p className='task-title'>Attend Nischal’s Birthday
//                                         Party</p>
//                                     <div className='task-desc-container'>
//                                         <p className='task-desc'>Buy gifts on  way and pick up cake frothem the bakery. (6 PM | Fresh Elements).....n  way and pick up cake frothem the bakery. (6 PM | n  way and pick up cake frothem the bakery. (6 PM | n  way and pick up cake frothem the bakery. (6 PM | n  way and pick up cake frothem the bakery. (6 PM | n  way and pick up cake frothem the bakery. (6 PM | n  way and pick up cake frothem the bakery. (6 PM | n  way and pick up cake frothem the bakery. (6 PM | n  way and pick up cake frothem the bakery. (6 PM | n  way and pick up cake frothem the bakery. (6 PM | </p>
//                                     </div>
//                                     <div className='task-card-footer-container'>
//                                         <div>
//                                             <Tag size='lg' colorScheme='red' borderRadius='full'>
//                                                 <p className='tag-text'>Most Important</p>
//                                             </Tag>
//                                         </div>
//                                         <div>
//                                             <div className='task-read' onClick={openReadTaskModal}>
//                                                 <IoReaderOutline className='read-icon' />
//                                             </div>
//                                         </div>
//                                     </div>
//                                     <p className='created'>Created on: 20/06/2023</p>
//                                 </div>
//                                 <div className='task-card-container'>
//                                     <p className='task-title'>Attend Nischal’s Birthday
//                                         Party</p>
//                                     <div className='task-desc-container'>
//                                         <p className='task-desc'>Buy gifts on  way and pick up cake frothem the bakery. (6 PM | Fresh Elements).....n  way and pick up cake frothem the bakery. (6 PM | n  way and pick up cake frothem the bakery. (6 PM | n  way and pick up cake frothem the bakery. (6 PM | n  way and pick up cake frothem the bakery. (6 PM | n  way and pick up cake frothem the bakery. (6 PM | n  way and pick up cake frothem the bakery. (6 PM | n  way and pick up cake frothem the bakery. (6 PM | n  way and pick up cake frothem the bakery. (6 PM | n  way and pick up cake frothem the bakery. (6 PM | </p>
//                                     </div>
//                                     <div className='task-card-footer-container'>
//                                         <div>
//                                             <Tag size='lg' colorScheme='red' borderRadius='full'>
//                                                 <p className='tag-text'>Most Important</p>
//                                             </Tag>
//                                         </div>
//                                         <div>
//                                             <div className='task-read'>
//                                                 <IoReaderOutline className='read-icon' />
//                                             </div>
//                                         </div>
//                                     </div>
//                                     <p className='created'>Created on: 20/06/2023</p>
//                                 </div>
//                             </div>
//                         </div>

//                         <div className='dashboard-main-right-container'>
//                             <div className='task-status-card-container'>
//                                 <div className='add-task-inner-div'>
//                                     <img src={complete} alt="complete" />
//                                     <p className='todo-text'>Tasks Status</p>
//                                 </div>
//                                 <div className='task-status-progress-main-container'>
//                                     <div>
//                                         <CircularProgress value={80} color='#05A301' size={'100px'}>
//                                             <CircularProgressLabel>80%</CircularProgressLabel>
//                                         </CircularProgress>
//                                         <p className='completed'>Completed</p>
//                                     </div>
//                                     <div>
//                                         <CircularProgress value={60} color='#0225FF' size={'100px'}>
//                                             <CircularProgressLabel>60%</CircularProgressLabel>
//                                         </CircularProgress>
//                                         <p className='progress'>In Progress</p>
//                                     </div>
//                                     <div>
//                                         <CircularProgress value={20} color='#F21E1E' size={'100px'}>
//                                             <CircularProgressLabel>20%</CircularProgressLabel>
//                                         </CircularProgress>
//                                         <p className='pending'>Pending</p>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className='add-task-main-container'>
//                                 <div className='add-task-main-div'>
//                                     <div className='add-task-inner-div'>
//                                         <img src={book} alt="Book" />
//                                         <p className='todo-text'>In Progress Tasks</p>
//                                     </div>
//                                 </div>
//                                 <div className='task-card-container'>
//                                     <p className='task-title'>Attend Nischal’s Birthday
//                                         Party</p>
//                                     <div className='task-desc-container'>
//                                         <p className='task-desc'>Buy gifts on  way and pick up cake frothem the bakery. (6 PM | Fresh Elements).....n  way and pick up cake frothem the bakery. (6 PM | n  way and pick up cake frothem the bakery. (6 PM | n  way and pick up cake frothem the bakery. (6 PM | n  way and pick up cake frothem the bakery. (6 PM | n  way and pick up cake frothem the bakery. (6 PM | n  way and pick up cake frothem the bakery. (6 PM | n  way and pick up cake frothem the bakery. (6 PM | n  way and pick up cake frothem the bakery. (6 PM | n  way and pick up cake frothem the bakery. (6 PM | </p>
//                                     </div>
//                                     <div className='task-card-footer-container'>
//                                         <div>
//                                             <Tag size='lg' colorScheme='blue' borderRadius='full'>
//                                                 <p className='tag-text'>In Progress</p>
//                                             </Tag>
//                                         </div>
//                                         <div>
//                                             <div className='task-read'>
//                                                 <IoReaderOutline className='read-icon' />
//                                             </div>
//                                         </div>
//                                         <div>
//                                             <CircularProgress value={40} color='#0225FF'>
//                                                 <CircularProgressLabel>40%</CircularProgressLabel>
//                                             </CircularProgress>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className='add-task-main-container'>
//                                 <div className='add-task-main-div'>
//                                     <div className='add-task-inner-div'>
//                                         <img src={book} alt="Book" />
//                                         <p className='todo-text'>Completed Tasks</p>
//                                     </div>
//                                 </div>
//                                 <div className='task-card-container'>
//                                     <p className='task-title'>Attend Nischal’s Birthday
//                                         Party</p>
//                                     <div className='task-desc-container'>
//                                         <p className='task-desc'>Buy gifts on  way and pick up cake frothem the bakery. (6 PM | Fresh Elements).....n  way and pick up cake frothem the bakery. (6 PM | n  way and pick up cake frothem the bakery. (6 PM | n  way and pick up cake frothem the bakery. (6 PM | n  way and pick up cake frothem the bakery. (6 PM | n  way and pick up cake frothem the bakery. (6 PM | n  way and pick up cake frothem the bakery. (6 PM | n  way and pick up cake frothem the bakery. (6 PM | n  way and pick up cake frothem the bakery. (6 PM | n  way and pick up cake frothem the bakery. (6 PM | </p>
//                                     </div>
//                                     <div className='task-card-footer-container'>
//                                         <div>
//                                             <Tag size='lg' colorScheme='green' borderRadius='full'>
//                                                 <p className='tag-text'>Completed</p>
//                                             </Tag>
//                                         </div>
//                                         <div>
//                                             <div className='task-read'>
//                                                 <IoReaderOutline className='read-icon' />
//                                             </div>
//                                         </div>
//                                     </div>
//                                     <p className='created'>Completed 2 days ago</p>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>


//         </>
//     )
// }

// export default Tasks





import { Tag } from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FcStatistics } from "react-icons/fc";
import { IoMdAdd } from "react-icons/io";
import { IoReaderOutline } from "react-icons/io5";
import Navbar from '../../components/navbar/Navbar';
import Sidenav from '../../components/sidenav/Sidenav';
import AddTaskModal from './modals/AddTask';
import ReadTaskModal from './modals/ReadTask';
import "./tasks.css";
require('dotenv').config();

function Tasks() {
  const [isAddTaskModalOpen, setIsAddTaskModalOpen] = useState(false);
  const [isReadTaskModalOpen, setIsReadTaskModalOpen] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  const openAddTaskModal = () => setIsAddTaskModalOpen(true);
  const openReadTaskModal = () => setIsReadTaskModalOpen(true);
  const closeAddTaskModal = () => setIsAddTaskModalOpen(false);
  const closeReadTaskModal = () => setIsReadTaskModalOpen(false);

  const API_BASE_URL = process.env.REACT_APP_BACKEND_URL;

  useEffect(() => {
    const fetchTasks = async () => {
      const token = localStorage.getItem("tm_token");
      try {
        const response = await axios.get(`${API_BASE_URL}/api/tasks`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        setTasks(response.data);
      } catch (error) {
        console.error('Error fetching tasks:', error.response?.data?.message || error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchTasks();
  }, []);

  return (
    <>
      <AddTaskModal isOpen={isAddTaskModalOpen} onClose={closeAddTaskModal} />
      <ReadTaskModal isOpen={isReadTaskModalOpen} onClose={closeReadTaskModal} />
      <div className='app-main-container'>
        <div className='app-main-left-container'><Sidenav /></div>
        <div className='app-main-right-container'>
          <Navbar />
          <div className='dashboard-main-container'>
            <div className='dashboard-main-left-container'>
              <div className='task-status-card-container'>
                <div className='add-task-inner-div'>
                  <FcStatistics className='task-stats' />
                  <p className='todo-text'>Task Statistics</p>
                </div>
                <div className='stat-first-row'>
                  <div className='stats-container container-bg1'>
                    <p className='stats-num'>{tasks.length}</p>
                    <p className='stats-text'>Total Tasks</p>
                  </div>
                  <div className='stats-container container-bg4'>
                    <p className='stats-num'>{tasks.filter(t => t.status === 'Completed').length}</p>
                    <p className='stats-text'>Completed</p>
                  </div>
                </div>
              </div>

               
                          <div className='add-task-main-container'>
                                <div className='add-task-main-div'>
                                <div className='add-task-inner-div'>
                                         {/* <img src={pending} alt="pending" /> */}
                                         <p className='todo-text'>To-Do Tasks</p>
                                     </div>
                                     <button className='table-btn-task' onClick={openAddTaskModal}><IoMdAdd /> Add Task</button>
                                 </div>
                                 {tasks.map(task => (
                                     <div key={task._id} className='task-card-container'>
                                         <p className='task-title'>{task.title}</p>
                                        <div className='task-desc-container'>
                                             <p className='task-desc'>{task.description}</p>
                                         </div>
                                         <div className='task-card-footer-container'>
                                             <Tag size='lg' colorScheme='red' borderRadius='full'>
                                                 <p className='tag-text'>{task.priority}</p>
                                             </Tag>
                                             <div className='task-read' onClick={openReadTaskModal}>
                                                 <IoReaderOutline className='read-icon' />
                                             </div>
                                         </div>
                                     </div>
                                 ))}
                             </div>
                       </div>


{/* <div className='dashboard-main-right-container'>
  <div className='task-status-card-container'>
    <div className='add-task-inner-div'>
      <p className='todo-text'>Tasks Status</p>
    </div>
    <div className='task-status-progress-main-container'>
      <div>
        <CircularProgress value={tasks.filter(t => t.status === 'Completed').length / tasks.length * 100 || 0} color='#05A301' size={'100px'}>
          <CircularProgressLabel>{Math.round(tasks.filter(t => t.status === 'Completed').length / tasks.length * 100) || 0}%</CircularProgressLabel>
        </CircularProgress>
        <p className='completed'>Completed</p>
      </div>
      <div>
        <CircularProgress value={tasks.filter(t => t.status === 'In Progress').length / tasks.length * 100 || 0} color='#0225FF' size={'100px'}>
          <CircularProgressLabel>{Math.round(tasks.filter(t => t.status === 'In Progress').length / tasks.length * 100) || 0}%</CircularProgressLabel>
        </CircularProgress>
        <p className='progress'>In Progress</p>
      </div>
      <div>
        <CircularProgress value={tasks.filter(t => t.status === 'Pending').length / tasks.length * 100 || 0} color='orange' size={'100px'}>
          <CircularProgressLabel>{Math.round(tasks.filter(t => t.status === 'Pending').length / tasks.length * 100) || 0}%</CircularProgressLabel>
        </CircularProgress>
        <p className='pending'>Pending</p>
      </div>
    </div>
  </div>
</div> */}




          </div>
        </div>
      </div> 
    </>
  );
}

export default Tasks;


