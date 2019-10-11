import React from 'react'
import PropTypes from 'prop-types'

const Droppable = React.memo(({children, category, onDrop}) => {
  /**
   * Handle Drag Over,
   * we need to revent default on the drag over otherwise drag wont work1
   */
  const handleDragOver = (e) => {
    e.preventDefault()
  }

  return (
    <div
      className='Droppable'
      style={{width: '100%', height: '100%'}}
      onDrop={e => onDrop(e, category)}
      onDragOver={e => handleDragOver(e)}
    >
      {children}
    </div>
  )
})

Droppable.propTypes = {
  /**
   * Called when draggable item is dropped onto container.
   * If this function returns the boolean false, dragging will be canceled.
   */
  onDrop: PropTypes.func,

  category: PropTypes.string,
  /**
   * React element passed down to the draggable compoent.
   */
  children: PropTypes.element
}

export default Droppable
