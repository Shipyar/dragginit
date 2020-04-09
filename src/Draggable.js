import React from 'react'
import PropTypes from 'prop-types'

const Draggable = React.memo(({ children, onDrag, src, styles, useDragImage }) => {
  const handleDragStart = (e) => {
    if (!useDragImage) {
      if (src) {
        // eslint-disable-next-line no-undef
        let img = new Image()
        img.src = src
        e.dataTransfer.setDragImage(img, 0, 0)
      } else {
        e.dataTransfer.setDragImage(document.createElement('img'), 0, 0)
      }
    }
    onDrag(e)
  }

  return (
    <div
      draggable
      style={styles}
      onDragStart={e => handleDragStart(e)}
    >
      {children}
    </div>
  )
})

Draggable.defaultProps = {
  onDrag: () => {}, // Setting on drag to an empty function to prevent type error.
  useDragImage: true,
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
  children: PropTypes.element,

  /**
   * String URL to of the path of the replacement image
   */
  src: PropTypes.string,

  /**
   * The Styles passed down to the droppable component
   */
  styles: PropTypes.object,

  /**
   * Bool to control the use of a drag image
   */
  useDragImage: PropTypes.bool
}

export default Draggable
