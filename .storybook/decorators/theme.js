import React, {useEffect, useState} from 'react'

const ThemeDecorator = storyFn => {
  //const [theme, setTheme] = useState('default');
  useEffect(() => {
    //require('../../src/styles/themes/_fotocasa.scss')
  }, [])

  return <div>{storyFn()}</div>
}

export default ThemeDecorator
