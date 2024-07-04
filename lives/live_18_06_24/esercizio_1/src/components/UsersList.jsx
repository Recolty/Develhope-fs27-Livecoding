export function UsersList ({users}) {
  return <ul>{users.map((user, i) => <li key={i}>{`${user.lastname} ${user.firstname}`}</li>)}</ul>
}