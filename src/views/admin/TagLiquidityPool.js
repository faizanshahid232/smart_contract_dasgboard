import React, { useState, useEffect } from "react";
import Web3 from 'web3/dist/web3.min.js';
import { NumericFormat } from 'react-number-format';
import axios from 'axios';

import CardStats from "components/Cards/CardStats.js";
import tagContractABI from '../../components/Headers/TagContractABI.json';

const busdFarmContractAddress = '0xe2cbFcD40006903B55b61a72D0015CDC852c8a4a'
const bnbFarmContractAddress = '0x477C8FDe42D8C9420EC0B5112cC0d9fd13bD4008'
const TMoonFarmContractAddress = '0xfb8A9041B458C15709542b985E673727fA04a797'
const StagFarmContractAddress = '0xbB0CE8Ea605fCD663F0069376448B6b34072D356'
const EgoldFarmContractAddress = '0x252861115fedaE7aea766ec288e4B7513d8e5349'
const TagContractAddress = '0x717fb7b6d0c3d7f1421cc60260412558283a6ae5';
const TMOONContractAddress = '0xa9ff122f533c1abfa16f28e500f9ea2841e8102f';
const EGOLDContractAddress = '0x8005D97E993668a528008d16338B42f9e976ED0F';
const BNBContractAddress = '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c'
const StagContractAddress = '0xf21e21333a9424e67b2fefd98152c7b478ea985a'
const BusdContractAddress = '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56';
const EgoldContractAddress = '0x8005D97E993668a528008d16338B42f9e976ED0F';
const pancakeSwapFactoryAddress = '0xcA143Ce32Fe78f1f7019d7d551a6402fC5350c73';

const liqABI = [
    {
      inputs: [],
      name: 'decimals',
      outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'token0',
      outputs: [{ internalType: 'address', name: '', type: 'address' }],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'factory',
      outputs: [{ internalType: 'address', name: '', type: 'address' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [
        { internalType: 'address', name: '', type: 'address' },
        { internalType: 'address', name: '', type: 'address' },
      ],
      name: 'getPair',
      outputs: [{ internalType: 'address', name: '', type: 'address' }],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'getReserves',
      outputs: [
        { internalType: 'uint112', name: '_reserve0', type: 'uint112' },
        { internalType: 'uint112', name: '_reserve1', type: 'uint112' },
        { internalType: 'uint32', name: '_blockTimestampLast', type: 'uint32' },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
  ]

  export default function TagLiquidityPool() {

    const rpcURL = 'https://bsc-dataseed1.binance.org:443';
    const web3 = new Web3(rpcURL);

    const [StagTagcoinFarm, setStagTagcoinFarm] = useState(null);
  const [TMoonTagcoinFarm, setTMoonTagcoinFarm] = useState(null);
  const [BNBTagcoinFarm, setBNBTagcoinFarm] = useState(null);
  const [BUSDTagcoinFarm, setBUSDTagcoinFarm] = useState(null);
  const [EGoldTagcoinFarm, setEGoldTagcoinFarm] = useState(null);
  const [MarketState, setMarketState] = useState(null);
  const [EgoldMarketState, setEgoldMarketState] = useState(null);

  const [TAGinTMOONLiquidityPool, setTAGinTMOONLiquidityPool] = useState(null);
  const [TMOONinLiquidityPool, setTMOONinLiquidityPool] = useState(null);
  const [tmoonPoolAddress, settmoonPoolAddress] = useState(null);
  const [TAGinBUSDLiquidityPool, setTAGinBUSDLiquidityPool] = useState(null);
  const [BUSDinLiquidityPool, setBUSDinLiquidityPool] = useState(null);
  const [busdPoolAddress, setbusdPoolAddress] = useState(null);
  const [TAGinSTAGLiquidityPool, setTAGinSTAGLiquidityPool] = useState(null);
  const [STAGinLiquidityPool, setSTAGinLiquidityPool] = useState(null);
  const [stagPoolAddress, setstagPoolAddress] = useState(null);
  const [TAGinBNBLiquidityPool, setTAGinBNBLiquidityPool] = useState(null);
  const [BNBinLiquidityPool, setBNBinLiquidityPool] = useState(null);
  const [bnbPoolAddress, setbnbPoolAddress] = useState(null);
  const [BUSDinEGOLDLiquidityPool, setBUSDinEGOLDLiquidityPool] = useState(null);
  const [EGOLDinLiquidityPool, setEGOLDinLiquidityPool] = useState(null);
  const [egoldPoolAddress, setegoldPoolAddress] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function marketstat() {
      try {
        const res = await axios.get('https://tagdev.info/v1/summary/get24MarketStat')
        setMarketState(res.data)
        console.log(res.data)
      } catch (err) {
        setError(err.message)
        setMarketState(null)
      } finally {
        //setLoading(false)
      }
    }
    marketstat()
  }, []);

  useEffect(() => {
    async function egoldmarketstat() {
      try {
        const res = await axios.get('https://egold-marketdata.herokuapp.com/v1/summary/getLatestTrades/1')
        setEgoldMarketState(res.data)
        console.log("Egold state: "+res.data[0].TAG_USD)
      } catch (err) {
        setError(err.message)
        setEgoldMarketState(null)
      } finally {
        //setLoading(false)
      }
    }
    egoldmarketstat()
  }, []);

  if (error) return 'Error!';
  if(!MarketState) return 'Error!';
  if(!EgoldMarketState) return 'Error!';

  const open_usd = MarketState[0]['open_usd'];
  const open_egold = EgoldMarketState[0]['TAG_USD'];

  function nFormatter(num) {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'M'
    }
    if (num >= 1000) {
      return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'K'
    }
    return num
  }

  //Tmoon Liquidity Pool
  const cakeFactory = new web3.eth.Contract(liqABI, pancakeSwapFactoryAddress)
  cakeFactory.methods
    .getPair(
      TagContractAddress, // TAG
      TMOONContractAddress, // TAG Moon
    )
    .call(function (err, pairAddress) {
      if (pairAddress) {
        settmoonPoolAddress(pairAddress)
        var pair = new web3.eth.Contract(liqABI, pairAddress)
        pair.methods.getReserves().call(function (err, Reserves) {
          setTAGinTMOONLiquidityPool(web3.utils.fromWei(Reserves[0], 'ether'))
          setTMOONinLiquidityPool(web3.utils.fromWei(Reserves[1], 'ether'))
        })
      }
    })

  //BUSD Liquidity Pool
  const cakeFactory2 = new web3.eth.Contract(liqABI, pancakeSwapFactoryAddress)
  cakeFactory2.methods
    .getPair(
      TagContractAddress, // TAG
      BusdContractAddress, // BUSD
    )
    .call(function (err, pairBUSD) {
      if (pairBUSD) {
        setbusdPoolAddress(pairBUSD)
        var pair_BUSD = new web3.eth.Contract(liqABI, pairBUSD)
        pair_BUSD.methods.getReserves().call(function (err, ResBUSD) {
          setTAGinBUSDLiquidityPool(web3.utils.fromWei(ResBUSD[0], 'ether'))
          setBUSDinLiquidityPool(web3.utils.fromWei(ResBUSD[1], 'ether'))
        })
      }
    })
    
  //STAG Liquidity Pool
  const cakeFactory3 = new web3.eth.Contract(liqABI, pancakeSwapFactoryAddress)
  cakeFactory3.methods
    .getPair(
      TagContractAddress, // TAG
      StagContractAddress, // STAG
    )
    .call(function (err, pairSTag) {
      if (pairSTag) {
        setstagPoolAddress(pairSTag)
        var pair_STAG = new web3.eth.Contract(liqABI, pairSTag)
        pair_STAG.methods.getReserves().call(function (err, ResSTag) {
          setTAGinSTAGLiquidityPool(web3.utils.fromWei(ResSTag[0], 'ether'))
          setSTAGinLiquidityPool(web3.utils.fromWei(ResSTag[1], 'ether'))
        })
      }
    })
  
  //BNB Liquidity Pool
  var cakeFactory_4 = new web3.eth.Contract(liqABI, pancakeSwapFactoryAddress) // CONTACT PANCAKE ABI
  cakeFactory_4.methods
    .getPair(
      TagContractAddress, //TAG
      BNBContractAddress, //BNB
    )
    .call(function (err, pairAddress) {
      if (pairAddress) {
        setbnbPoolAddress(pairAddress)
        var pair = new web3.eth.Contract(liqABI, pairAddress)
        pair.methods.getReserves().call(function (err, Reserves) {
          setTAGinBNBLiquidityPool(web3.utils.fromWei(Reserves[0], 'ether'))
          setBNBinLiquidityPool(web3.utils.fromWei(Reserves[1], 'ether'))
        })
      }
    })
  
  //EGOLD Liquidity Pool
  var cakeFactory_4 = new web3.eth.Contract(liqABI, pancakeSwapFactoryAddress) // CONTACT PANCAKE ABI
  cakeFactory_4.methods
    .getPair(
      BusdContractAddress, //BUSD
      EGOLDContractAddress, //EGOLD
    )
    .call(function (err, pairAddress) {
      if (pairAddress) {
        setegoldPoolAddress(pairAddress)
        var pair = new web3.eth.Contract(liqABI, pairAddress)
        pair.methods.getReserves().call(function (err, Reserves) {
          setBUSDinEGOLDLiquidityPool(web3.utils.fromWei(Reserves[0], 'ether'))
          setEGOLDinLiquidityPool(web3.utils.fromWei(Reserves[1], 'ether'))
        })
      }
    })
  
  //TAGcoin in STag Farm
  const tagcoininstagfarm = new web3.eth.Contract(tagContractABI, TagContractAddress)
  tagcoininstagfarm.methods.balanceOf(StagFarmContractAddress).call((err, result) => {
    setStagTagcoinFarm(web3.utils.fromWei(result, 'ether'))
  })

  //TAGcoin in TMoon Farm
  const tagcoinintmoonfarm = new web3.eth.Contract(tagContractABI, TagContractAddress)
  tagcoinintmoonfarm.methods.balanceOf(TMoonFarmContractAddress).call((err, result) => {
    setTMoonTagcoinFarm(web3.utils.fromWei(result, 'ether'))
  })

  //TAGcoin in BNB Farm
  const tagcoininbnbfarm = new web3.eth.Contract(tagContractABI, TagContractAddress)
  tagcoininbnbfarm.methods.balanceOf(bnbFarmContractAddress).call((err, result) => {
    setBNBTagcoinFarm(web3.utils.fromWei(result, 'ether'))
  })

  //TAGcoin in BUSD Farm
  const tagcoininbusdfarm = new web3.eth.Contract(tagContractABI, TagContractAddress)
  tagcoininbusdfarm.methods.balanceOf(busdFarmContractAddress).call((err, result) => {
    setBUSDTagcoinFarm(web3.utils.fromWei(result, 'ether'))
  })

  //TAGcoin in EGold Farm
  const tagcoininegoldfarm = new web3.eth.Contract(tagContractABI, EgoldContractAddress)
  tagcoininegoldfarm.methods.balanceOf(EgoldFarmContractAddress).call((err, result) => {
    setEGoldTagcoinFarm(web3.utils.fromWei(result, 'ether'))
  })

  return (
    <>
      {/* Header */}
      <div className="relative bg-lightBlue-600 md:pt-20 pb-32 pt-20 mt-20">
        <div className="px-4 md:px-10 mx-auto w-full">
          <div>
            {/* Card stats */}
            <div className="mb-5 rounded-t bg-white px-6 py-6 mx-4">
                <div className="text-center flex justify-between">
                  <h6 className="text-blueGray-700 text-xl font-bold">Tagcoin Balance in Farm</h6>
                </div>
              </div>
            <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="TAGcoin in STAG Farm"
                  statPercent={
                    <NumericFormat
                      value={StagTagcoinFarm}
                      decimalScale={3}
                      displayType="text"
                    />
                  }
                  statPercentColor="text-emerald-500"
                  statArrow="$"
                  statDescripiron={
                    <NumericFormat
                      value={StagTagcoinFarm * open_usd}
                      decimalScale={3}
                      displayType="text"
                    />
                  }
                  statIconName="far fa-chart-bar"
                  statIconColor="bg-red-500"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="TAGcoin in TMOON Farm"
                  statTitle="2,356"
                  statArrow="$"
                  statPercent={
                    <NumericFormat
                      value={TMoonTagcoinFarm}
                      decimalScale={3}
                      displayType="text"
                    />
                  }
                  statPercentColor="text-emerald-500"
                  statDescripiron={
                    <NumericFormat
                      value={TMoonTagcoinFarm * open_usd}
                      decimalScale={3}
                      displayType="text"
                    />
                  }
                  statIconName="fas fa-chart-pie"
                  statIconColor="bg-orange-500"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="TAGcoin in BUSD Farm"
                  statTitle="924"
                  statArrow="$"
                  statPercent={
                    <NumericFormat
                      value={BUSDTagcoinFarm}
                      decimalScale={3}
                      displayType="text"
                    />
                  }
                  statPercentColor="text-emerald-500"
                  statDescripiron={
                    <NumericFormat
                      value={BUSDTagcoinFarm * open_usd}
                      decimalScale={3}
                      displayType="text"
                    />
                  }
                  statIconName="fas fa-users"
                  statIconColor="bg-pink-500"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="TAGcoin in BNB Farm"
                  statTitle="49,65%"
                  statArrow="$"
                  statPercent={
                    <NumericFormat
                      value={BNBTagcoinFarm}
                      decimalScale={3}
                      displayType="text"
                    />
                  }
                  statPercentColor="text-emerald-500"
                  statDescripiron={
                    <NumericFormat
                      value={BNBTagcoinFarm * open_usd}
                      decimalScale={3}
                      displayType="text"
                    />
                  }
                  statIconName="fas fa-percent"
                  statIconColor="bg-lightBlue-500"
                />
              </div>
              <div className="mt-5 w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="EGOLD in TAGcoin Farm"
                  statTitle="49,65%"
                  statArrow="$"
                  statPercent={
                    <NumericFormat
                      value={EGoldTagcoinFarm}
                      decimalScale={3}
                      displayType="text"
                    />
                  }
                  statPercentColor="text-emerald-500"
                  statDescripiron={
                    <NumericFormat
                      value={EGoldTagcoinFarm * open_egold}
                      decimalScale={3}
                      displayType="text"
                    />
                  }
                  statIconName="fas fa-percent"
                  statIconColor="bg-lightBlue-500"
                />
              </div>
              </div>
              
              <div className="mt-5 mb-5 rounded-t bg-white px-6 py-6 mx-4">
                <div className="text-center flex justify-between">
                  <h6 className="text-blueGray-700 text-xl font-bold">Tagcoin Balance in Liquidity Pool</h6>
                </div>
              </div>

              <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="TMOON"
                  statPercent={"TAG "+nFormatter(TAGinTMOONLiquidityPool)}
                  statPercentColor="text-emerald-500"
                  statArrow=""
                  statDescripiron={"TMOON "+nFormatter(TMOONinLiquidityPool)}
                  statIconName="far fa-chart-bar"
                  statIconColor="bg-red-500"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="BUSD"
                  statTitle="2,356"
                  statArrow=""
                  statPercent={"TAG "+nFormatter(TAGinBUSDLiquidityPool)}
                  statPercentColor="text-emerald-500"
                  statDescripiron={"BUSD "+nFormatter(BUSDinLiquidityPool)}
                  statIconName="fas fa-chart-pie"
                  statIconColor="bg-orange-500"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="STAG"
                  statTitle="924"
                  statArrow=""
                  statPercent={"TAG "+nFormatter(TAGinSTAGLiquidityPool)}
                  statPercentColor="text-emerald-500"
                  statDescripiron={"STAG "+nFormatter(STAGinLiquidityPool)}
                  statIconName="fas fa-users"
                  statIconColor="bg-pink-500"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="BNB"
                  statTitle="49,65%"
                  statArrow="BNB "
                  statPercent={"TAG "+nFormatter(TAGinBNBLiquidityPool)}
                  statPercentColor="text-emerald-500"
                  statDescripiron={
                  <NumericFormat
                      value={BNBinLiquidityPool}
                      decimalScale={3}
                      displayType="text"
                    />
                }
                  statIconName="fas fa-percent"
                  statIconColor="bg-lightBlue-500"
                />
              </div>
              <div className="mt-5 w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="EGOLD"
                  statTitle="49,65%"
                  statArrow=""
                  statPercent={"BUSD "+nFormatter(EGOLDinLiquidityPool)}
                  statPercentColor="text-emerald-500"
                  statDescripiron={"EGOLD "+nFormatter(BUSDinEGOLDLiquidityPool)}
                  statIconName="fas fa-percent"
                  statIconColor="bg-lightBlue-500"
                />
              </div>
              </div>

              
            
            </div>
        </div>
      </div>
    </>
  );
  }