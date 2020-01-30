import React from 'react'
import {render} from '@testing-library/react'
import Input from '.'

describe('Input', () => {
  it('renders the component', () => {
    const {container} = render(<Input />)
    expect(container.firstChild).toMatchSnapshot()
  })
})
