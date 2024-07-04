function App() {
  function switchTheme(event) {
     document.documentElement.setAttribute("data-theme", event.target.value)
  }

  return (
    <>
      <div className="bg-primary">Primo</div>
      <div className="bg-secondary">Secondo</div>
      <div className="bg-accent">Terzo</div>
      <select name="" id="" onChange={switchTheme}>
        <option value={""}>tema vuoto</option>
        <option value={"cyberpunk"}>cyberpunk</option>
       <option value={"red"}>red</option>
       <option value={"black"}>black</option>
      </select>
    </>
  );
}

export default App;