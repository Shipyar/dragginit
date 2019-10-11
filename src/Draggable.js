import React from 'react'
import PropTypes from 'prop-types'

const Draggable = React.memo(({ children, onDrag }) => {
  return (
    <div
      draggable
      onDragStart={e => onDrag(e)}
    >
      {children}
    </div>
  )
})

Draggable.defaultProps = {
  onDrag: () => {} // Setting on drag to an empty function to prevent type error.
}

Draggable.propTypes = {
  /**
   * Called while dragging.
   * If this function returns the boolean false, dragging will be canceled.
   */
  onDrag: PropTypes.func,

  /**
   * React element passed down to the draggable compoent.
   */
  children: PropTypes.element
}

export default Draggable
