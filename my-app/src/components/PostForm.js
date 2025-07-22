function PostForm({ title, post, onTitle, onPost, onSubmit }) {
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
    <form className="post-form" style={formStyle} onSubmit={onSubmit}>
      <input type="text" placeholder="title" value={title} onChange={(e) => onTitle(e.target.value)}/>
      <input type="text" placeholder="..." value={post} onChange={(e) => onPost(e.target.value)}/>
      <input type="submit" value="enter" />
    </form>
  );
}

export default PostForm;