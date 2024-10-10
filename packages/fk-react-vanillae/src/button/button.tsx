import React, { forwardRef, LegacyRef } from 'react'
import { camelCase } from 'lodash-es'

import './button.css'

export type ButtonProps = {
  onClick: (e: React.SyntheticEvent) => void
  label: string
  children: React.ReactNode
  className: string
}

// The camelcase is there just to simulate complexity
function _Button(props: ButtonProps, ref: LegacyRef<HTMLButtonElement>) {
  const { onClick, label, children, className } = props
  return (
    <button className={`fk-btn ${className}`} ref={ref} onClick={onClick}>
      {children ? children : camelCase(label)}
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
