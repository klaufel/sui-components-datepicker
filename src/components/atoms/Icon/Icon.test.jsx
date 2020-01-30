import React from 'react'
import {render} from '@testing-library/react'
import Icon from '.'
import {iconNames} from './iconList'

const AllIcons = () => iconNames.map(name => <Icon key={name} name={name} />)

describe('Icon', () => {
  it('renders the component', () => {
    const {container} = render(<AllIcons />)
    expect(container).toMatchSnapshot()
  })
})
