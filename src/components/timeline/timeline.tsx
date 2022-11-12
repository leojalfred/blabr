import { component$, useStylesScoped$ } from '@builder.io/qwik'
import styles from './timeline.css?inline'

export default component$(() => {
  useStylesScoped$(styles)
  return <div className="timeline"></div>
})
