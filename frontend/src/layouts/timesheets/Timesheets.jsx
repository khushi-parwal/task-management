import {
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { FcStatistics } from "react-icons/fc"
import { IoMdAdd } from "react-icons/io"
import totalcomplete from '../../assets/tasks/totalcomplete.png'
import totalpending from '../../assets/tasks/totalpending.png'
import totalprogress from '../../assets/tasks/totalprogress.png'
import totaltasks from '../../assets/tasks/totaltasks.png'
import Navbar from '../../components/navbar/Navbar'
import Sidenav from '../../components/sidenav/Sidenav'
import AddTimesheetModal from './modals/AddTimesheet'
import "./timesheets.css"

function Timesheets() {
  const [isAddTimesheetModalOpen, setIsAddTimesheetModalOpen] = useState(false);
  const [timesheetsData, setTimesheetsData] = useState([]);
  const [timesheetsStats, setTimesheetsStats] = useState({
    totalTimesheets: 0,
    developmentType: 0,
    testType: 0,
    otherType: 0,
  });
  const openAddTimesheetModal = () => {
    setIsAddTimesheetModalOpen(true);
  };

  const closeAddTimesheetModal = () => {
    setIsAddTimesheetModalOpen(false);
  };


  const getTimesheets = async () => {
    try {
      const response = await axios.get('/api/timesheets')
      setTimesheetsData(response.data)
    } catch (error) {
      console.error('Error:', error);
    }
  }
  const getTimesheetsStats = async () => {
    try {
      const response = await axios.get('api/timesheets-stats')
      setTimesheetsStats(response.data)
    } catch (error) {
      console.error('Error:', error);
    }
  }
  useEffect(() => {
    getTimesheets()
    getTimesheetsStats()
  }, [])
  return (
    <>
      <AddTimesheetModal isOpen={isAddTimesheetModalOpen} onClose={closeAddTimesheetModal} />
      <div className='app-main-container'>
        <div className='app-main-left-container'><Sidenav /></div>
        <div className='app-main-right-container'>
          <Navbar />
          <div className='task-status-card-container'>
            <div className='add-task-inner-div'>
              <FcStatistics className='task-stats' />
              <p className='todo-text'>Timesheets Statistics</p>
            </div>
            <div className='stat-first-row'>
              <div className='stats-container container-bg1'>
                <img className='stats-icon' src={totaltasks} alt="totaltasks" />
                <div>
                  {/* <p className='stats-num'>{timesheetsStats.totalTimesheets}</p> */}
                  <p className='stats-num'>2</p>
                  <p className='stats-text'>Total Timesheets</p>
                </div>
              </div>
              <div className='stats-container container-bg4'>
                <img className='stats-icon' src={totalcomplete} alt="totalcomplete" />
                <div>
                  {/* <p className='stats-num'>{timesheetsStats.developmentType}</p> */}
                  <p className='stats-num'>1</p>
                  <p className='stats-text'>Development Type</p>
                </div>
              </div>
            </div>
            <div className='stat-second-row'>
              <div className='stats-container container-bg2'>
                <img className='stats-icon' src={totalpending} alt="totalpending" />
                <div>
                  {/* <p className='stats-num'>{timesheetsStats.testType}</p> */}
                  <p className='stats-num'>1</p>
                  <p className='stats-text'>Testing Type</p>
                </div>
              </div>
              <div className='stats-container container-bg3'>
                <img className='stats-icon' src={totalprogress} alt="totalprogress" />
                <div>
                  {/* <p className='stats-num'>{timesheetsStats.otherType}</p> */}
                  <p className='stats-num'>0</p>
                  <p className='stats-text'>Other Type</p>
                </div>
              </div>
            </div>
          </div>
          <div className='table-main-header'>
            <p className='table-header-text'>Timesheets</p>
            <button className='table-btn' onClick={openAddTimesheetModal}><IoMdAdd />Add Timesheet</button>
          </div>
          <TableContainer className='table-main-container'>

            <Table variant='striped' colorScheme='teal'>
              <Thead>
                <Tr>
                <Th>Task</Th>
                  <Th>Employee</Th>
                  <Th>Project</Th>
                  <Th>Type</Th>
                  <Th>Progress(in %)</Th>
                  <Th>Time Spent(in hrs)</Th>
                  <Th>Deadline</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>Web D project</Td>
                  <Td>Karan verma</Td>
                  <Td>Oberoi's group official website</Td>
                  <Td>Development</Td>
                  <Td>40</Td>
                  <Td>7</Td>
                  <Td>25/02/2025</Td>
                </Tr>
    
                <Tr>
                  <Td>Functional testing</Td>
                  <Td>alice christian</Td>
                  <Td>Zidio official website</Td>
                  <Td>Testing</Td>
                  <Td>70</Td>
                  <Td>12</Td>
                  <Td>28/02/2025</Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
        </div>
      </div>


    </>
  )
}

export default Timesheets