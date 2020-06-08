import React from 'react';
import { Draggable, Droppable } from 'dragginit';

const App = () => {
  const style = {
    display: 'inline-block',
    height: '160px',
    width: '160px',
    margin: '10px',
    border: '3px salmon solid',
    backgroundColor: 'white',
  }

  return (
    <div>
      <Droppable>
        <Draggable styles={{width: '120px', height: '120px'}}></Draggable>
      </Droppable>
      <Droppable styles={style} canDrag>
        <div></div>
      </Droppable>
      <Droppable styles={style}>
        <div></div>
      </Droppable>
      <Droppable styles={style}>
        <div></div>
      </Droppable>
      <Droppable styles={style}>
        <div></div>
      </Droppable>
    </div>
  )
}

export default App
