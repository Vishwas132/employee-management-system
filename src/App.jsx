import './App.css'
import {Link} from 'react-router-dom';

function App() {
  const employees = ['hello', 'hi'];
  const listitems = employees.map(employee => <li key={employee}>{employee}</li>)

  return (
    <>
      <h1>Employees</h1>
      <ul>{listitems}</ul>
      <div className='link'><Link to={`new-employee`}>New employee</Link></div>
    </>
  )
}

export default App
