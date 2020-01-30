import React from 'react'

const SpacingDecorator = storyFn => (
  <div
    style={{
      padding: '20px'
    }}
  >
    {storyFn()}
  </div>
)

export default SpacingDecorator
