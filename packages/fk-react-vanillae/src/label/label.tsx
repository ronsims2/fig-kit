import './label.css'

export type LabelProps = {
  text: string
  className?: string | string[]
}
export function Label(props: labelProps) {
  const { text, className } = props

  const styles = className?.push
    ? className.push('fk-label')
    : (className + ' fk-label').trim()
  return <div className={styles}>{text}</div>
}
