import LandingPage from './Components/LandingPage.jsx'
import Dashboard from './Components/Dashboard.jsx'
import './App.css';
import Income from './Components/Income.jsx';
import Expense from './Components/Expense.jsx'
import Loginpage from './Components/Loginpage.jsx';
import Signup from './Components/Signup.jsx';

function App() {
  return (
    <div style={{fontFamily:"LuxoraGrotesk-Regular"}}>
      <Signup/>
      <LandingPage/>
      {/* <Loginpage/>
      <Dashboard/>
      <Expense/>
      <Income/> */}
    </div>
    
  );
}

export default App;
