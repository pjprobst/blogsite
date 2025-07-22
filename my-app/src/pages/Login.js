import './Login.css';
import { useState, useEffect } from 'react';
import LoginForm from '../components/LoginForm';
function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState('red');
  const [text, setText] = useState('please enter a username and password');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!username || !password) {
      return;
    }
    console.log('Username:', username);
    sessionStorage.setItem('username', username);
    console.log('Password:', password);
    sessionStorage.setItem('password', password);
    window.location.href = '/#/posts';
    window.location.reload();
  };

  useEffect(() => {
    if (username && !password) {
      setMsg('red');
      setText("please enter a password");
    }
    else if (!username && password) {
      setMsg('red');
      setText("please enter a username");
    }
    else if (username && password) {
      setMsg('white');
      setText("please enter a password");
    } 
    else {
      setMsg('red');
      setText("please enter a username and password");
    }
  }, [username, password]);

  return (
    <>
    <div className="App" style={{ textAlign: 'center' }}>
      <header className="header">
        <h1>My Blog</h1>
      </header>
    </div>
      <LoginForm
      username={username}
      password={password}
      onUsername={setUsername}
      onPassword={setPassword}
      onSubmit={handleSubmit} />
      <br />
      <p style={{color: msg, textAlign: 'center'}}>{text}</p>
    </>
  );
}

export default Login;