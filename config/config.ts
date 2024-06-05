import { http, createConfig } from 'wagmi'
import {  goerli } from 'wagmi/chains'
import { metaMask,  } from 'wagmi/connectors'

export const config = createConfig({
  chains: [  goerli, ],
  transports: {
    [goerli.id]: http(process.env.NEXT_PUBLIC_PRC_URL)
  },
  connectors: [
    metaMask(),
  ],
})