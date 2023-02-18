import { Route, Routes } from "react-router-dom"
import { Header } from "./components/Header"
import { Details } from "./routes/Details"
import { Home } from "./routes/Home"

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:name" element={<Details />} />
      </Routes>
    </>
  )
}
