import React from 'react'
import PropTypes from 'prop-types'

const Droppable = React.memo(({
  children,
  onDrop,
  canDrag,
  onDrag,
  src,
  useDragImage,
  styles
}) => {
  /**
   * Handle Drag Over,
   * we need to prevent default on the drag over otherwise drag wont work1
   */
  const handleDragOver = (e) => {
    e.preventDefault()
  }

  /**
   * HandleDragStart,
   * Force the drag to stop if we have set the droppable component to disable drag
   */
  const handleDragStart = (e) => {
    if (canDrag) {
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
  }

  return (
    <div
      className='Droppable'
      style={styles}
      draggable={canDrag ? 'true' : 'false'}
      onDragStart={e => handleDragStart(e)}
      onDrop={e => onDrop(e)}
      onDragOver={e => handleDragOver(e)}
    >
      {children}
    </div>
  )
})

Droppable.defaultProps = {
  onDrop: () => {}, // Setting on drop to an empty function to prevent type error.
  onDrag: () => {}, // Setting on drag to an empty function to prevent type error.
  canDrag: false,
  styles: {},
  useDragImage: false
}

Droppable.propTypes = {
  /**
   * Called when draggable item is dropped onto container.
   * If this function returns the boolean false, dragging will be canceled.
   */
  onDrop: PropTypes.func,

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
   * Allow Droppable items to be dragged if this flag is set
   */
  canDrag: PropTypes.bool,

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

export default Droppable
