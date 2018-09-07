import React from 'react'
import ScrollSection from '../components/ScrollSection'

const Section = props => (
  <React.Fragment>
    <ScrollSection {...props} id=".story.sleeping-beauty.the-old-lady">
      <h3>Az öreg nő megmutatja</h3>
      <div>
        <p>További érdekes, de egyre rejtélyesebb téma az amikor az öreg nő megmutatja fiatalnak, hogy hogyan kell...</p>

        <p className="masonry">
          <img src="/images/fates/spinning/the-old-lady/1f6ccd2abfe8df8fca0be7b6593d8b92.jpg" />
          <img src="/images/fates/spinning/the-old-lady/4502754d2ecaf659aa7e41c0866fccb3.jpg" />
          <img src="/images/fates/spinning/the-old-lady/11ad5ffac50cc4b84a021d9e49050bf1.jpg" />
          <img src="/images/fates/spinning/the-old-lady/2f02201fa2ba51f981a25957aab076cf.jpg" />
          <img src="/images/fates/spinning/the-old-lady/70a1bfd5540f0261341e9809bf37914b.jpg" />
          <img src="/images/fates/spinning/the-old-lady/c9cd9a6caeb7b30461772c8c878a3107.jpg" />
        </p>
      </div>
    </ScrollSection>
  </React.Fragment>
)


export default Section
