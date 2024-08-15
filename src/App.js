import logo from './logo.svg';
import './App.css';
import Home from './Component/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
     <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                {/* <Route path="/add-employee" element={<AddEmployee />} />
                <Route path="/employee/:id" element={<EmployeeDetail />} />
                <Route path="/edit-employee/:id" element={<EmployeeEdit />} /> */}
            </Routes>
        </Router>
    </div>
  );
}

export default App;
