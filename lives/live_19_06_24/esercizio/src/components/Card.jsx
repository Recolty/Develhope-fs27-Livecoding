export function Card({person}) {
  return (
    <div className="card">
      <p>{`${person.name} ${person.surname}`}</p>
    </div>
  )
}