import React from 'react'
import {render} from '@testing-library/react'
import Popover from '.'

describe('Popover', () => {
  it('renders the component', () => {
    const {container} = render(
      <Popover>
        <div>...children</div>
      </Popover>
    )
    expect(container.firstChild).toMatchSnapshot()
  })
})
