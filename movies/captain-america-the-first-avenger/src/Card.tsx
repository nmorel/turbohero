import {Link} from 'react-router-dom'

export function Card() {
  return (
    <Link to={`/movies/captain-america-the-first-avenger`}>
      Captain America: The First Avenger (2011)
    </Link>
  )
}
