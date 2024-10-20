import React from 'react';
import '../Styles/Input.css';

const Form = ({ handleChange, addTask, tarea }) => {
  return (
    <>
      <form onSubmit={addTask}>
        <input className='input'
          type="text"
          value={tarea}
          placeholder='ingresa la tarea'
          onChange={handleChange}
        />
        <button type='submit' className='btn btn-primary' >
        Agregar <i class="bi bi-plus-square"></i>
        </button>
      </form>
    </>
  );
}

export { Form };
