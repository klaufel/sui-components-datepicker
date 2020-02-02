import {addParameters, addDecorator} from '@storybook/react'
import {withKnobs} from '@storybook/addon-knobs'
import ContainerDecorator from './decorators/container'
import ThemeDecorator from './decorators/theme'
import '../src/styles/index.scss'

addParameters({
  options: {
    showRoots: true
  }
})

addDecorator(ThemeDecorator)

addDecorator(ContainerDecorator)

addDecorator(withKnobs)
