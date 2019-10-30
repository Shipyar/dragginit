# dragginit

> Simple react component to allow drag and drop based on the html drag and drop


[![NPM](https://img.shields.io/npm/v/dragginit.svg)](https://www.npmjs.com/package/dragginit) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save dragginit
```

## Usage

```jsx
import { Draggable, Droppable } from 'dragginit'
```

Basic usage

```js
<Draggable onDrag={handler}>
  <div>I can now be moved around!</div>
</Draggable>

<Droppable onDrop={handler}>
  <div>I accept draggable items</div>
</Droppable>
```

Enable Droppable components to drag

```js
<Droppable onDrop={dropHandler} canDrop onDrag={dragHandler}>
  <div>I accept draggable items</div>
</Droppable>
```

Drag a custom src image, by default draggale components dont drag and image.

```js
<Draggable src="/path/to/basic/imgurl">
  <div>I can now be moved around!</div>
</Draggable>
```

Edit Draggable and Droppable Styles.

```js
<Droppable styles={border: '1px solid red'}>
  <div>I can dropped and you can style me how you want!</div>
</Droppable>

<Draggable styles={border: '1px solid red'}>
  <div>I can now be moved around, and you can style me how you want!</div>
</Draggable>
```

## License

MIT © [Shipyar](https://github.com/Shipyar)
