import React, { useState, useEffect } from "react";
import Web3 from 'web3/dist/web3.min.js';
import { NumericFormat } from 'react-number-format';
import axios from 'axios';

// components

import CardStats from "components/Cards/CardStats.js";
import egoldTreasuryABI from '../../components/Headers/EgoldTreasuryABI.json';
import tagFLiquidityABI from '../../components/Headers/TAGFLiquidityABI.json';
import egoldMiningCycle1ABI from '../../components/Headers/EgoldMiningCycle1ABI.json';
import egoldEgoldAuctionABI from '../../components/Headers/EgoldAuctionABI.json';
import egoldLPFarmABI from '../../components/Headers/TagLPFarmABI.json';

const EgoldTreasuryContractAddress = '0x8BDdF66dB3204928182ceFD764e949B4144D5dDf';
const EgoldMiningCycle_1 = '0x60704169CB195622Faed77Aff70d4E4aF2e73B17';
const EGoldAuctionAirdropContract = '0x5E11af5489ca7c645eD5734A00779e96BA4b9Ac4';
const EGoldAuctionContract = '0x8eB1C27F41583F6A35FE1ba4A6fCBD7156309012';
const EGoldLPFarmContract = '0x252861115fedaE7aea766ec288e4B7513d8e5349';

export default function Maps() {

  const rpcURL = 'https://bsc-dataseed1.binance.org:443';
  const web3 = new Web3(rpcURL);


  const [EGOLDBUSDLPFarmendBlock, setEGOLDBUSDLPFarmendBlock] = useState(null);
  const [EGOLDBUSDLPFarmpaidOut, setEGOLDBUSDLPFarmpaidOut] = useState(null);
  const [EGOLDBUSDLPFarmpoolLength, setEGOLDBUSDLPFarmpoolLength] = useState(null);
  const [EGOLDBUSDLPFarmrewardPerBlock, setEGOLDBUSDLPFarmrewardPerBlock] = useState(null);
  const [EGOLDBUSDLPFarmstartBlock, setEGOLDBUSDLPFarmstartBlock] = useState(null);
  const [EGOLDBUSDLPFarmtotalAllocPoint, setEGOLDBUSDLPFarmtotalAllocPoint] = useState(null);
  const [EGOLDBUSDLPFarmtotalPending, setEGOLDBUSDLPFarmtotalPending] = useState(null);

  const [EGoldAuctionAirdropfetchEndBlock, setEGoldAuctionAirdropfetchEndBlock] = useState(null);
  const [EGoldAuctionAirdropfetchStartBlock, setEGoldAuctionAirdropfetchStartBlock] = useState(null);

  const [EGOLDMiningCycleendBlock, setEGOLDMiningCycleendBlock] = useState(null);
  const [EGOLDMiningCycleStartBlock, setEGOLDMiningCycleStartBlock] = useState(null);
  const [EGOLDMiningCyclePaidOut, setEGOLDMiningCyclePaidOut] = useState(null);
  const [EGOLDMiningCyclePoolLength, setEGOLDMiningCyclePoolLength] = useState(null);
  const [EGOLDMiningCycleRewardPerBlock, setEGOLDMiningCycleRewardPerBlock] = useState(null);
  const [EGOLDMiningCycleTotalAllocPoint, setEGOLDMiningCycleTotalAllocPoint] = useState(null);
  const [EGOLDMiningCycleTotalHash, setEGOLDMiningCycleTotalHash] = useState(null);
  const [EGOLDMiningCycleTotalPendingLP, setEGOLDMiningCycleTotalPendingLP] = useState(null);

  const [EGOLDFetchDistributionEndBlock, setEGOLDFetchDistributionEndBlock] = useState(null);
  const [EGOLDFetchDistributionStartBlock, setEGOLDFetchDistributionStartBlock] = useState(null);
  const [EGOLDFetchEndBlock, setEGOLDFetchEndBlock] = useState(null);
  const [EGOLDFetchQTY, setEGOLDFetchQTY] = useState(null);
  const [EGOLDFetchRate, setEGOLDFetchRate] = useState(null);
  const [EGOLDFetchStartBlock, setEGOLDFetchStartBlock] = useState(null);
  const [EGOLDFetchTotalContribution, setEGOLDFetchTotalContribution] = useState(null);


  //Egold Treasury Fetch Miner Info
  const egoldTreasuryFetchMinerInfo = new web3.eth.Contract(egoldTreasuryABI, EgoldTreasuryContractAddress)
  egoldTreasuryFetchMinerInfo.methods.fetchMinerInfo(1).call((err, result) => {
    console.log("Miner 1: "+web3.utils.fromWei(result[4], 'ether'));
  })

  //Egold Mining Cycle 1 Start Block
  const egoldMiningCycle_1StratBlock = new web3.eth.Contract(egoldMiningCycle1ABI, EgoldMiningCycle_1)
  egoldMiningCycle_1StratBlock.methods.startBlock().call((err, result) => {
    setEGOLDMiningCycleStartBlock(result);
  })

  //Egold Mining Cycle 1 End Block
  const egoldMiningCycle_1EndBlock = new web3.eth.Contract(egoldMiningCycle1ABI, EgoldMiningCycle_1)
  egoldMiningCycle_1EndBlock.methods.endBlock().call((err, result) => {
    setEGOLDMiningCycleendBlock(result);
  })

  //Egold Mining Cycle 1 Reward Per Block
  const egoldMiningCycle_1rewardPerBlock = new web3.eth.Contract(egoldMiningCycle1ABI, EgoldMiningCycle_1)
  egoldMiningCycle_1rewardPerBlock.methods.rewardPerBlock().call((err, result) => {
    setEGOLDMiningCycleRewardPerBlock(web3.utils.fromWei(result, 'ether'));
  })

  //Egold Mining Cycle 1 Paid Out
  const egoldMiningCycle_1PaidOut = new web3.eth.Contract(egoldMiningCycle1ABI, EgoldMiningCycle_1)
  egoldMiningCycle_1PaidOut.methods.paidOut().call((err, result) => {
    setEGOLDMiningCyclePaidOut(web3.utils.fromWei(result, 'ether'));
  })

  //Egold Mining Cycle 1 Pool Length
  const egoldMiningCycle_1PoolLength = new web3.eth.Contract(egoldMiningCycle1ABI, EgoldMiningCycle_1)
  egoldMiningCycle_1PoolLength.methods.poolLength().call((err, result) => {
    setEGOLDMiningCyclePoolLength(result);
  })

  //Egold Mining Cycle 1 Total Alloc Point
  const egoldMiningCycle_1totalAllocPoint = new web3.eth.Contract(egoldMiningCycle1ABI, EgoldMiningCycle_1)
  egoldMiningCycle_1totalAllocPoint.methods.totalAllocPoint().call((err, result) => {
    setEGOLDMiningCycleTotalAllocPoint(result);
  })

  //Egold Mining Cycle 1 Total Hash
  const egoldMiningCycle_1totalHash = new web3.eth.Contract(egoldMiningCycle1ABI, EgoldMiningCycle_1)
  egoldMiningCycle_1totalHash.methods.totalHash().call((err, result) => {
    setEGOLDMiningCycleTotalHash(web3.utils.fromWei(result, 'ether'));
  })

  //Egold Mining Cycle 1 Total Pending LP
  const egoldMiningCycle_1totalPendingLP = new web3.eth.Contract(egoldMiningCycle1ABI, EgoldMiningCycle_1)
  egoldMiningCycle_1totalPendingLP.methods.totalPendingLP().call((err, result) => {
    setEGOLDMiningCycleTotalPendingLP(web3.utils.fromWei(result, 'ether'));
  })

  //Egold EGOLD AUCTION PARTICIPATION BONUS Fetch Start Block
  const egoldAuctionAirdropfetchStartBlock = new web3.eth.Contract(tagFLiquidityABI, EGoldAuctionAirdropContract)
  egoldAuctionAirdropfetchStartBlock.methods.fetchStartBlock().call((err, result) => {
    setEGoldAuctionAirdropfetchStartBlock(result);
  })

  //Egold EGOLD AUCTION PARTICIPATION BONUS Fetch End Bock
  const egoldAuctionAirdropfetchEndBlock = new web3.eth.Contract(tagFLiquidityABI, EGoldAuctionAirdropContract)
  egoldAuctionAirdropfetchEndBlock.methods.fetchEndBlock().call((err, result) => {
    setEGoldAuctionAirdropfetchEndBlock(result);
  })

  //EGoldAuction Fetch Distribution End Block
  const egoldauctionfetchDistributionEndBlock = new web3.eth.Contract(egoldEgoldAuctionABI, EGoldAuctionContract)
  egoldauctionfetchDistributionEndBlock.methods.fetchDistributionEndBlock().call((err, result) => {
    setEGOLDFetchDistributionEndBlock(result);
  })

  //EGoldAuction Fetch Distribution Start Block
  const egoldauctionfetchDistributionStartBlock = new web3.eth.Contract(egoldEgoldAuctionABI, EGoldAuctionContract)
  egoldauctionfetchDistributionStartBlock.methods.fetchDistributionStartBlock().call((err, result) => {
    setEGOLDFetchDistributionStartBlock(result);
  })

  //EGoldAuction Fetch End Block
  const egoldauctionfetchEndBlock = new web3.eth.Contract(egoldEgoldAuctionABI, EGoldAuctionContract)
  egoldauctionfetchEndBlock.methods.fetchEndBlock().call((err, result) => {
    setEGOLDFetchEndBlock(result);
  })

  //EGoldAuction Fetch QTY
  const egoldauctionfetchQTY = new web3.eth.Contract(egoldEgoldAuctionABI, EGoldAuctionContract)
  egoldauctionfetchQTY.methods.fetchQTY().call((err, result) => {
    setEGOLDFetchQTY(web3.utils.fromWei(result, 'ether'));
  })

  //EGoldAuction Fetch Rate
  const egoldauctionfetchRate = new web3.eth.Contract(egoldEgoldAuctionABI, EGoldAuctionContract)
  egoldauctionfetchRate.methods.fetchRate().call((err, result) => {
    setEGOLDFetchRate(web3.utils.fromWei(result, 'ether'));
  })

  //EGoldAuction Fetch Start Block
  const egoldauctionfetchStartBlock = new web3.eth.Contract(egoldEgoldAuctionABI, EGoldAuctionContract)
  egoldauctionfetchStartBlock.methods.fetchStartBlock().call((err, result) => {
    setEGOLDFetchStartBlock(result);
  })

  //EGoldAuction Fetch Total Contribution
  const egoldauctionfetchTotalContribution = new web3.eth.Contract(egoldEgoldAuctionABI, EGoldAuctionContract)
  egoldauctionfetchTotalContribution.methods.fetchTotalContribution().call((err, result) => {
    setEGOLDFetchTotalContribution(web3.utils.fromWei(result, 'ether'));
  })

  // EGOLD BUSD LP Farm End Block
  const egoldbusdEndBlock = new web3.eth.Contract(egoldLPFarmABI, EGoldLPFarmContract)
  egoldbusdEndBlock.methods.endBlock().call((err, result) => {
    setEGOLDBUSDLPFarmendBlock(result);
  })

  // EGOLD BUSD LP Farm Paid Out
  const egoldbusdPaidOut = new web3.eth.Contract(egoldLPFarmABI, EGoldLPFarmContract)
  egoldbusdPaidOut.methods.paidOut().call((err, result) => {
    setEGOLDBUSDLPFarmpaidOut(web3.utils.fromWei(result, 'ether'));
  })

  // EGOLD BUSD LP Farm Pool Length
  const egoldbusdPoolLength = new web3.eth.Contract(egoldLPFarmABI, EGoldLPFarmContract)
  egoldbusdPoolLength.methods.poolLength().call((err, result) => {
    setEGOLDBUSDLPFarmpoolLength(result);
  })

  // EGOLD BUSD LP Farm Reward Per Block
  const egoldbusdRewardPerBlock = new web3.eth.Contract(egoldLPFarmABI, EGoldLPFarmContract)
  egoldbusdRewardPerBlock.methods.rewardPerBlock().call((err, result) => {
    setEGOLDBUSDLPFarmrewardPerBlock(web3.utils.fromWei(result, 'ether'));
  })

  // EGOLD BUSD LP Farm Start Block
  const egoldbusdStartBlock = new web3.eth.Contract(egoldLPFarmABI, EGoldLPFarmContract)
  egoldbusdStartBlock.methods.startBlock().call((err, result) => {
    setEGOLDBUSDLPFarmstartBlock(result);
  })

  // EGOLD BUSD LP Farm Total Alloc Point
  const egoldbusdtotalAllocPoint = new web3.eth.Contract(egoldLPFarmABI, EGoldLPFarmContract)
  egoldbusdtotalAllocPoint.methods.totalAllocPoint().call((err, result) => {
    setEGOLDBUSDLPFarmtotalAllocPoint(result);
  })

  // EGOLD BUSD LP Farm Total Pending
  const egoldbusdtotalPending = new web3.eth.Contract(egoldLPFarmABI, EGoldLPFarmContract)
  egoldbusdtotalPending.methods.totalPending().call((err, result) => {
    setEGOLDBUSDLPFarmtotalPending(web3.utils.fromWei(result, 'ether'));
  })
  

  return (
    <>
      {/* Header */}
      <div className="relative bg-lightBlue-600 md:pt-20 pb-32 pt-20 mt-20">
        <div className="px-4 md:px-10 mx-auto w-full">
          <div>
            {/* Card stats */}
            <div className="mt-5 rounded-t bg-white mb-0 px-6 py-6 mx-4">
                <div className="text-center flex justify-between">
                  <h6 className="text-blueGray-700 text-xl font-bold">EGOLD MINING CYCLE 1</h6>
                  <button
                    className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                    type="button"
                  >
                    <a target="_blank" href="https://bscscan.com/address/0x60704169CB195622Faed77Aff70d4E4aF2e73B17">
                    0x607041............F2e73B17</a>
                  </button>
                </div>
              </div>

              <div className="flex flex-wrap">
              <div className="mt-5 w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="Start Block"
                  statTitle="49,65%"
                  statArrow=""
                  statPercent={<a target="_blank" href={"https://bscscan.com/block/countdown/" + EGOLDMiningCycleStartBlock}>{EGOLDMiningCycleStartBlock}</a>}
                  statPercentColor="text-emerald-500"
                  statDescripiron=""
                  statIconName="fas fa-percent"
                  statIconColor="bg-lightBlue-500"
                />
              </div>
              <div className="mt-5 w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="End Block"
                  statTitle="49,65%"
                  statArrow=""
                  statPercent={<a target="_blank" href={"https://bscscan.com/block/countdown/" + EGOLDMiningCycleendBlock}>{EGOLDMiningCycleendBlock}</a>}
                  statPercentColor="text-emerald-500"
                  statDescripiron=""
                  statIconName="fas fa-percent"
                  statIconColor="bg-lightBlue-500"
                />
              </div>
              <div className="mt-5 w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="Paid out"
                  statTitle="49,65%"
                  statArrow=""
                  statPercent={
                    <NumericFormat
                      value={EGOLDMiningCyclePaidOut}
                      decimalScale={3}
                      displayType="text"
                    />
                  }
                  statPercentColor="text-emerald-500"
                  statDescripiron=""
                  statIconName="fas fa-percent"
                  statIconColor="bg-lightBlue-500"
                />
              </div>
              <div className="mt-5 w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="Pool Length"
                  statTitle="49,65%"
                  statArrow=""
                  statPercent={EGOLDMiningCyclePoolLength}
                  statPercentColor="text-emerald-500"
                  statDescripiron=""
                  statIconName="fas fa-percent"
                  statIconColor="bg-lightBlue-500"
                />
              </div>
              <div className="mt-5 w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="Reward Per Block"
                  statTitle="49,65%"
                  statArrow=""
                  statPercent={
                    <NumericFormat
                      value={EGOLDMiningCycleRewardPerBlock}
                      decimalScale={3}
                      displayType="text"
                    />
                  }
                  statPercentColor="text-emerald-500"
                  statDescripiron=""
                  statIconName="fas fa-percent"
                  statIconColor="bg-lightBlue-500"
                />
              </div>
              <div className="mt-5 w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="Total Alloc Point"
                  statTitle="49,65%"
                  statArrow=""
                  statPercent={EGOLDMiningCycleTotalAllocPoint}
                  statPercentColor="text-emerald-500"
                  statDescripiron=""
                  statIconName="fas fa-percent"
                  statIconColor="bg-lightBlue-500"
                />
              </div>
              <div className="mt-5 w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="Total Hash"
                  statTitle="49,65%"
                  statArrow=""
                  statPercent={EGOLDMiningCycleTotalHash}
                  statPercentColor="text-emerald-500"
                  statDescripiron=""
                  statIconName="fas fa-percent"
                  statIconColor="bg-lightBlue-500"
                />
              </div>
              <div className="mt-5 w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="Total Pending LP"
                  statTitle="49,65%"
                  statArrow=""
                  statPercent={
                    <NumericFormat
                      value={EGOLDMiningCycleTotalPendingLP}
                      decimalScale={3}
                      displayType="text"
                    />
                  }
                  statPercentColor="text-emerald-500"
                  statDescripiron=""
                  statIconName="fas fa-percent"
                  statIconColor="bg-lightBlue-500"
                />
              </div>
            </div>

            <div className="mt-5 rounded-t bg-white mb-0 px-6 py-6 mx-4">
                <div className="text-center flex justify-between">
                  <h6 className="text-blueGray-700 text-xl font-bold">EGOLD AUCTION PARTICIPATION BONUS</h6>
                  <button
                    className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                    type="button"
                  >
                    <a target="_blank" href="https://bscscan.com/address/0x5E11af5489ca7c645eD5734A00779e96BA4b9Ac4">
                    0x5E11af54.............BA4b9Ac4</a>
                  </button>
                </div>
              </div>      

              <div className="flex flex-wrap">
              <div className="mt-5 w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="Start Block"
                  statTitle="49,65%"
                  statArrow=""
                  statPercent={<a target="_blank" href={"https://bscscan.com/block/countdown/"+EGoldAuctionAirdropfetchStartBlock}>{EGoldAuctionAirdropfetchStartBlock}</a>}
                  statPercentColor="text-emerald-500"
                  statDescripiron=""
                  statIconName="fas fa-percent"
                  statIconColor="bg-lightBlue-500"
                />
              </div>
              <div className="mt-5 w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="End Block"
                  statTitle="49,65%"
                  statArrow=""
                  statPercent={<a target="_blank" href={"https://bscscan.com/block/countdown/" + EGoldAuctionAirdropfetchEndBlock}>{EGoldAuctionAirdropfetchEndBlock}</a>}
                  statPercentColor="text-emerald-500"
                  statDescripiron=""
                  statIconName="fas fa-percent"
                  statIconColor="bg-lightBlue-500"
                />
              </div>
              </div>

              <div className="mt-5 rounded-t bg-white mb-0 px-6 py-6 mx-4">
                <div className="text-center flex justify-between">
                  <h6 className="text-blueGray-700 text-xl font-bold">EGOLD TOKEN AUCTION</h6>
                  <button
                    className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                    type="button"
                  >
                    <a target="_blank" href="https://bscscan.com/address/0x8eB1C27F41583F6A35FE1ba4A6fCBD7156309012">
                    0x8eB1C27F41.............7156309012</a>
                  </button>
                </div>
              </div>      

              <div className="flex flex-wrap">
              <div className="mt-5 w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="Fetch Distribution End Block"
                  statTitle="49,65%"
                  statArrow=""
                  statPercent={<a target="_blank" href={"https://bscscan.com/block/countdown/"+EGOLDFetchDistributionEndBlock}>{EGOLDFetchDistributionEndBlock}</a>}
                  statPercentColor="text-emerald-500"
                  statDescripiron=""
                  statIconName="fas fa-percent"
                  statIconColor="bg-lightBlue-500"
                />
              </div>
              <div className="mt-5 w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="Fetch Distribution Start Block"
                  statTitle="49,65%"
                  statArrow=""
                  statPercent={<a target="_blank" href={"https://bscscan.com/block/countdown/" + EGOLDFetchDistributionStartBlock}>{EGOLDFetchDistributionStartBlock}</a>}
                  statPercentColor="text-emerald-500"
                  statDescripiron=""
                  statIconName="fas fa-percent"
                  statIconColor="bg-lightBlue-500"
                />
              </div>
              <div className="mt-5 w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="Fetch End Block"
                  statTitle="49,65%"
                  statArrow=""
                  statPercent={<a target="_blank" href={"https://bscscan.com/block/countdown/" + EGOLDFetchEndBlock}>{EGOLDFetchEndBlock}</a>}
                  statPercentColor="text-emerald-500"
                  statDescripiron=""
                  statIconName="fas fa-percent"
                  statIconColor="bg-lightBlue-500"
                />
              </div>
              <div className="mt-5 w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="Fetch QTY"
                  statTitle="49,65%"
                  statArrow=""
                  statPercent={EGOLDFetchQTY}
                  statPercentColor="text-emerald-500"
                  statDescripiron=""
                  statIconName="fas fa-percent"
                  statIconColor="bg-lightBlue-500"
                />
              </div>
              <div className="mt-5 w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="Fetch Rate"
                  statTitle="49,65%"
                  statArrow=""
                  statPercent={
                  <NumericFormat
                    value={EGOLDFetchRate}
                    decimalScale={3}
                    displayType="text"
                  />}
                  statPercentColor="text-emerald-500"
                  statDescripiron=""
                  statIconName="fas fa-percent"
                  statIconColor="bg-lightBlue-500"
                />
              </div>
              <div className="mt-5 w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="Fetch Start Block"
                  statTitle="49,65%"
                  statArrow=""
                  statPercent={<a target="_blank" href={"https://bscscan.com/block/countdown/" + EGOLDFetchStartBlock}>{EGOLDFetchStartBlock}</a>}
                  statPercentColor="text-emerald-500"
                  statDescripiron=""
                  statIconName="fas fa-percent"
                  statIconColor="bg-lightBlue-500"
                />
              </div>
              <div className="mt-5 w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="Fetch Total Contribution"
                  statTitle="49,65%"
                  statArrow=""
                  statPercent={EGOLDFetchTotalContribution}
                  statPercentColor="text-emerald-500"
                  statDescripiron=""
                  statIconName="fas fa-percent"
                  statIconColor="bg-lightBlue-500"
                />
              </div>
              </div>

              <div className="mt-5 rounded-t bg-white mb-0 px-6 py-6 mx-4">
                <div className="text-center flex justify-between">
                  <h6 className="text-blueGray-700 text-xl font-bold">EGOLD - BUSD LP FARM</h6>
                  <button
                    className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                    type="button"
                  >
                    <a target="_blank" href="https://bscscan.com/address/0x252861115fedaE7aea766ec288e4B7513d8e5349">
                    0x25286111...........7513d8e5349</a>
                  </button>
                </div>
              </div> 
                
              <div className="flex flex-wrap">
              <div className="mt-5 w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="EndBlock"
                  statTitle="49,65%"
                  statArrow=""
                  statPercent={<a target="_blank" href={"https://bscscan.com/block/countdown/" + EGOLDBUSDLPFarmendBlock}>{EGOLDBUSDLPFarmendBlock}</a>}
                  statPercentColor="text-emerald-500"
                  statDescripiron=""
                  statIconName="fas fa-percent"
                  statIconColor="bg-lightBlue-500"
                />
              </div>

              <div className="mt-5 w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="PaidOut"
                  statTitle="49,65%"
                  statArrow=""
                  statPercent={
                  <NumericFormat
                    value={EGOLDBUSDLPFarmpaidOut}
                    decimalScale={3}
                    displayType="text"
                  />}
                  statPercentColor="text-emerald-500"
                  statDescripiron=""
                  statIconName="fas fa-percent"
                  statIconColor="bg-lightBlue-500"
                />
              </div>

              <div className="mt-5 w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="Pool Length"
                  statTitle="49,65%"
                  statArrow=""
                  statPercent={EGOLDBUSDLPFarmpoolLength}
                  statPercentColor="text-emerald-500"
                  statDescripiron=""
                  statIconName="fas fa-percent"
                  statIconColor="bg-lightBlue-500"
                />
              </div>

              <div className="mt-5 w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="Reward Per Block"
                  statTitle="49,65%"
                  statArrow=""
                  statPercent={
                  <NumericFormat
                    value={EGOLDBUSDLPFarmrewardPerBlock}
                    decimalScale={6}
                    displayType="text"
                  />}
                  statPercentColor="text-emerald-500"
                  statDescripiron=""
                  statIconName="fas fa-percent"
                  statIconColor="bg-lightBlue-500"
                />
              </div>

              <div className="mt-5 w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="Start Block"
                  statTitle="49,65%"
                  statArrow=""
                  statPercent={<a target="_blank" href={"https://bscscan.com/block/countdown/" + EGOLDBUSDLPFarmstartBlock}>{EGOLDBUSDLPFarmstartBlock}</a>}
                  statPercentColor="text-emerald-500"
                  statDescripiron=""
                  statIconName="fas fa-percent"
                  statIconColor="bg-lightBlue-500"
                />
              </div>

              <div className="mt-5 w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="Total Alloc Point"
                  statTitle="49,65%"
                  statArrow=""
                  statPercent={EGOLDBUSDLPFarmtotalAllocPoint}
                  statPercentColor="text-emerald-500"
                  statDescripiron=""
                  statIconName="fas fa-percent"
                  statIconColor="bg-lightBlue-500"
                />
              </div>

              <div className="mt-5 w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="Total Pending"
                  statTitle="49,65%"
                  statArrow=""
                  statPercent={
                  <NumericFormat
                    value={EGOLDBUSDLPFarmtotalPending}
                    decimalScale={3}
                    displayType="text"
                  />}
                  statPercentColor="text-emerald-500"
                  statDescripiron=""
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
