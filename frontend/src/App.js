import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Login from './layouts/auth/Login.jsx';
import Register from './layouts/auth/Register.jsx';
import Dashboard from './layouts/dashboard/Dashboard.jsx';
import Employees from './layouts/employees/Employees.jsx';
import Projects from './layouts/projects/Projects.jsx';
import Tasks from './layouts/tasks/Tasks.jsx';
import Timesheets from './layouts/timesheets/Timesheets.jsx';


function App() {
  return (
    <>

      <Router>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/admin/dashboard' element={<Dashboard />} />
          <Route path='/admin/employees' element={<Employees />} />
          <Route path='/admin/projects' element={<Projects />} />
          <Route path='/admin/tasks' element={<Tasks />} />
          <Route path='/admin/timesheets' element={<Timesheets />} />
        </Routes>
      </Router>
    </>
  )
}

export default App;