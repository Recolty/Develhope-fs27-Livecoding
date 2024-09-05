import { Route, Routes } from "react-router-dom"
import Heroes from "./Heroes"


function App() {


  return (
    <Routes>
      <Route path="/heroes" element={<Heroes />} />
    </Routes>
  )


}

export default App
