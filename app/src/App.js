import './App.css';
import NFTcontainer from './NFTcontainer';
import { useEffect, useState } from 'react';
const API_KEY = "2d9ff64f-f496-442c-847a-341acfb86e2f"


function App() {

  const [walletAddress, setWalletAddress] = useState(null)
  const [nfts, setNfts] = useState([])

  const connectWallet = async () => {
    if (typeof window.ethereum !== 'undefined') {

      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })

      setWalletAddress(accounts[0])
    }
  }

  const getNftData = async () => {

    if(!walletAddress === null) return; // if wallet address is null, return


    const response = await fetch(`https://testnet-api.rarible.org/v0.1/items/byOwner/?owner=ETHEREUM:${walletAddress}`, {
      headers: {
        'X-API-KEY': API_KEY
      }
    })
    const data = await response.json()

    setNfts(data.items)

  }

  useEffect(() => {
    getNftData()
  }, [walletAddress])

  return (
      <div className="App">
        <div className="text">
          Account: {walletAddress}
        </div>
        <button className='connect-button' onClick={connectWallet}>
          Connect Wallet
        </button>
        <NFTcontainer nfts={nfts} />
      </div>
  );
}

export default App;