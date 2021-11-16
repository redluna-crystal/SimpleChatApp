import {ChatEngine} from 'react-chat-engine';
import LoginForm from './components/LoginForm'
import ChatFeed from './components/ChatFeed';
import './App.css';

const App = () => {
  if(!localStorage.getItem('username')) return <LoginForm />

  return (
    <ChatEngine 
      height="100vh"
      projectID = "05d5a7eb-a041-4e03-9eb8-578d4996755d"
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed = {(chatAppProps) => <ChatFeed {...chatAppProps}/>}
      onNewMessages={()=> new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
    />
  );
}

export default App;
