import {
  $,
  component$,
  useClientEffect$,
  useSignal,
  useStylesScoped$
} from '@builder.io/qwik'
import feather from 'feather-icons'
import Blab from './blab/blab'
import Counter from './counter/counter'
import styles from './timeline.css?inline'

export default component$(() => {
  useStylesScoped$(styles)
  useClientEffect$(() => feather.replace())

  const input = useSignal<HTMLInputElement>()
  const count = useSignal<HTMLDivElement>()
  const circle = useSignal<HTMLElement>()

  const handleInput = $(() => {
    let val = input.value?.value.length ?? 0 / 280
    if (val < 0) val = 0
    else if (val > 100) {
      val = 100

      if (circle.value) circle.value.classList.add('counter__circle--red')
    } else if (circle.value)
      circle.value.classList.remove('counter__circle--red')

    const r = parseFloat(circle.value?.getAttribute('r') ?? '0')
    const c = 2 * Math.PI * r
    const percent = ((100 - val) / 100) * c

    if (circle.value) circle.value.style.strokeDashoffset = percent.toString()
    count.value?.setAttribute('data-percent', val.toString())
  })

  return (
    <div className="timeline">
      <div className="timeline__header-wrapper">
        <div className="timeline__header">
          <h1 className="timeline__heading">Home</h1>
          <i className="timeline__activity" data-feather="activity" />
        </div>
      </div>
      <div className="timeline__header-spacer" />

      <form
        className="timeline__form"
        preventdefault:submit
        onSubmit$={() => console.log('blab')}
      >
        <input
          className="timeline__input"
          ref={input}
          type="text"
          placeholder="What's happening?"
          maxLength={280}
          onInput$={handleInput}
        />
        <div className="timeline__bottom-line">
          <Counter count={count} circle={circle} />
          <button className="timeline__submit">Blab</button>
        </div>
      </form>

      <Blab />
      <Blab />
      <Blab />
      <Blab />
      <Blab />
      <Blab />
      <Blab />
      <Blab />
      <Blab />
      <Blab />
      <Blab />
      <Blab />
      <Blab />
      <Blab />
    </div>
  )
})
