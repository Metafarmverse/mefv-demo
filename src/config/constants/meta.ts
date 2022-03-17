import { ContextApi } from 'contexts/Localization/types'
import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'Meta Farm Verse',
  description:
    'A Farming Protocol Built in the Metaverse to enable farming, staking and building all in the Metaverse',
  image: 'https://metafarmverse.finance/wp-content/uploads/2021/04/favicon2.png',
}

export const getCustomMeta = (path: string, t: ContextApi['t']): PageMeta => {
  let basePath
  if (path.startsWith('/swap')) {
    basePath = '/swap'
  } else if (path.startsWith('/add')) {
    basePath = '/add'
  } else if (path.startsWith('/remove')) {
    basePath = '/remove'
  } else if (path.startsWith('/teams')) {
    basePath = '/teams'
  } else if (path.startsWith('/voting/proposal') && path !== '/voting/proposal/create') {
    basePath = '/voting/proposal'
  } else if (path.startsWith('/nfts/collections')) {
    basePath = '/nfts/collections'
  } else if (path.startsWith('/nfts/profile')) {
    basePath = '/nfts/profile'
  } else if (path.startsWith('/pancake-squad')) {
    basePath = '/pancake-squad'
  } else {
    basePath = path
  }

  switch (basePath) {
    case '/':
      return {
        title: `${t('Home')} | ${t('MefvSwap')}`,
      }
    case '/swap':
      return {
        title: `${t('Exchange')} | ${t('MefvSwap')}`,
      }
      return {
        title: `${t('Add Liquidity')} | ${t('MefvSwap')}`,
      }
    case '/remove':
      return {
        title: `${t('Remove Liquidity')} | ${t('MefvSwap')}`,
      }
    case '/liquidity':
      return {
        title: `${t('Liquidity')} | ${t('MefvSwap')}`,
      }
    case '/find':
      return {
        title: `${t('Import Pool')} | ${t('MefvSwap')}`,
      }
    case '/competition':
      return {
        title: `${t('Trading Battle')} | ${t('MefvSwap')}`,
      }
    case '/prediction':
      return {
        title: `${t('Prediction')} | ${t('MefvSwap')}`,
      }
    case '/prediction/leaderboard':
      return {
        title: `${t('Leaderboard')} | ${t('MefvSwap')}`,
      }
    case '/farms':
      return {
        title: `${t('Farms')} | ${t('MefvSwap')}`,
      }
    case '/farms/auction':
      return {
        title: `${t('Farm Auctions')} | ${t('MefvSwap')}`,
      }
    case '/pools':
      return {
        title: `${t('Pools')} | ${t('MefvSwap')}`,
      }
    case '/lottery':
      return {
        title: `${t('Lottery')} | ${t('MefvSwap')}`,
      }
    case '/ifo':
      return {
        title: `${t('Initial Farm Offering')} | ${t('MefvSwap')}`,
      }
    case '/teams':
      return {
        title: `${t('Leaderboard')} | ${t('MefvSwap')}`,
      }
    case '/voting':
      return {
        title: `${t('Voting')} | ${t('MefvSwap')}`,
      }
    case '/voting/proposal':
      return {
        title: `${t('Proposals')} | ${t('MefvSwap')}`,
      }
    case '/voting/proposal/create':
      return {
        title: `${t('Make a Proposal')} | ${t('MefvSwap')}`,
      }
    case '/info':
      return {
        title: `${t('Overview')} | ${t('MefvSwap Info & Analytics')}`,
        description: 'View statistics for Mefv exchanges.',
      }
    case '/info/pools':
      return {
        title: `${t('Pools')} | ${t('MefvSwap Info & Analytics')}`,
        description: 'View statistics for Mefv exchanges.',
      }
    case '/info/tokens':
      return {
        title: `${t('Tokens')} | ${t('MefvSwap Info & Analytics')}`,
        description: 'View statistics for Mefv exchanges.',
      }
    case '/nfts':
      return {
        title: `${t('Overview')} | ${t('MefvSwap')}`,
      }
    case '/nfts/collections':
      return {
        title: `${t('Collections')} | ${t('MefvSwap')}`,
      }
    case '/nfts/activity':
      return {
        title: `${t('Activity')} | ${t('MefvSwap')}`,
      }
    case '/nfts/profile':
      return {
        title: `${t('Profile')} | ${t('MefvSwap')}`,
      }
    case '/pancake-squad':
      return {
        title: `${t('Pancake Squad')} | ${t('MefvSwap')}`,
      }
    default:
      return null
  }
}
