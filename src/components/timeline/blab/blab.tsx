import { component$, useStylesScoped$ } from '@builder.io/qwik'
import styles from './blab.css?inline'
import profile from './profile.jpg'
import { parseTwitterDate } from '~/helpers'

export default component$(() => {
  useStylesScoped$(styles)

  return (
    <div className="blab">
      <div className="blab__aside">
        <img src={profile} alt="Profile picture" className="blab__profile" />
      </div>

      <div className="blab__main">
        <div className="blab__topline">
          <span className="blab__name">leo</span>
          <span className="blab__handle">@leojalfred</span>
          <span className="blab__separator">·</span>
          <span className="blab__date">
            {parseTwitterDate(new Date(1653541200000))}
          </span>
          <i className="blab__more" data-feather="more-horizontal" />
        </div>

        <div className="blab__body">
          It’s really shaping up to be a perfect storm for GOP internal
          conflict. DeSantis is empowered vs Trump due to his resounding
          reelection, R Senators are undermining McConnell’s leadership, and
          McCarthy will likely have issues holding Rs together with a very slim
          House majority
        </div>

        <div className="blab__actions">
          <div className="blab__action">
            <i
              className="blab__action-icon blab__action-icon--reply"
              data-feather="message-circle"
            />
            <span className="blab__action-count">1</span>
          </div>
          <div className="blab__action">
            <i
              className="blab__action-icon blab__action-icon--reblab"
              data-feather="repeat"
            />
            <span className="blab__action-count">1</span>
          </div>
          <div className="blab__action">
            <i
              className="blab__action-icon blab__action-icon--favorite"
              data-feather="heart"
            />
            <span className="blab__action-count">1</span>
          </div>
          <div className="blab__action">
            <i
              className="blab__action-icon blab__action-icon--share"
              data-feather="share"
            />
          </div>
        </div>
      </div>
    </div>
  )
})
