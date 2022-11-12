import {
  component$,
  useClientEffect$,
  useStylesScoped$
} from '@builder.io/qwik'
import feather from 'feather-icons'
import styles from './timeline.css?inline'

export default component$(() => {
  useStylesScoped$(styles)
  useClientEffect$(() => feather.replace())

  return (
    <div className="timeline">
      <div className="timeline__header-wrapper">
        <div className="timeline__header">
          <h1 className="timeline__heading">Home</h1>
          <i data-feather="activity"></i>
        </div>
      </div>
    </div>
  )
})
