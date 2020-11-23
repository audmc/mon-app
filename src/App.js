import logo from './logo.svg';
import './App.css';

function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Kylian',
  lastName: 'Mbappé'
};

const moi = {
  firstName: 'Audrey',
  lastName: 'Masson'
};

const element = (
  <h1>
    Bonjour, {formatName(user)} !
  </h1>
);


function getGreeting(user) {
  
  if (user) {
    return <h1>Bonjour, {formatName(user)} !</h1>;
  }
  return <h1>Bonjour, Belle Inconnue.</h1>;
}

const element1 = <div tabIndex="0"></div>;

function App() {
  return (
    <div className="App">
      <header className="App-header">

        {element}
        {getGreeting()}
        {getGreeting(moi)}
        {element1}
        
      </header>
    </div>
  );
}

export default App;
