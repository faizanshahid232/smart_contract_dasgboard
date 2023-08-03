import React from "react";

// components

import CardTable from "components/Cards/CardTable.js";

export default function EgoldTrade() {
  return (
    <>
      <div className="relative bg-lightBlue-600 md:pt-20 pb-32 pt-20 mt-20">
        <div className="px-4 md:px-10 mx-auto w-full">
          <div>
          <div className="flex flex-wrap">
          <div className="mt-5 rounded-t bg-white mb-0 px-6 py-6 mx-4 w-full">
              <div className="">
                <h6 className="text-blueGray-700 text-xl font-bold">EGOLD TRADE</h6>
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
                <h6 className="text-blueGray-700 text-xl font-bold">EGOLD TRADE API</h6>
                <table className="w-full">
                  <tr>
                    <td className="border-2 p-2">Fetch Liquidity Data</td>
                    <td className="border-2 p-2">
                      <a target="_blank" 
                      className="text-xs px-4 py-2 rounded bg-lightBlue-500 text-white active:bg-lightBlue-600" 
                      >
                      https://egold-marketdata.herokuapp.com/v1/summary/getLiq/20
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="border-2 p-2">Market Data</td>
                    <td className="border-2 p-2">
                      <a target="_blank" 
                      className="text-xs px-4 py-2 rounded bg-lightBlue-500 text-white active:bg-lightBlue-600" 
                      >
                      https://egold-marketdata.herokuapp.com/v1/summary/
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="border-2 p-2">To Get Latest Trades Onload</td>
                    <td className="border-2 p-2">
                      <a target="_blank" 
                      className="text-xs px-4 py-2 rounded bg-lightBlue-500 text-white active:bg-lightBlue-600" 
                      >
                      https://egold-marketdata.herokuapp.com/v1/summary/getLatestTrades/20
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="border-2 p-2">24 Hour Market Stat</td>
                    <td className="border-2 p-2">
                      <a target="_blank" 
                      className="text-xs px-4 py-2 rounded bg-lightBlue-500 text-white active:bg-lightBlue-600" 
                      >
                      https://egold-marketdata.herokuapp.com/v1/summary/get24MarketStat
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="border-2 p-2">Farmurl</td>
                    <td className="border-2 p-2">
                      <a target="_blank" 
                      className="text-xs px-4 py-2 rounded bg-lightBlue-500 text-white active:bg-lightBlue-600" 
                      >
                      https://egold-marketdata.herokuapp.com/v1/summary/getFarm/20
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="border-2 p-2">Fetch Farm Data</td>
                    <td className="border-2 p-2">
                      <a target="_blank" 
                      className="text-xs px-4 py-2 rounded bg-lightBlue-500 text-white active:bg-lightBlue-600" 
                      >
                      https://egold-marketdata.herokuapp.com/v1/summary/getFarm/20/
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="border-2 p-2">urltd</td>
                    <td className="border-2 p-2">
                      <a target="_blank" 
                      className="text-xs px-4 py-2 rounded bg-lightBlue-500 text-white active:bg-lightBlue-600" 
                      >
                      https://egold-marketdata.herokuapp.com/v1/summary/getLatestTrades/20/";
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="border-2 p-2">urlMiningStats</td>
                    <td className="border-2 p-2">
                      <a target="_blank" 
                      className="text-xs px-4 py-2 rounded bg-lightBlue-500 text-white active:bg-lightBlue-600" 
                      >
                      https://egold-miner.herokuapp.com/miningStats";
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="border-2 p-2">urlSummary</td>
                    <td className="border-2 p-2">
                      <a target="_blank" 
                      className="text-xs px-4 py-2 rounded bg-lightBlue-500 text-white active:bg-lightBlue-600" 
                      >
                      https://egold-marketdata.herokuapp.com/v1/summary/";
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="border-2 p-2">url24</td>
                    <td className="border-2 p-2">
                      <a target="_blank" 
                      className="text-xs px-4 py-2 rounded bg-lightBlue-500 text-white active:bg-lightBlue-600" 
                      >
                      https://egold-marketdata.herokuapp.com/v1/summary/get24MarketStat";
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="border-2 p-2">url</td>
                    <td className="border-2 p-2">
                      <a target="_blank" 
                      className="text-xs px-4 py-2 rounded bg-lightBlue-500 text-white active:bg-lightBlue-600" 
                      >
                      https://egold-treasury.tagdev.info/v1/summary";
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="border-2 p-2">G1Count</td>
                    <td className="border-2 p-2">
                      <a target="_blank" 
                      className="text-xs px-4 py-2 rounded bg-lightBlue-500 text-white active:bg-lightBlue-600" 
                      >
                      https://egold-treasury-api.herokuapp.com/v1/summary/countMiners/1";
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="border-2 p-2">G2Count</td>
                    <td className="border-2 p-2">
                      <a target="_blank" 
                      className="text-xs px-4 py-2 rounded bg-lightBlue-500 text-white active:bg-lightBlue-600" 
                      >
                      https://egold-treasury-api.herokuapp.com/v1/summary/countMiners/2";
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="border-2 p-2">G3Count</td>
                    <td className="border-2 p-2">
                      <a target="_blank" 
                      className="text-xs px-4 py-2 rounded bg-lightBlue-500 text-white active:bg-lightBlue-600" 
                      >
                      https://egold-treasury-api.herokuapp.com/v1/summary/countMiners/3";
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="border-2 p-2">G4Count</td>
                    <td className="border-2 p-2">
                      <a target="_blank" 
                      className="text-xs px-4 py-2 rounded bg-lightBlue-500 text-white active:bg-lightBlue-600" 
                      >
                      https://egold-treasury-api.herokuapp.com/v1/summary/countMiners/4";
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="border-2 p-2">S1Count</td>
                    <td className="border-2 p-2">
                      <a target="_blank" 
                      className="text-xs px-4 py-2 rounded bg-lightBlue-500 text-white active:bg-lightBlue-600" 
                      >
                      https://egold-treasury-api.herokuapp.com/v1/summary/countMiners/5";
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="border-2 p-2">S2Count</td>
                    <td className="border-2 p-2">
                      <a target="_blank" 
                      className="text-xs px-4 py-2 rounded bg-lightBlue-500 text-white active:bg-lightBlue-600" 
                      >
                      https://egold-treasury-api.herokuapp.com/v1/summary/countMiners/6";
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="border-2 p-2">S3Count</td>
                    <td className="border-2 p-2">
                      <a target="_blank" 
                      className="text-xs px-4 py-2 rounded bg-lightBlue-500 text-white active:bg-lightBlue-600" 
                      >
                      https://egold-treasury-api.herokuapp.com/v1/summary/countMiners/7";
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="border-2 p-2">S4Count</td>
                    <td className="border-2 p-2">
                      <a target="_blank" 
                      className="text-xs px-4 py-2 rounded bg-lightBlue-500 text-white active:bg-lightBlue-600" 
                      >
                      https://egold-treasury-api.herokuapp.com/v1/summary/countMiners/8";
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="border-2 p-2">S5Count</td>
                    <td className="border-2 p-2">
                      <a target="_blank" 
                      className="text-xs px-4 py-2 rounded bg-lightBlue-500 text-white active:bg-lightBlue-600" 
                      >
                      https://egold-treasury-api.herokuapp.com/v1/summary/countMiners/9";
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="border-2 p-2">GMCount</td>
                    <td className="border-2 p-2">
                      <a target="_blank" 
                      className="text-xs px-4 py-2 rounded bg-lightBlue-500 text-white active:bg-lightBlue-600" 
                      >
                      https://auth.egoldfarm.com/getgiftminercount";
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="border-2 p-2">Salerburn</td>
                    <td className="border-2 p-2">
                      <a target="_blank" 
                      className="text-xs px-4 py-2 rounded bg-lightBlue-500 text-white active:bg-lightBlue-600" 
                      >
                      https://egold-treasury.tagdev.info/v1/summary/burns";
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="border-2 p-2">TotalStakeurl</td>
                    <td className="border-2 p-2">
                      <a target="_blank" 
                      className="text-xs px-4 py-2 rounded bg-lightBlue-500 text-white active:bg-lightBlue-600" 
                      >
                      https://egold-staking-transactions.herokuapp.com/totalegoldstaked";
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
