import { ToastContainer } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.min.css';

import LoginForm from "./components/loginForm/LoginForm";

import './App.css'

function App() {
  return (
    <div>
      <LoginForm />
      <ToastContainer />
    </div>
  );
}

export default App;
