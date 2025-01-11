import './label.css'

export type LabelProps = {
  text: string
  className?: string | string[]
  children?: string
}

export function Label(props: LabelProps) {
  const { text, className, children } = props

  //@ts-expect-error TS2339
  const styles = className?.push
    ? //@ts-expect-error TS2339
      className.push('fk-label')
    : (className + ' fk-label').trim()
  return <div className={styles}>{children ?? text}</div>
}
