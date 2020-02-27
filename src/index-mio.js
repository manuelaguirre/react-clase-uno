import { Welcome } from './components/Welcome.js';
import { Tarjeta, BlogPost } from './tarea/Tarea1.js';

const myApp = document.getElementById('react-app');
const autor = 

ReactDOM.render(<BlogPost
    titulo="Sentado en la esquina"
    parrafos={`Sentado en la esquina, pienso cómo fui tan gil.
  Flasheo con el mambo, en un momento así. Tengo encima tantas ganas de que estés aquí.
  Recuerdo también esos momentos en que me decías: "Dejá de fumar esa hierba que te hace mal.`}
    autor={{nombre:"Manolo",
    titulo:"Capo",
      imagen: 'https://avatars0.githubusercontent.com/u/23346287?s=400&v=4',
      }}/> , myApp)

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
