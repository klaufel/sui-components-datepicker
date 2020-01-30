import {addParameters, addDecorator} from '@storybook/react'
import {withKnobs} from '@storybook/addon-knobs'
import {withA11y} from '@storybook/addon-a11y'
import SpacingDecorator from './decorators/spacing.decorator'
import '@schibstedspain/sui-theme/lib/index.scss'
import '../src/styles/index.scss'

addParameters({
  options: {
    showRoots: true
  }
})

addDecorator(withKnobs)

addDecorator(withA11y)

addDecorator(SpacingDecorator)
