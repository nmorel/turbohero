import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import {Home} from './Home'
import {routes} from './movies'

export function App() {
  return (
    <Router>
      <header>
        <Link to="/">
          <h1>MCU - Phase One</h1>
        </Link>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies">{routes}</Route>
        </Routes>
      </main>
    </Router>
  )
}
