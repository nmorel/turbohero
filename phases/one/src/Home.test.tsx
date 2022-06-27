import {render} from '@testing-library/react'
import {Home} from './Home'
import {createMemoryHistory} from 'history'
import {Router} from 'react-router-dom'

it('should show home', async () => {
  const history = createMemoryHistory()
  const {findAllByRole} = render(
    <Router location={history.location} navigator={history}>
      <Home />
    </Router>
  )

  const links = await findAllByRole('link')
  expect(links).toHaveLength(6)
  expect(links[0].textContent).toBe('Iron Man (2008)')
  expect(links[1].textContent).toBe('The Incredible Hulk (2008)')
  expect(links[2].textContent).toBe('Iron Man 2 (2010)')
  expect(links[3].textContent).toBe('Thor (2011)')
  expect(links[4].textContent).toBe('Captain America: The First Avenger (2011)')
  expect(links[5].textContent).toBe('The Avengers (2012)')
})
