import { TranslateFunction } from 'contexts/Localization/types'
import { SalesSectionProps } from '.'

export const swapSectionData = (t: TranslateFunction): SalesSectionProps => ({
  headingText: t('Enter the Metaverse, No Registration'),
  bodyText: t('Trade, Build and Earn on BNB Smart Chain in seconds, just by connecting your wallet.'),
  reverse: false,
  primaryButton: {
    to: '/nft',
    text: t('Build now'),
    external: false,
  },
  secondaryButton: {
    to: 'https://docs.metafarmverse.finance/',
    text: t('Learn'),
    external: true,
  },
  images: {
    path: '/images/home/trade/',
    attributes: [
      { src: 'BNB', alt: t('BNB token') },
      { src: 'BTC', alt: t('BTC token') },
      { src: 'CAKE', alt: t('CAKE token') },
    ],
  },
})



export const cakeSectionData = (t: TranslateFunction): SalesSectionProps => ({
  headingText: t('MEFV Governs the Metaverse.'),
  bodyText: t(
    'MEFV Token is the Governance token of Meta Farm Verse. Buy it, win it, farm it, spend it, stake it... heck, you can even vote with it!',
  ),
  reverse: false,
  primaryButton: {
    to: 'https://app.metafarmverse.finance',
    text: t('Buy MEFV'),
    external: false,
  },
  secondaryButton: {
    to: 'https://docs.metafarmverse.finance',
    text: t('Learn'),
    external: true,
  },

  images: {
    path: '/images/home/cake/',
    attributes: [
      { src: 'bottom-right', alt: t('Small 3d pancake') },
      { src: 'top-right', alt: t('Small 3d pancake') },
      { src: 'coin', alt: t('CAKE token') },
      { src: 'top-left', alt: t('Small 3d pancake') },
    ],
  },
})
