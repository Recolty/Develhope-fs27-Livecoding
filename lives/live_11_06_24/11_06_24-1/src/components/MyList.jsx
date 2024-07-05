import { ListItem } from "./ListItem";

export function MyList({items, handleDeleteItem}) {
  return (
    <ul>
      {items.map((item, i) => {
        return <ListItem key={i} sentence={item} handleDeleteItem={() => handleDeleteItem(i)}/>;
      })}
    </ul>
  );
}
