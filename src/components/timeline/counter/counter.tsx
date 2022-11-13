import { component$, Signal, useStyles$ } from '@builder.io/qwik'
import styles from './counter.css?inline'

interface Props {
  count: Signal
  circle: Signal
}

export default component$(({ count, circle }: Props) => {
  useStyles$(styles)

  return (
    <div class="counter" ref={count} data-percent="0">
      <svg
        class="counter__svg"
        width="20"
        height="20"
        viewPort="0 0 10 10"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          class="counter__circle counter__circle--outline"
          r="9"
          cx="10"
          cy="10"
          fill="transparent"
          stroke-dasharray="56.548"
          stroke-dashoffset="0"
        ></circle>
        <circle
          class="counter__circle counter__circle--fill"
          ref={circle}
          id="bar"
          r="9"
          cx="10"
          cy="10"
          fill="transparent"
          stroke-dasharray="56.548"
          stroke-dashoffset="0"
        ></circle>
      </svg>
    </div>
  )
})
