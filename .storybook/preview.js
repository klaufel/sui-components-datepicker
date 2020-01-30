import {addParameters, addDecorator} from '@storybook/react'
import {withKnobs} from '@storybook/addon-knobs'
import SpacingDecorator from './decorators/spacing.decorator'
import '@schibstedspain/sui-theme/lib/index.scss'
import '../src/styles/themes/fotocasa.scss'
import '../src/styles/index.scss'

addParameters({
  options: {
    showRoots: true,
    sortStoriesByKind: false
  }
})

addDecorator(withKnobs)

addDecorator(SpacingDecorator)
