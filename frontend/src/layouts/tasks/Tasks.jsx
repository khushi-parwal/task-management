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

function Tasks() {
  const [isAddTaskModalOpen, setIsAddTaskModalOpen] = useState(false);
  const [isReadTaskModalOpen, setIsReadTaskModalOpen] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  const openAddTaskModal = () => setIsAddTaskModalOpen(true);
  const openReadTaskModal = () => setIsReadTaskModalOpen(true);
  const closeAddTaskModal = () => setIsAddTaskModalOpen(false);
  const closeReadTaskModal = () => setIsReadTaskModalOpen(false);

  useEffect(() => {
    const fetchTasks = async () => {
      const token = localStorage.getItem("tm_token");
      try {
        const response = await axios.get('/api/tasks', {
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


