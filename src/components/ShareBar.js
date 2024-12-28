'use client'

import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  RedditShareButton,
  WhatsappShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  RedditIcon,
  WhatsappIcon
} from 'react-share'

export default function ShareBar() {
  const shareUrl = 'https://corruptbox.top'
  const title = 'Corruptbox - Create Music Like Never Before'
  const hashtags = ['Corruptbox', 'MusicCreation', 'Incredibox', 'Sprunki']
  const description = 'Create amazing music with Corruptbox, a Sprunki-powered music creation game inspired by Incredibox. Mix beats, create unique soundscapes, and share your musical masterpieces!'

  return (
    <div className="bg-gray-800/50 py-4 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center space-x-8">
          <div className="text-green-400 font-medium">
            Share Corruptbox:
          </div>
          <div className="flex space-x-4">
            <TwitterShareButton
              url={shareUrl}
              title={title}
              hashtags={hashtags}
              className="hover:scale-110 transition-transform"
            >
              <TwitterIcon size={32} round />
            </TwitterShareButton>

            <FacebookShareButton
              url={shareUrl}
              quote={description}
              hashtag="#Corruptbox"
              className="hover:scale-110 transition-transform"
            >
              <FacebookIcon size={32} round />
            </FacebookShareButton>

            <LinkedinShareButton
              url={shareUrl}
              title={title}
              summary={description}
              source="Corruptbox"
              className="hover:scale-110 transition-transform"
            >
              <LinkedinIcon size={32} round />
            </LinkedinShareButton>

            <RedditShareButton
              url={shareUrl}
              title={title}
              className="hover:scale-110 transition-transform"
            >
              <RedditIcon size={32} round />
            </RedditShareButton>

            <WhatsappShareButton
              url={shareUrl}
              title={title}
              separator=" - "
              className="hover:scale-110 transition-transform"
            >
              <WhatsappIcon size={32} round />
            </WhatsappShareButton>
          </div>
        </div>
      </div>
    </div>
  )
} 