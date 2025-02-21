import { CircularProgress, CircularProgressLabel, Tag } from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FcStatistics } from "react-icons/fc";
import { IoMdAdd } from "react-icons/io";
import Navbar from '../../components/navbar/Navbar';
import Sidenav from '../../components/sidenav/Sidenav';
import AddProjectModal from './modals/AddProject';
import ReadProjectModal from './modals/ReadProject';
import "./projects.css";
require('dotenv').config();

function Projects() {
  const [isAddProjectModalOpen, setIsAddProjectModalOpen] = useState(false);
  const [isReadProjectModalOpen, setIsReadProjectModalOpen] = useState(false);
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  const openAddProjectModal = () => setIsAddProjectModalOpen(true);
  const openReadProjectModal = () => setIsReadProjectModalOpen(true);
  const closeAddProjectModal = () => setIsAddProjectModalOpen(false);
  const closeReadProjectModal = () => setIsReadProjectModalOpen(false);

  const API_BASE_URL = process.env.REACT_APP_BACKEND_URL;
  // Fetch projects from the backend
  useEffect(() => {
    const fetchProjects = async () => {
      const token = localStorage.getItem("tm_token"); // Assuming token is stored in localStorage
      try {
        const response = await axios.get(`${API_BASE_URL}/api/projects`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        setProjects(response.data);
      } catch (error) {
        console.error('Error fetching projects:', error.response?.data?.message || error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return (
    <>
      <AddProjectModal isOpen={isAddProjectModalOpen} onClose={closeAddProjectModal} />
      <ReadProjectModal isOpen={isReadProjectModalOpen} onClose={closeReadProjectModal} />
      <div className='app-main-container'>
        <div className='app-main-left-container'><Sidenav /></div>
        <div className='app-main-right-container'>
          <Navbar />
          <div className='dashboard-main-container'>
            <div className='dashboard-main-left-container'>
              <div className='task-status-card-container'>
                <div className='add-task-inner-div'>
                  <FcStatistics className='task-stats' />
                  <p className='todo-text'>Projects Statistics</p>
                </div>
                <div className='stat-first-row'>
                  <div className='stats-container container-bg1'>
                    <p className='stats-num'>{projects.length}</p>
                    <p className='stats-text'>Total Projects</p>
                  </div>
                  <div className='stats-container container-bg4'>
                    <p className='stats-num'>{projects.filter(p => p.status === 'Completed').length}</p>
                    <p className='stats-text'>Completed</p>
                  </div>
                </div>
                <div className='stat-second-row'>
                  <div className='stats-container container-bg2'>
                    <p className='stats-num'>{projects.filter(p => p.status === 'In Progress').length}</p>
                    <p className='stats-text'>In Progress</p>
                  </div>
                  <div className='stats-container container-bg3'>
                    <p className='stats-num'>{projects.filter(p => p.status === 'Pending').length}</p>
                    <p className='stats-text'>Pending</p>
                  </div>
                </div>
              </div>

              <div className='add-task-main-container'>
                <div className='add-task-main-div'>
                  <div className='add-task-inner-div'>
                    <p className='todo-text'>To-Do Projects</p>
                  </div>
                  <button className='table-btn-task' onClick={openAddProjectModal}>
                    <IoMdAdd />Add Project
                  </button>
                </div>

                {loading ? (
                  <p>Loading projects...</p>
                ) : projects.length === 0 ? (
                  <p>No projects available.</p>
                ) : (
                  projects.map(project => (
                    <div key={project._id} className='task-card-container'>
                      <p className='task-title'>{project.title}</p>
                      <div className='task-desc-container'>
                        <p className='task-desc'>{project.description}</p>
                      </div>
                      <div className='task-card-footer-container'>
                        <Tag size='lg' colorScheme={project.status === 'Completed' ? 'green' : project.status === 'In Progress' ? 'blue' : 'red'} borderRadius='full'>
                          <p className='tag-text'>{project.status}</p>
                        </Tag>
                        {/* <div className='task-read' onClick={openReadProjectModal}>
                          <IoReaderOutline className='read-icon' />
                        </div> */}
                        <div>
                          <CircularProgress value={project.status === 'Completed' ? 100 : project.status === 'In Progress' ? 50 : 20} color='#0225FF'>
                            <CircularProgressLabel>{project.status === 'Completed' ? '100%' : project.status === 'In Progress' ? '50%' : '20%'}</CircularProgressLabel>
                          </CircularProgress>
                        </div>
                      </div>
                      <p className='created'>Created on: {new Date(project.startDate).toLocaleDateString()}</p>
                    </div>
                  ))
                )}
              </div>
            </div>

            <div className='dashboard-main-right-container'>
              <div className='task-status-card-container'>
                <div className='add-task-inner-div'>
                  <p className='todo-text'>Projects Status</p>
                </div>
                <div className='task-status-progress-main-container'>
                  <div>
                    <CircularProgress value={projects.filter(p => p.status === 'Completed').length / projects.length * 100 || 0} color='#05A301' size={'100px'}>
                      <CircularProgressLabel>{Math.round(projects.filter(p => p.status === 'Completed').length / projects.length * 100) || 0}%</CircularProgressLabel>
                    </CircularProgress>
                    <p className='completed'>Completed</p>
                  </div>
                  <div>
                    <CircularProgress value={projects.filter(p => p.status === 'In Progress').length / projects.length * 100 || 0} color='#0225FF' size={'100px'}>
                      <CircularProgressLabel>{Math.round(projects.filter(p => p.status === 'In Progress').length / projects.length * 100) || 0}%</CircularProgressLabel>
                    </CircularProgress>
                    <p className='progress'>In Progress</p>
                  </div>
                  <div>
                    <CircularProgress value={projects.filter(p => p.status === 'Pending').length / projects.length * 100 || 0} color='orange' size={'100px'}>
                      <CircularProgressLabel>{Math.round(projects.filter(p => p.status === 'Pending').length / projects.length * 100) || 0}%</CircularProgressLabel>
                    </CircularProgress>
                    <p className='pending'>Pending</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> 
    </>
  );
}

export default Projects;
