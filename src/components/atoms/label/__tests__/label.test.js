import React from 'react'
import {render} from '@testing-library/react'
import Label from '.'

describe('Label', () => {
  it('renders the component', () => {
    const {container} = render(
      <Label text="Default label" name="default-label" />
    )
    expect(container.firstChild).toMatchSnapshot()
  })
})
