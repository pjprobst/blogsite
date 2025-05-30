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

export default LoginForm;