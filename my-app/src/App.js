import './App.css';
import { useState, useEffect } from 'react';

function LoginForm({ username, password, onUsername, onPassword, onSubmit }) {
  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    width: '200px',
    margin: '0 auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    backgroundColor: '#f9f9f9'
  }

  return (
    <form className="login-form" style={formStyle} onSubmit={onSubmit}>
      <input type="text" placeholder="username" value={username} onChange={(e) => onUsername(e.target.value)}/>
      <input type="password" placeholder="password" value={password} onChange={(e) => onPassword(e.target.value)}/>
      <input type="submit" value="enter" />
    </form>
  );
}
function App() {
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
    console.log('Password:', password);
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

export default App;
