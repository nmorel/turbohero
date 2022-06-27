import {cards} from './movies'

export function Home() {
  return (
    <ul style={{listStyle: 'none'}}>
      {cards.map((Card, index) => (
        <li key={index}>
          <Card />
        </li>
      ))}
    </ul>
  )
}
