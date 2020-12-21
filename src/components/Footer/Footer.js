import React from 'react'
import { useTranslation } from 'react-i18next'
import FooterComponent from 'rc-footer'
import Twitter from '../../assets/images/Twitter_Social_Icon_Circle_White.png'

export const Footer = () => {
  const { t } = useTranslation()

  return (
    <FooterComponent
      backgroundColor='#00275B'
      // columnLayout='space-between'
      columns={[
        // NO IDEA WHY I HAD TO WRAP IN LINKS, SEEMS THE LIBRARY DOESN'T WORK
        {
          icon: (
            <a
              href='https://twitter.com/COVIDTrialDash'
              rel='noopener noreferrer'
            >
              <img src={Twitter} alt='twitter' />
            </a>
          ),
          title: (
            <a
              href='https://twitter.com/COVIDTrialDash'
              rel='noopener noreferrer'
            >
              @CovidTrialDash
            </a>
          ),
          url: 'https://twitter.com/COVIDTrialDash',
          description: 'twitter',
          openExternal: true,
        },
        {
          title: (
            <a href='https://coviddash.org/contact' rel='noopener noreferrer'>
              {t('contactUs')}
            </a>
          ),
          url: 'https://coviddash.com/contact',
          description: 'contact',
        },
        {
          title: (
            <a href='https://coviddash.org/faq' rel='noopener noreferrer'>
              {t('learnMoreFaqs')}
            </a>
          ),
          url: 'https://coviddash.com/faq',
          description: 'desc',
        },
      ]}
      bottom={t('footerMessage')}
    />
  )
}
