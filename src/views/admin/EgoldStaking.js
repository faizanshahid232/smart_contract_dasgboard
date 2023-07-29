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
      </div>
      </div>
      </div>
      </div>
    </>
  );
}
