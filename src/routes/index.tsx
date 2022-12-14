import { component$ } from '@builder.io/qwik'
import type { DocumentHead } from '@builder.io/qwik-city'
import Timeline from '../components/timeline/timeline'

export default component$(() => {
  return <Timeline />
})

export const head: DocumentHead = {
  title: 'Blabr',
  meta: [
    {
      name: 'description',
      content:
        'Twitter is imploding, might as well make a clone. Written with Go and Qwik.'
    }
  ]
}
