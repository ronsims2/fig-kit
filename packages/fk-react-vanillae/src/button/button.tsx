import React from 'react'
import { camelCase } from 'lodash-es'

export function Button(props) {
  return <button>{camelCase(props.label) ?? 'submit'}</button>
}
