import React from 'react'

const SpacingDecorator = storyFn => (
  <div
    style={{
      position: 'relative',
      padding: '20px'
    }}
  >
    {storyFn()}
  </div>
)

export default SpacingDecorator
