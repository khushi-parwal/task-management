import {
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { IoMdAdd } from "react-icons/io"
import Navbar from '../../components/navbar/Navbar'
import Sidenav from '../../components/sidenav/Sidenav'
import "./employees.css"

import axios from 'axios'
import { FcStatistics } from "react-icons/fc"
import totalcomplete from '../../assets/tasks/totalcomplete.png'
import totalpending from '../../assets/tasks/totalpending.png'
import totalprogress from '../../assets/tasks/totalprogress.png'
import totaltasks from '../../assets/tasks/totaltasks.png'
import AddEmployeeModal from './modals/AddEmployee'
require('dotenv').config();

function Employees() {
  const [isAddEmployeeModalOpen, setIsAddEmployeeModalOpen] = useState(false);
  const [employeesData, setEmployeesData] = useState([]);
  const [employeesStats, setEmployeesStats] = useState({
    totalEmployees: 0,
    activeEmployees: 0,
    inActiveEmployees: 0,
    terminatedEmployees: 0,
  });

  const openAddEmployeeModal = () => {
    setIsAddEmployeeModalOpen(true);
  };

  const closeAddEmployeeModal = () => {
    setIsAddEmployeeModalOpen(false);
  };
  const API_BASE_URL = process.env.REACT_APP_BACKEND_URL;

  const getEmployees = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/api/employees`)
      setEmployeesData(response.data)
    } catch (error) {
      console.error('Error:', error);
    }
  }
  const getEmployeesStats = async () => {
    try {
      const response = await axios.get('api/employees-stats')
      setEmployeesStats(response.data)
    } catch (error) {
      console.error('Error:', error);
    }
  }
  useEffect(() => {
    getEmployees()
    getEmployeesStats()
  }, [])
  return (
    <>
      <AddEmployeeModal isOpen={isAddEmployeeModalOpen} onClose={closeAddEmployeeModal} />
      <div className='app-main-container'>
        <div className='app-main-left-container'><Sidenav /></div>
        <div className='app-main-right-container'>
          <Navbar />
          <div className='task-status-card-container'>
            <div className='add-task-inner-div'>
              <FcStatistics className='task-stats' />
              <p className='todo-text'>Employees Statistics</p>
            </div>
            <div className='stat-first-row'>
              <div className='stats-container container-bg1'>
                <img className='stats-icon' src={totaltasks} alt="totaltasks" />
                <div>
                  <p className='stats-num'>{employeesStats.totalEmployees}</p>
                  <p className='stats-text'>Total Employees</p>
                </div>
              </div>
              <div className='stats-container container-bg4'>
                <img className='stats-icon' src={totalcomplete} alt="totalcomplete" />
                <div>
                  <p className='stats-num'>{employeesStats.activeEmployees}</p>
                  <p className='stats-text'>Active Employees</p>
                </div>
              </div>
            </div>
            <div className='stat-second-row'>
              <div className='stats-container container-bg2'>
                <img className='stats-icon' src={totalpending} alt="totalpending" />
                <div>
                  <p className='stats-num'>{employeesStats.inActiveEmployees}</p>
                  <p className='stats-text'>In Active Employees</p>
                </div>
              </div>
              <div className='stats-container container-bg3'>
                <img className='stats-icon' src={totalprogress} alt="totalprogress" />
                <div>
                  <p className='stats-num'>{employeesStats.terminatedEmployees}</p>
                  <p className='stats-text'>Terminated Employees</p>
                </div>
              </div>
            </div>
          </div>
          <div className='table-main-header'>
            <p className='table-header-text'>Employees</p>
            <button className='table-btn' onClick={openAddEmployeeModal}><IoMdAdd />Add Employee</button>
          </div>
          <TableContainer className='table-main-container'>

            <Table variant='striped' colorScheme='teal'>
              <Thead>
                <Tr>
                  <Th>ID</Th>
                  <Th>Name</Th>
                  <Th>Email</Th>
                  <Th>AADHAR ID</Th>
                  <Th>Role</Th>
                  <Th>Status</Th>
                  <Th>Gender</Th>
                  
                </Tr>
              </Thead>
              <Tbody>
                {employeesData && employeesData.map((employee) => (
                  <Tr key={employee._id}>
                    <Td>{employee.employee_id}</Td>
                    <Td>{`${employee.firstName} ${employee.lastName}`}</Td>
                    <Td>{employee.email}</Td>
                    <Td>{employee.cnic}</Td>
                    <Td>{employee.role}</Td>
                    <Td>{employee.status}</Td>
                    <Td>{employee.gender}</Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </TableContainer>
        </div>
      </div>


    </>
  )
}

export default Employees