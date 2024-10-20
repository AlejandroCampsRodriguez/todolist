
import { Form } from './Components/Form.jsx';
import { Task } from './Components/Task.jsx';

import { useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css'
import './App.css';



function App() {
  const [tarea, setTarea] = useState('');
  const [tareas, setTareas] = useState([]);

  const handleChange = (event) => {
    setTarea(event.target.value);
  };

  const addTask = (event) => {
    event.preventDefault();
    if (tarea.trim() === '') {
      alert('debes agregar algo');
      return;
    }

    const nuevaTarea = {
      id: Date.now(),
      tarea,
      completada: false,
    };
    
    setTareas([nuevaTarea, ...tareas]);
    setTarea('');
  };

  const borrarTarea = (id) => {
    const tareasActualizadas = tareas.filter(t => t.id !== id);
    setTareas(tareasActualizadas);
  };

  return (
    <>
      <div className='titulo-item'>
        <h1 className='todList'>To do List</h1>
      </div>

      <div className='form'>
        <div className='form-items'>
          <Form className= 'form-ok'
            handleChange={handleChange}
            tarea={tarea}
            addTask={addTask}
          />
          {tareas.map(t => (
            <Task
              key={t.id}
              tarea={t}
              borrarTarea={borrarTarea}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
