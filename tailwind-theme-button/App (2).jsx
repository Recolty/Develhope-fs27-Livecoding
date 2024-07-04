function App() {
  function switchTheme() {
    let theme = document.documentElement.getAttribute("data-theme");
    if (theme === "cyberpunk") {
      document.documentElement.setAttribute("data-theme", "");
    } else {
      document.documentElement.setAttribute("data-theme", "cyberpunk");
    }
  }

  return (
    <>
      <div className="bg-primary">Primo</div>
      <div className="bg-secondary">Secondo</div>
      <div className="bg-accent">Terzo</div>
      <button onClick={switchTheme}>Cambia tema</button>
    </>
  );
}

export default App;
