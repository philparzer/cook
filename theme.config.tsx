import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span style={{fontSize: 32}}>🍳</span>,
  footer: {
    component: () => {return<></>}
  },
  feedback: {
    content: () => {return<></>}
  },
  editLink: {
    component: () => {return<></>}
  },
  i18n: [
    { locale: 'en', text: 'English' },
    { locale: 'de', text: 'Deutsch' },
  ],
  search: {
    placeholder: () => "Search..."
  }
}

export default config
