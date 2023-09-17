import { useTranslation } from 'react-i18next'

import IconFlagBR from '../../assets/flag-br.svg'
import IconFlagEN from '../../assets/flag-en.svg'

import Flag from './Flag'

const I18n = () => {
  const { i18n } = useTranslation()

  function handleChangeLanguage(language: string) {
    i18n.changeLanguage(language)
  }

  const selectedLanguage = i18n.language
  return (
    <div className="flags-container">
      <Flag
        image={IconFlagBR}
        isSelected={selectedLanguage === 'PT_BR'}
        onClick={() => handleChangeLanguage('PT_BR')}
      />
      <Flag
        image={IconFlagEN}
        isSelected={selectedLanguage === 'EN_US'}
        onClick={() => handleChangeLanguage('EN_US')}
      />
    </div>
  )
}

export default I18n