import React, { forwardRef } from 'react'
import { camelCase } from 'lodash-es'

// The camelcase is there just to simulate complexity
export const Button = forwardRef(function Button(props, ref) {
  const { onClick, label, children } = props
  return (
    <button ref={ref} onClick={onClick}>
      {children ? children : camelCase(label)}
    </button>
  )
})

export enum ButtonSizes {
  xsmall,
  small,
  spemdium,
  medium,
  large,
  xlarge,
  jumbo,
}
