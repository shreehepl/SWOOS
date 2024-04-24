
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginForm from '../../src/login';
import Datagrid from '../datagrid';
import PostDataForm from '../PostDataForm';
import HistoryPage from '../Components/Forms/historyPage';
// import DatePicker from '../start-endDate'
const AppRoutes = () => {
  const handleLogin = (username, password) => {
    // Your login logic here
    console.log('Logging in with:', username, password);
  };
 
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<Datagrid/>} /> */}
        <Route path="/" element={<PostDataForm />} />
        {/* <Route path="/datagrid" element={<Datagrid />} /> */}
        <Route path="/historyPage" element={<HistoryPage />} />
      </Routes>
    </Router>

  );
};
 
export default AppRoutes;