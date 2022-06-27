import {render} from '@testing-library/react'
import {Details} from './Details'

it('should show details', () => {
  const {getByRole} = render(<Details />)
  expect(getByRole('group')).toBeInTheDocument()
  expect(getByRole('group').firstChild?.textContent).toBe('Nick Fury')
})
