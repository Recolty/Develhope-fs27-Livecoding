
import './App.css'

function App() {
  function switchTheme () {
    let theme = document.documentElement.getAttribute("data-theme")

    if (theme === "cyberpunk") {
      document.documentElement.setAttribute("data-theme","")
    } else {
      document.documentElement.setAttribute("data-theme","cyberpunk")
    }
  }

  return (
    <div className='border rounded-lg p-2' >
      <p className='text-cyber'>Ciao</p>
      <div className='bg-primary'>Primo</div>
      <div className='bg-secondary'>Secondo</div>
      <div className='bg-accent'>Terzo</div>
      <button onClick={switchTheme}>Change Theme</button>
      <select name="themes" id="themes" onChange={(event) => {document.documentElement.setAttribute("data-theme", event.target.value)} }>
        <option value="">Default</option>
        <option value="cyberpunk">Cyberpunk</option>
      </select>
    </div>
  )
}

export default App
