export function Home() {
  fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((json) => console.log(json));

    //TODO salvare i prodotti ricevuti dall'API 
    //TODO mostrare i prodotti nella home 

  return (
    <>
      <h1>Home</h1>
      <a href={`/login`}>Login</a>
    </>
  );
}
