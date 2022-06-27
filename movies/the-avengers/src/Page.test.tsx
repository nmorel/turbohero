import {render} from '@testing-library/react'
import {Page} from './Page'

it('should show page', async () => {
  const {getByRole, findAllByRole} = render(<Page />)

  expect(getByRole('banner')).toBeInTheDocument()
  expect(getByRole('banner').firstChild?.textContent).toBe('The Avengers (2012)')

  const heroes = await findAllByRole('group')
  expect(heroes).toHaveLength(9)
  expect(heroes[0].firstChild?.textContent).toBe('Iron Man')
  expect(heroes[1].firstChild?.textContent).toBe('Hulk')
  expect(heroes[2].firstChild?.textContent).toBe('Thor')
  expect(heroes[3].firstChild?.textContent).toBe('Loki')
  expect(heroes[4].firstChild?.textContent).toBe('Captain America')
  expect(heroes[5].firstChild?.textContent).toBe('Nick Fury')
  expect(heroes[6].firstChild?.textContent).toBe('Phil Coulson')
  expect(heroes[7].firstChild?.textContent).toBe('Black Widow')
  expect(heroes[8].firstChild?.textContent).toBe('Hawkeye')
})
