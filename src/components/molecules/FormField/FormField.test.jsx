import React from 'react'
import {render} from '@testing-library/react'
import FormField from '.'

describe('FormField', () => {
  it('renders the component', () => {
    const {container} = render(<FormField label="Default label" name="input" />)
    expect(container.firstChild).toMatchSnapshot()
  })
})
