
import { Container, Row, Col, Nav

} from 'react-bootstrap';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Barre de navigation */}



      <header className="nav">
        
        <img src="orion.png" className="logo-orion" alt="orion 2"></img>

        <ul className="menu-nav">
          <li><a className="active">A propos</a></li>
          <li><a>Nos services</a></li>
          <li><a>Contacts</a></li>
        </ul>
        
        <ul className="rs-nav">
          <li><img src="facebook2.png" className="fbk" alt="Facebook"/></li>
          <li><img src="instagram2.png" alt="Instagram"/></li>
          <li><img src="twitter2.png" alt="Twitter"/></li>
        </ul>
      </header>

      {/* Corps de la page */}
      <Container>
        <div className="d-flex justify-content-center">
          <div style={{width:'500px'}}>
          <h1>LOCALISATION</h1>
      <p>Total Logbaba Face Hôpital des Soeurs Jean Paul II, Douala</p>
      <img src="call icon2.png" alt="Call" width="4%" height="4%"></img>
      <p>+237 697 821 880</p>
      <form>
          <input type="text" id="fname" name="fname" value="Nom"></input>
          <input type="text" id="lname" name="lname" value="Addresse email"></input>
          <input type="text" id="lname" name="lname" value="Téléphone"></input><br></br>
          <textarea name="message" rows="10" cols="61">
            Votre message ici
          </textarea><br></br> 
          <input id="envoyer" type="submit"></input>
        </form>
        
        <h6>Tout droit réservés | Réalisé par Orion Studio © - 2021</h6>
          </div>
        </div>

      
        </Container>
    </div>
  );
}

export default App;
