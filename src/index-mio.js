import { Welcome } from './components/Welcome.js';
import { Tarjeta, BlogPost } from './tarea/Tarea1.js';
import { MatchNombre, PasswordInput, ValidationInput } from './tarea/Tarea2.js';
import { UncontrolledCheckbox, CheckboxList } from './tarea/Tarea3.js';
import { ControlledCheckbox , CheckboxListWithState} from './tarea/Tarea4.js';


const myApp = document.getElementById('react-app');
const validateEmail = (value) => value.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
const validateMinLength = (value) => value.length >= 8

const items = {
     uno: true,
     dos: false,
     tres: true,
   }

ReactDOM.render(<CheckboxListWithState items = {items} ></CheckboxListWithState>, myApp)




/* ESTA ES LA TAREA 1 
ReactDOM.render(<BlogPost
    titulo="Sentado en la esquina"
    parrafos={`Sentado en la esquina, pienso cómo fui tan gil.
  Flasheo con el mambo, en un momento así. Tengo encima tantas ganas de que estés aquí.
  Recuerdo también esos momentos en que me decías: "Dejá de fumar esa hierba que te hace mal.`}
    autor={{nombre:"Manolo",
    titulo:"Capo",
      imagen: 'https://avatars0.githubusercontent.com/u/23346287?s=400&v=4',
      }}/> , myApp)
*/
// import { Button } from './components/Button.js';

// ReactDOM.render(
//   <Button onClick={event => alert(event.target.value)}>Hacé click!</Button>,
//   document.getElementById('react-app')
// );

// import { Page } from './components/Page.js';

// ReactDOM.render(
//   <Page
//     titulo="Mi diario"
//     articulos={[
//       { titulo: 'Dia uno', cuerpo: 'Hoy vi una ardilla.' },
//       { titulo: 'Dia dos', cuerpo: 'Hoy vi otra ardilla, pero capaz sea la misma.' },
//     ]}
//   />,
//   document.getElementById('react-app')
// );

// import { LikeButton } from './components/LikeButton.js';

// ReactDOM.render(<LikeButton />, document.getElementById('react-app'));

// import { ToDoList } from './components/ToDoList.js';

// ReactDOM.render(<ToDoList />, document.getElementById('react-app'));

