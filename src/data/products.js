import { TrendingUp, LayoutDashboard, PieChart, Code } from 'lucide-react'

export const products = [
  {
    id: 'kite',
    name: 'Kite',
    tagline: 'Trading platform',
    description: 'A fast, clean web and mobile interface for viewing charts, watchlists and placing orders.',
    icon: TrendingUp,
    features: ['Interactive charts', 'Customisable watchlists', 'Order placement screens', 'Light and dark themes'],
  },
  {
    id: 'console',
    name: 'Console',
    tagline: 'Reporting and analytics',
    description: 'A dashboard for reviewing holdings, profit and loss statements and account reports.',
    icon: LayoutDashboard,
    features: ['Portfolio overview', 'Profit and loss reports', 'Downloadable statements', 'Activity history'],
  },
  {
    id: 'coin',
    name: 'Coin',
    tagline: 'Mutual fund investing',
    description: 'Browse mutual funds, compare options and track your long-term investments in one place.',
    icon: PieChart,
    features: ['Fund discovery', 'Goal-based tracking', 'SIP management screens', 'Performance summaries'],
  },
  {
    id: 'kite-connect',
    name: 'Kite Connect',
    tagline: 'Trading API platform',
    description: 'A set of APIs that lets developers build their own trading tools and apps.',
    icon: Code,
    features: ['REST-style APIs', 'Live market data streaming', 'Order management', 'Developer documentation'],
  },
]
