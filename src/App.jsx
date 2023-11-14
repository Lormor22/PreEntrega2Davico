import { BrowserRouter, Route, Routes } from "react-router-dom"
import { NavBar , CharacterListContainer, CharacterDetailsContainer, Footer, EpisodesListContainer , LocationsListContainer , Profile } from "./componets"


export const App = () => {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<CharacterListContainer/>}/>
        <Route path="/Locations" element={<LocationsListContainer/>}/>
        <Route path="/Episodes" element={<EpisodesListContainer/>}/>
        <Route path="/character/:id" element={<CharacterDetailsContainer/>}/>
        <Route path="/category/:category" element={<CharacterListContainer/>}/>
        <Route path="/profile" element={<Profile/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}
export default App

