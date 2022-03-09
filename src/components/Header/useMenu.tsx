import { GlobeIcon, SwitchVerticalIcon, TrendingUpIcon } from '@heroicons/react/outline'
// import { t } from '@lingui/macro'
// import { useLingui } from '@lingui/react'
// import { SUSHI_ADDRESS } from '@sushiswap/core-sdk'
import { PoolIcon, RocketIcon, WalletIcon } from 'app/components/Icon'
// import { Feature } from 'app/enums'
// import { featureEnabled } from 'app/functions'
// import { useActiveWeb3React } from 'app/services/web3'
import { ReactNode, useMemo } from 'react'

export interface MenuItemLeaf {
  key: string
  title: string
  link: string
  icon?: ReactNode
}

export interface MenuItemNode {
  key: string
  title: string
  items: MenuItemLeaf[]
  icon?: ReactNode
}

export type MenuItem = MenuItemLeaf | MenuItemNode
export type Menu = MenuItem[]

type UseMenu = () => Menu
const useMenu: UseMenu = () => {
  // const { i18n } = useLingui()
  // const { chainId } = useActiveWeb3React()

  return useMemo(() => {
    // if (!chainId) return []

    // By default show just a swap button
    let tradeMenu: MenuItem = {
      key: 'swap',
      title: 'Swap',// i18n._(t`Swap`),
      link: '/swap',
      icon: <SwitchVerticalIcon width={20} />,
    }

    const mainItems: Menu = [tradeMenu]

    mainItems.push({
      key: 'balances',
      title: 'Portfolio', // i18n._(t`Portfolio`),
      link: '/portfolio',
      icon: <WalletIcon width={20} />,
    })

    return mainItems.filter((el) => Object.keys(el).length > 0)
  }, []) // chainId, i18n
}

export default useMenu
