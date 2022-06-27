import {render} from '@testing-library/react'
import {Page} from './Page'

it('should show page', async () => {
  const {getByRole, findAllByRole} = render(<Page />)

  expect(getByRole('banner')).toBeInTheDocument()
  expect(getByRole('banner').firstChild?.textContent).toBe('The Incredible Hulk (2008)')

  const heroes = await findAllByRole('group')
  expect(heroes).toHaveLength(1)
  expect(heroes[0].firstChild?.textContent).toBe('Hulk')
})
