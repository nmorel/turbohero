import {render} from '@testing-library/react'
import {Page} from './Page'

it('should show page', async () => {
  const {getByRole, findAllByRole} = render(<Page />)

  expect(getByRole('banner')).toBeInTheDocument()
  expect(getByRole('banner').firstChild?.textContent).toBe(
    'Captain America: The First Avenger (2011)'
  )

  const heroes = await findAllByRole('group')
  expect(heroes).toHaveLength(2)
  expect(heroes[0].firstChild?.textContent).toBe('Captain America')
  expect(heroes[1].firstChild?.textContent).toBe('Nick Fury')
})
