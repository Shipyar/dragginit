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

Draggable.propTypes = {
  /**
   * Called while dragging.
   * If this function returns the boolean false, dragging will be canceled.
   */
  onDrag: PropTypes.func,

  /**
   * Called when dragging stops.
   * If this function returns the boolean false, the drag will remain active.
   */
  onStop: PropTypes.func,

  /**
   * React element passed down to the draggable compoent.
   */
  children: PropTypes.element
}

export default Draggable
