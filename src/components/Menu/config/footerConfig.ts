import { FooterLinkType } from '@pancakeswap/uikit'
import { ContextApi } from 'contexts/Localization/types'

export const footerLinks: (t: ContextApi['t']) => FooterLinkType[] = (t) => [
  {
    label: t('About'),
    items: [
      {
        label: t('Blog'),
        href: 'https://metafarmverse.medium.com',
      },
      {
        label: t('Community'),
        href: 'https://docs.metafarmverse.finance/contact-us/Socials',
      },
      {
        label: t('MEFV token'),
        href: 'https://docs.metafarmverse.finance/whitepaper/meta-farm-verse',
      },
      {
        label: '—',
      },
    ],
  },
  {
    label: t('Developers'),
    items: [
      {
        label: 'Github',
        href: 'https://github.com/Metafarmverse',
      },
      {
        label: t('Documentation'),
        href: 'https://docs.metafarmverse.finance',
      },
    ],
  },
]
