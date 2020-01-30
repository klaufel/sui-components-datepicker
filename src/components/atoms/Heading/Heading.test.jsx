import React from 'react'
import {render} from '@testing-library/react'
import Heading from '.'

describe('Heading', () => {
  it('renders the component', () => {
    const {container} = render(<Heading>Lorem ipsum dolor sit amet...</Heading>)
    expect(container.firstChild).toMatchSnapshot()
  })
})
