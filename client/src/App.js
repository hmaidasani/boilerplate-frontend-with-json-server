import React, { useState, useEffect } from 'react';

const App = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch('http://localhost:8000/posts');
      const json = await response.json();
      setData(json);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  const postData = async () => {
    setLoading(true);
    try {
      const response = await fetch('http://localhost:8000/posts', {
        method: 'POST',
        body: JSON.stringify({ title, author }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8'
        }
      });
      const json = await response.json();
      setData([...data, json]);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
      setTitle('');
      setAuthor('');
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {data && (
        <ul>
          {data.map(item => (
            <li key={item.id}>{item.title} - {item.author}</li>
          ))}
        </ul>
      )}
      <form onSubmit={e => {
        e.preventDefault();
        postData();
      }}>
        <input type="text" value={title} onChange={e => setTitle(e.target.value)} placeholder="Title" />
        <input type="text" value={author} onChange={e => setAuthor(e.target.value)} placeholder="Body" />
        <button type="submit">Post Data</button>
      </form>
    </div>
  );
};

export default App;