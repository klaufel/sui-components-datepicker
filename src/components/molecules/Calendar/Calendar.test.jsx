import React from 'react'
import {render} from '@testing-library/react'
import Calendar from '.'

describe('Calendar', () => {
  it('renders the component', () => {
    const {container} = render(<Calendar />)
    expect(container.firstChild).toMatchSnapshot()
  })
})
