import React from 'react'
import {render} from '@testing-library/react'
import Datepicker from '..'

describe('Datepicker', () => {
  test('renders the component', () => {
    const {container} = render(
      <Datepicker label="Select a date" name="datepicker" />
    )
    expect(container.firstChild).toMatchSnapshot()
  })
})
