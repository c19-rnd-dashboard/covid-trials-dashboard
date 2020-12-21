import React from 'react'
import { supportedLanguages } from 'constants/supportedLanguages'
import { LanguageSelector } from './LanguageSelector'
import { useTranslation } from 'react-i18next'

export const LanguageSelectorContainer = () => {
  const { i18n } = useTranslation()
  const changeLanguage = lan => {
    i18n.changeLanguage(lan)
  }

  return (
    <LanguageSelector
      languages={supportedLanguages}
      onSelect={changeLanguage}
    ></LanguageSelector>
  )
}
