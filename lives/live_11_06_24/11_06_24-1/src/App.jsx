import { useState } from "react";
import { MyList } from "./components/MyList";

function App() {
  const [items, setItems] = useState(["Shooting Star", "Galileo", "Up"]);
  
  function handleDeleteItem(i) {
    setItems(items.filter((value, index) => index !== i))
  }
  
  return (
    <>
      <MyList items={items} handleDeleteItem={handleDeleteItem}/>
      <button onClick={() => {
        // setItems(items.slice(0, items.length - 1))

        // const newItems = [...items]
        // newItems.pop()
        // setItems(newItems)

        // setItems(prev => {
        //   const newPrev = [...prev]
        //   newPrev.pop()
        //   return newPrev
        // })

        handleDeleteItem(2)
      }}>Click me</button>
    </>
  );
}

export default App;
