import {render} from '@testing-library/react'
import {Page} from './Page'

it('should show page', async () => {
  const {getByRole, findAllByRole} = render(<Page />)

  expect(getByRole('banner')).toBeInTheDocument()
  expect(getByRole('banner').firstChild?.textContent).toBe('Iron Man 2 (2010)')

  const heroes = await findAllByRole('group')
  expect(heroes).toHaveLength(4)
  expect(heroes[0].firstChild?.textContent).toBe('Iron Man')
  expect(heroes[1].firstChild?.textContent).toBe('Nick Fury')
  expect(heroes[2].firstChild?.textContent).toBe('Black Widow')
  expect(heroes[3].firstChild?.textContent).toBe('Phil Coulson')
})
