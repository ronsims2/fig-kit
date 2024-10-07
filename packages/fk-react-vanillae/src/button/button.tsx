import React, { forwardRef } from 'react'
import { camelCase } from 'lodash-es'

// The camelcase is there just to simulate complexity
function _Button(props, ref) {
  const { onClick, label, children } = props
  return (
    <button ref={ref} onClick={onClick}>
      {children ?? camelCase(label)}
    </button>
  )
}

export const Button = forwardRef(_Button)

export enum ButtonSizes {
  xsmall,
  small,
  spemdium,
  medium,
  large,
  xlarge,
  jumbo,
}
