import React from 'react'
import {render} from '@testing-library/react'
import Icon, {ICON_NAMES} from '.'

const IconNames = () => ICON_NAMES.map(name => <Icon key={name} name={name} />)

describe('Icon', () => {
  test('it works with all icons names', () => {
    const {container} = render(<IconNames />)
    expect(container).toMatchSnapshot()
  })
})
