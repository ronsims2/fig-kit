import React, { forwardRef } from 'react'
import { camelCase } from 'lodash-es'

import './button.css'

// The camelcase is there just to simulate complexity
export const Button = forwardRef(function Button(props, ref) {
  const { onClick, label, children, className } = props
  return (
    <button className={`fk-btn ${className}`} ref={ref} onClick={onClick}>
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
