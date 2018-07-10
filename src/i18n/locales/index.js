/* eslint-disable global-require */

const localeData = [
  ...require('react-intl/locale-data/en'),
  ...require('react-intl/locale-data/hu'),
]

module.exports = {
  localeData,
  languages: [
    { value: 'en', text: 'English' },
    { value: 'hu', text: 'Magyar' },
  ],
}
