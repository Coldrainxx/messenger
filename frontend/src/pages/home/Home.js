import { useNavigate } from 'react-router-dom'
import styles from './Home.module.css'

const Home = ({ username, setUsername, room, setRoom, socket }) => {
  
    const navigate = useNavigate()
    const joinRoom = () => {
    if (room !== '' && username !== '') {
      socket.emit('join_room', { username, room })
    }
    navigate('/chat', { replace: true })
  }

  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <h1>Chat Rooms</h1>
        <input
          placeholder="Username..."
          className={styles.input}
          onChange={(e) => setUsername(e.target.value)}
        />

        <select
          className={styles.input}
          onChange={(e) => setRoom(e.target.value)}
        >
          <option>-- Select Room --</option>
          <option value="anime">Anime</option>
          <option value="games">Games</option>
          <option value="just-talk">Just Talk</option>
          <option value="films">Films</option>
        </select>

        <button className="btn btn-secondary" style={{ width: '100%' }} onClick={joinRoom}>
          Join Room
        </button>
      </div>
    </div>
  )
}

export default Home
