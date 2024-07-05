export function ListItem({sentence, i, handleDeleteItem}) {
  return <li>{sentence} <button onClick={() => handleDeleteItem()}>Remove</button></li>
}