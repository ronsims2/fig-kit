import './label.css'

export type LabelProps = {
  text: string
  className?: string | string[]
}
export function Label(props: LabelProps) {
  const { text, className } = props

  //@ts-expect-error TS2339
  const styles = className?.push
    ? //@ts-expect-error TS2339
      className.push('fk-label')
    : (className + ' fk-label').trim()
  return <div className={styles}>{text}</div>
}
