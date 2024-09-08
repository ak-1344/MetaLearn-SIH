import Login from './Pages/Student/Login';
import SignUp from './Pages/Student/Signup';

export default function Home() {
  return (
    <div className='overflow-hidden'>
      <Login className='Login'/>
      <SignUp className='SignUp'/>
    </div>
  );
}
