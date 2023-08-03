import React from "react";

// components

import CardTable from "components/Cards/CardTable.js";

export default function EgoldStaking() {
  return (
    <>
      <div className="relative bg-lightBlue-600 md:pt-20 pb-32 pt-20 mt-20">
        <div className="px-4 md:px-10 mx-auto w-full">
          <div>
          <div className="flex flex-wrap">
          <div className="mt-5 rounded-t bg-white mb-0 px-6 py-6 mx-4 w-full">
              <div className="">
                <h6 className="text-blueGray-700 text-xl font-bold">EGOLD STAKING</h6>
                <table className="w-full">
                  <tr>
                    <td className="border-2 p-2">REACT_APP_PANCAKE_ROUTER_ADDRESS</td>
                    <td className="border-2 p-2">
                      <a target="_blank" 
                      className="text-xs px-4 py-2 rounded bg-lightBlue-500 text-white active:bg-lightBlue-600" 
                      href="https://bscscan.com/address/0x10ED43C718714eb63d5aA57B78B54704E256024E">
                      0x10ED43C718714eb63d5aA57B78B54704E256024E
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="border-2 p-2">REACT_APP_PANCAKE_FACTORY_ADDRESS</td>
                    <td className="border-2 p-2">
                      <a target="_blank" 
                      className="text-xs px-4 py-2 rounded bg-lightBlue-500 text-white active:bg-lightBlue-600" 
                      href="https://bscscan.com/address/0xcA143Ce32Fe78f1f7019d7d551a6402fC5350c73">
                      0xcA143Ce32Fe78f1f7019d7d551a6402fC5350c73
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="border-2 p-2">REACT_APP_BUSD_EGOLD_FARM</td>
                    <td className="border-2 p-2">
                      <a target="_blank" 
                      className="text-xs px-4 py-2 rounded bg-lightBlue-500 text-white active:bg-lightBlue-600" 
                      href="https://bscscan.com/address/0x252861115fedaE7aea766ec288e4B7513d8e5349">
                      0x252861115fedaE7aea766ec288e4B7513d8e5349
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="border-2 p-2">REACT_APP_FARMING_ADDRESS</td>
                    <td className="border-2 p-2">
                      <a target="_blank" 
                      className="text-xs px-4 py-2 rounded bg-lightBlue-500 text-white active:bg-lightBlue-600" 
                      href="https://bscscan.com/address/0x60704169CB195622Faed77Aff70d4E4aF2e73B17">
                      0x60704169CB195622Faed77Aff70d4E4aF2e73B17
                      </a>
                    </td>
                  </tr>
                </table>
              </div>
          </div>
          <div className="mt-5 rounded-t bg-white mb-0 px-6 py-6 mx-4 w-full">
              <div className="">
                <h6 className="text-blueGray-700 text-xl font-bold">EGOLD STAKING API</h6>
                <table className="w-full">
                  <tr>
                    <td className="border-2 p-2">Farm Data</td>
                    <td className="border-2 p-2">
                      <a target="_blank" 
                      className="text-xs px-4 py-2 rounded bg-lightBlue-500 text-white active:bg-lightBlue-600" 
                      >
                      https://egold-staking-transactions.herokuapp.com/getfarmsinfo
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="border-2 p-2">24 Hour Market Data</td>
                    <td className="border-2 p-2">
                      <a target="_blank" 
                      className="text-xs px-4 py-2 rounded bg-lightBlue-500 text-white active:bg-lightBlue-600" 
                      >
                      https://egold-marketdata.herokuapp.com/v1/summary/getLatestTrades/1/
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="border-2 p-2">Price Info</td>
                    <td className="border-2 p-2">
                      <a target="_blank" 
                      className="text-xs px-4 py-2 rounded bg-lightBlue-500 text-white active:bg-lightBlue-600" 
                      >
                      https://egold-marketdata.herokuapp.com/v1/summary/getTokenPrices/ + items.attributes.tokensAddress
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="border-2 p-2">Farm Data</td>
                    <td className="border-2 p-2">
                      <a target="_blank" 
                      className="text-xs px-4 py-2 rounded bg-lightBlue-500 text-white active:bg-lightBlue-600" 
                      >
                      https://egold-staking-transactions.herokuapp.com/getallfarms
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="border-2 p-2">Submit Project</td>
                    <td className="border-2 p-2">
                      <a target="_blank" 
                      className="text-xs px-4 py-2 rounded bg-lightBlue-500 text-white active:bg-lightBlue-600" 
                      >
                      https://seashell-app-tpow8.ondigitalocean.app/api/projects
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="border-2 p-2">Get Pending</td>
                    <td className="border-2 p-2">
                      <a target="_blank" 
                      className="text-xs px-4 py-2 rounded bg-lightBlue-500 text-white active:bg-lightBlue-600" 
                      >
                      https://nodeapi-egold.herokuapp.com/v1/summary/getPending/" + transid.id + "/" + ls.get("acct")
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="border-2 p-2">Track Staking</td>
                    <td className="border-2 p-2">
                      <a target="_blank" 
                      className="text-xs px-4 py-2 rounded bg-lightBlue-500 text-white active:bg-lightBlue-600" 
                      >
                      https://egold-staking-transactions.herokuapp.com/trackstaking?wallet_addr=" + ls.get("acct")
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="border-2 p-2">Change Password</td>
                    <td className="border-2 p-2">
                      <a target="_blank" 
                      className="text-xs px-4 py-2 rounded bg-lightBlue-500 text-white active:bg-lightBlue-600" 
                      >
                      https://auth.egoldfarm.com/api/auth/changepw
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="border-2 p-2">Get Number Of Staked Miners</td>
                    <td className="border-2 p-2">
                      <a target="_blank" 
                      className="text-xs px-4 py-2 rounded bg-lightBlue-500 text-white active:bg-lightBlue-600" 
                      >
                      https://egold-miner.tagdev.info/miner/" + ls.get("acct");
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="border-2 p-2">Get Mining Data</td>
                    <td className="border-2 p-2">
                      <a target="_blank" 
                      className="text-xs px-4 py-2 rounded bg-lightBlue-500 text-white active:bg-lightBlue-600" 
                      >
                      https://egold-miner.tagdev.info/mininginfo/" + ls.get("acct");
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="border-2 p-2">Get Trade Data</td>
                    <td className="border-2 p-2">
                      <a target="_blank" 
                      className="text-xs px-4 py-2 rounded bg-lightBlue-500 text-white active:bg-lightBlue-600" 
                      >
                      https://egold-marketdata.herokuapp.com/v1/summary/getTradeSummary/" + ls.get("acct");
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="border-2 p-2">Fetch 24 Hour Market Data</td>
                    <td className="border-2 p-2">
                      <a target="_blank" 
                      className="text-xs px-4 py-2 rounded bg-lightBlue-500 text-white active:bg-lightBlue-600" 
                      >
                      https://egold-marketdata.herokuapp.com/v1/summary/getLatestTrades/20/
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="border-2 p-2">Get BNB Price</td>
                    <td className="border-2 p-2">
                      <a target="_blank" 
                      className="text-xs px-4 py-2 rounded bg-lightBlue-500 text-white active:bg-lightBlue-600" 
                      >
                      https://api.coingecko.com/api/v3/simple/price?ids=binancecoin&vs_currencies=usd
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="border-2 p-2">24 Hour Market State</td>
                    <td className="border-2 p-2">
                      <a target="_blank" 
                      className="text-xs px-4 py-2 rounded bg-lightBlue-500 text-white active:bg-lightBlue-600" 
                      >
                      https://egold-marketdata.herokuapp.com/v1/summary/get24MarketStat
                      </a>
                    </td>
                  </tr>
                </table>
              </div>
          </div>
      </div>
      </div>
      </div>
      </div>
    </>
  );
}
