export function ListItem({item, onClick}) {
  return(
    <div className="card" onClick={onClick}>
      <h2>{item.name}</h2>
      <p>{item.width} {item.height}</p>
    </div>
  )
}