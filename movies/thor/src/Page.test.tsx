import {render} from '@testing-library/react'
import {Page} from './Page'

it('should show page', async () => {
  const {getByRole, findAllByRole} = render(<Page />)

  expect(getByRole('banner')).toBeInTheDocument()
  expect(getByRole('banner').firstChild?.textContent).toBe('Thor (2011)')

  const heroes = await findAllByRole('group')
  expect(heroes).toHaveLength(3)
  expect(heroes[0].firstChild?.textContent).toBe('Thor')
  expect(heroes[1].firstChild?.textContent).toBe('Loki')
  expect(heroes[2].firstChild?.textContent).toBe('Phil Coulson')
})
