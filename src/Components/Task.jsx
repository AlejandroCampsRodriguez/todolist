import { useState } from 'react';
import '../Styles/Task.css';

const Task = ({ tarea, borrarTarea }) => {
  const [completada, setCompletada] = useState(false);
  
  return (
  <>
    <div className={completada ? 'containerTarea containerTareaCompletada' : 'containerTarea'}>
      <h2 className={completada ? 'completada' : 'noCompletada'}>{tarea.tarea}</h2>
<div className="contenedorBotones">
      <button id='completar' onClick={() => setCompletada(!completada)} className='btn btn-primary button'>
        {completada ? 'no completada' : 'completada'} <i class="bi bi-check-circle"></i>
      </button>
      <button onClick={() => borrarTarea(tarea.id)} className='btn btn-danger button'>Eliminar   <i class="bi bi-trash3"></i></button>
      </div>
    </div>  
  
  </>
  );
}

export { Task };
