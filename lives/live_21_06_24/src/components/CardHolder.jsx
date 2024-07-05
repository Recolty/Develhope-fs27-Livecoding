import { useState } from "react";
import { ListItem } from "./ListItem";

export function CardHolder() {
  const [objectList, setObjectList] = useState([
    { name: "object1", width: "50px", height: "50px" },
    { name: "object2", width: "50px", height: "50px" },
    { name: "object3", width: "50px", height: "50px" },
  ]);

  function handleDelete(remove) {
    setObjectList((objectOfList) =>
      objectOfList.filter((obj) => obj !== remove)
    );
  }

  return (
    <div className="card-holder">
      {objectList.map((object, i) => {
        return (
          <ListItem
            item={object}
            key={i}
            onClick={() => handleDelete(object)}
          />
        );
      })}
    </div>
  );
}
