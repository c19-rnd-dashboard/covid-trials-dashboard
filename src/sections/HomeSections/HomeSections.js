import React from 'react'
import { Section } from 'components/Sections'
import { useTranslation } from 'react-i18next'

export const HomeSections = () => {
  const { t } = useTranslation()
  return (
    <>
      <Section
        alter
        title={t('section1.title')}
        content={t('section1.content')}
        image='https://c.pxhere.com/images/cb/5f/7b1ec91deafcf5160707d7d2ecfe-1608798.jpg!d'
      />
      <Section
        title={t('section2.title')}
        content={t('section2.content')}
        image='https://live.staticflickr.com/7833/46628342315_b73f6a7198_b.jpg'
      />
    </>
  )
}
