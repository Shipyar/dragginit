import React from 'react';
import { Draggable, Droppable } from 'dragginit';

const container = {
  width: '100%',
  height: '400px',
  display: 'grid',
  gridTemplateColumns: '1fr 1fr'
}

const col = {
  width: '100%',
  height: '100%',
  border: '1px solid black',
}

const drag = {
  width: '100px',
  height: '100px',
  backgroundColor: 'red',
  margin: '0 auto',
}

const App = () => {
  const handleDragCallback = (e, content) => {
    console.log('Dragging');
  }

  const handleDragEndCallback = (e, content) => {
    console.log('Drag End');
  }

  const handleDropCallback = (e, content) => {
    console.log('Dropped');
  }

  return (
    <div style={container}>
      <div style={col}>
        <Draggable
          onDrag={handleDragCallback}
          onStop={handleDragEndCallback}
        >
          <div style={drag}></div>
        </Draggable>
      </div>
      <div style={col}>
      <Droppable
        onDrop={handleDropCallback}
        category="material"
      >
        <div style={{ width: '100%', height: '100%' }}></div>
      </Droppable>
      </div>
    </div>
  )
}

export default App
