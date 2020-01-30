import React from 'react'
import {render} from '@testing-library/react'
import Button from '.'

describe('Button', () => {
  it('renders the component', () => {
    const {container} = render(<Button>Default button</Button>)
    expect(container.firstChild).toMatchSnapshot()
  })
})
