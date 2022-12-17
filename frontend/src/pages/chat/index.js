import styles from './styles.module.css'
import MessagesReceived from './Messages'
import SendMessage from './SendMessage'
import RoomAndUsersColumn from './RoomAndUsers'

const Chat = ({ username, room, socket }) => {
  return (
    <div className={styles.chatContainer}>
      <MessagesReceived socket={socket} />
      <SendMessage socket={socket} username={username} room={room} />
      <RoomAndUsersColumn socket={socket} username={username} room={room} />
    </div>
  )
}

export default Chat
