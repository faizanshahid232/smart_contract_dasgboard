import React, { useState } from "react";
import Web3 from 'web3/dist/web3.min.js';
import { NumericFormat } from 'react-number-format';
// components

import CardStats from "components/Cards/CardStats.js";
import tagContractABI from './TagContractABI.json';
import tagLPFarmABI from './TagLPFarmABI.json';
import tagTreasuryABI from './TAGTreasuryABI.json';
import tagStakingABI from './TAGStaking.json';
import tagFLiquidityABI from './TAGFLiquidityABI.json';

const EgoldFarmContractAddress = '0x252861115fedaE7aea766ec288e4B7513d8e5349'
const EgoldContractAddress = '0x8005D97E993668a528008d16338B42f9e976ED0F';
const TagLPFarmContractAddress = '0xB609853B9C81D199338605a19ba1bC7e630f289E';
const TAGTreasuryContractAddress = '0xA0961c56A7695336a4aD651639d094Be4EEFC1dd';
const TAGStakingAddress = '0xA047CbB36Aa512b654D3A99aEaa2D61DAd6dff26';
const TAGFLiquidityAddress = '0x331a73Af449ef78cd17C0C24d10B6486eCa21d60';
const TAGFMigrationAddress = '0xD570C1284FA7C33800eeBA82AA245229467fC734';
const TAGFOracleAddress = '0x9B813B3E6cF2B27593CD8397deAeB6842D2e9df9';

export default function HeaderStats() {
  
  const rpcURL = 'https://bsc-dataseed1.binance.org:443';
  const web3 = new Web3(rpcURL);
  
  const [EGoldTagcoinFarm, setEGoldTagcoinFarm] = useState(null);
  const [TAGLPFarmpoolLength, setTAGLPFarmpoolLength] = useState(null);
  const [TAGLPFarmrewardPerBlock, setTAGLPFarmrewardPerBlock] = useState(null);
  const [TAGLPFarmpaidOut, setTAGLPFarmpaidOut] = useState(null);
  const [TAGLPFarmstartBlock, setTAGLPFarmstartBlock] = useState(null);
  const [TAGLPFarmendBlock, setTAGLPFarmendBlock] = useState(null);
  const [TAGLPFarmtotalPending, setTAGLPFarmtotalPending] = useState(null);
  const [TAGLPFarmtotalAllocPoint, setTAGLPFarmtotalAllocPoint] = useState(null);
  const [TAGTreasurycurrentctr, setTAGTreasurycurrentctr] = useState(null);
  const [TAGTreasuryfetchBurnRatio, setTAGTreasuryfetchBurnRatio] = useState(null);
  const [TAGTreasuryfetchPrice, setTAGTreasuryfetchPrice] = useState(null);
  const [TAGTreasuryfetchBaserate, setTAGTreasuryfetchBaserate] = useState(null);
  const [TAGTreasuryfetchMaxlevel, setTAGTreasuryfetchMaxlevel] = useState(null);
  const [TAGTreasuryinc, setTAGTreasuryinc] = useState(null);
  const [TAGTreasuryPriceinc, setTAGTreasuryPriceinc] = useState(null);
  const [TAGStakingfetchClaimID, setTAGStakingfetchClaimID] = useState(null);
  const [TAGStakingfetchCooldownBlock, setTAGStakingfetchCooldownBlock] = useState(null);
  const [TAGStakingfetchFees, setTAGStakingfetchFees] = useState(null);
  const [TAGStakingfetchNFTLimit, setTAGStakingfetchNFTLimit] = useState(null);
  const [FLiquidityfetchCurrentBlock, setFLiquidityfetchCurrentBlock] = useState(null);
  const [FLiquidityfetchEndBlock, setFLiquidityfetchEndBlock] = useState(null);
  const [FLiquidityfetchStartBlock, setFLiquidityfetchStartBlock] = useState(null);
  const [FLiquiditypending, setFLiquiditypending] = useState(null);
  const [FMigrationfetchCurrentBlock, setFMigrationfetchCurrentBlock] = useState(null);
  const [FMigrationfetchEndBlock, setFMigrationfetchEndBlock] = useState(null);
  const [FMigrationfetchStartBlock, setFMigrationfetchStartBlock] = useState(null);
  const [FMigrationpending, setFMigrationpending] = useState(null);
  const [FOraclefetchCurrentBlock, setFOraclefetchCurrentBlock] = useState(null);
  const [FOraclefetchEndBlock, setFOraclefetchEndBlock] = useState(null);
  const [FOraclefetchStartBlock, setFOraclefetchStartBlock] = useState(null);
  const [FOraclepending, setFOraclepending] = useState(null);



  //TAG LPFarm pool Length
  const tagLPFarmpoolLength = new web3.eth.Contract(tagLPFarmABI, TagLPFarmContractAddress)
  tagLPFarmpoolLength.methods.poolLength().call((err, result) => {
    setTAGLPFarmpoolLength(result);
  })

  //TAG LPFarm reward PerBlock
  const tagLPFarmrewardPerBlock = new web3.eth.Contract(tagLPFarmABI, TagLPFarmContractAddress)
  tagLPFarmrewardPerBlock.methods.rewardPerBlock().call((err, result) => {
    setTAGLPFarmrewardPerBlock(web3.utils.fromWei(result, 'ether'));
  })

  //TAG LPFarm PaidOut
  const tagLPFarmpaidOut = new web3.eth.Contract(tagLPFarmABI, TagLPFarmContractAddress)
  tagLPFarmpaidOut.methods.paidOut().call((err, result) => {
    setTAGLPFarmpaidOut(web3.utils.fromWei(result, 'ether'));
  })

  //TAG LPFarm start Block
  const tagLPFarmstartBlock = new web3.eth.Contract(tagLPFarmABI, TagLPFarmContractAddress)
  tagLPFarmstartBlock.methods.startBlock().call((err, result) => {
    setTAGLPFarmstartBlock(result);
  })

  //TAG LPFarm end Block
  const tagLPFarmEndBlock = new web3.eth.Contract(tagLPFarmABI, TagLPFarmContractAddress)
  tagLPFarmEndBlock.methods.endBlock().call((err, result) => {
    setTAGLPFarmendBlock(result);
  })

  //TAG LPFarm total pending
  const tagLPFarmTotalPending = new web3.eth.Contract(tagLPFarmABI, TagLPFarmContractAddress)
  tagLPFarmTotalPending.methods.totalPending().call((err, result) => {
    setTAGLPFarmtotalPending(web3.utils.fromWei(result, 'ether'));
  })

  //TAG LPFarm total pending
  const tagLPFarmtotalAllocPoint = new web3.eth.Contract(tagLPFarmABI, TagLPFarmContractAddress)
  tagLPFarmtotalAllocPoint.methods.totalAllocPoint().call((err, result) => {
    setTAGLPFarmtotalAllocPoint(result);
  })

  //TAG Treasury current Ctr
  const tagTreasurycurrentCtr = new web3.eth.Contract(tagTreasuryABI, TAGTreasuryContractAddress)
  tagTreasurycurrentCtr.methods.currentCtr().call((err, result) => {
    setTAGTreasurycurrentctr(result);
  })

  //TAG Treasury Burn Ratio
  const tagTreasuryfetchBurnRatio = new web3.eth.Contract(tagTreasuryABI, TAGTreasuryContractAddress)
  tagTreasuryfetchBurnRatio.methods.fetchBurnRatio().call((err, result) => {
    setTAGTreasuryfetchBurnRatio(result);
  })

  //TAG Treasury fetch Price
  const tagTreasuryfetchPrice = new web3.eth.Contract(tagTreasuryABI, TAGTreasuryContractAddress)
  tagTreasuryfetchPrice.methods.fetchPrice().call((err, result) => {
    setTAGTreasuryfetchPrice(web3.utils.fromWei(result, 'ether'));
  })

  //TAG Treasury fetch Baserate
  const tagTreasuryfetchBaserate = new web3.eth.Contract(tagTreasuryABI, TAGTreasuryContractAddress)
  tagTreasuryfetchBaserate.methods.fetchBaserate().call((err, result) => {
    setTAGTreasuryfetchBaserate(result);
  })

  //TAG Treasury fetch Max level
  const tagTreasuryfetchMaxlevel = new web3.eth.Contract(tagTreasuryABI, TAGTreasuryContractAddress)
  tagTreasuryfetchMaxlevel.methods.fetchMaxlevel().call((err, result) => {
    setTAGTreasuryfetchMaxlevel(result);
  })

  //TAG Treasury inc
  const tagTreasuryinc = new web3.eth.Contract(tagTreasuryABI, TAGTreasuryContractAddress)
  tagTreasuryinc.methods.inc().call((err, result) => {
    setTAGTreasuryinc(result);
  })

  //TAG Treasury Price inc
  const tagTreasuryPriceinc = new web3.eth.Contract(tagTreasuryABI, TAGTreasuryContractAddress)
  tagTreasuryPriceinc.methods.PriceInc().call((err, result) => {
    setTAGTreasuryPriceinc(result);
  })

  //TAG Staking fetch ClaimID
  const tagStakingfetchClaimID = new web3.eth.Contract(tagStakingABI, TAGStakingAddress)
  tagStakingfetchClaimID.methods.fetchClaimID().call((err, result) => {
    setTAGStakingfetchClaimID(result);
  })

  //TAG Staking fetch cooldown Block
  const tagStakingCooldownBlock = new web3.eth.Contract(tagStakingABI, TAGStakingAddress)
  tagStakingCooldownBlock.methods.fetchCooldownBlock().call((err, result) => {
    setTAGStakingfetchCooldownBlock(result);
  })

  //TAG Staking fetch Fees
  const tagStakingfetchFees = new web3.eth.Contract(tagStakingABI, TAGStakingAddress)
  tagStakingfetchFees.methods.fetchFees().call((err, result) => {
    setTAGStakingfetchFees(result);
  })

  //TAG Staking fetch NFT Limit
  const tagStakingfetchNFTLimit = new web3.eth.Contract(tagStakingABI, TAGStakingAddress)
  tagStakingfetchNFTLimit.methods.fetchNFTLimit().call((err, result) => {
    setTAGStakingfetchNFTLimit(result);
  })

  //TAG FLiquidity fetch Current Block
  const tagFLiquidityfetchCurrentBlock = new web3.eth.Contract(tagFLiquidityABI, TAGFLiquidityAddress)
  tagFLiquidityfetchCurrentBlock.methods.fetchCurrentBlock().call((err, result) => {
    setFLiquidityfetchCurrentBlock(result);
  })

  //TAG FLiquidity fetch END Block
  const tagFLiquidityfetchEndBlock = new web3.eth.Contract(tagFLiquidityABI, TAGFLiquidityAddress)
  tagFLiquidityfetchEndBlock.methods.fetchEndBlock().call((err, result) => {
    setFLiquidityfetchEndBlock(result);
  })

  //TAG FLiquidity fetch Start Block
  const tagFLiquidityfetchStartBlock = new web3.eth.Contract(tagFLiquidityABI, TAGFLiquidityAddress)
  tagFLiquidityfetchStartBlock.methods.fetchStartBlock().call((err, result) => {
    setFLiquidityfetchStartBlock(result);
  })

  //TAG FLiquidity pending
  const tagFLiquiditypending = new web3.eth.Contract(tagFLiquidityABI, TAGFLiquidityAddress)
  tagFLiquiditypending.methods.pending().call((err, result) => {
    setFLiquiditypending(web3.utils.fromWei(result, 'ether'));
  })

  //TAG FMigration fetch Current Block
  const tagFMigrationfetchCurrentBlock = new web3.eth.Contract(tagFLiquidityABI, TAGFMigrationAddress)
  tagFMigrationfetchCurrentBlock.methods.fetchCurrentBlock().call((err, result) => {
    setFMigrationfetchCurrentBlock(result);
  })

  //TAG FMigration fetch END Block
  const tagFMigrationfetchEndBlock = new web3.eth.Contract(tagFLiquidityABI, TAGFMigrationAddress)
  tagFMigrationfetchEndBlock.methods.fetchEndBlock().call((err, result) => {
    setFMigrationfetchEndBlock(result);
  })

  //TAG FMigration fetch Start Block
  const tagFMigrationfetchStartBlock = new web3.eth.Contract(tagFLiquidityABI, TAGFMigrationAddress)
  tagFMigrationfetchStartBlock.methods.fetchStartBlock().call((err, result) => {
    setFMigrationfetchStartBlock(result);
  })

  //TAG FMigration pending
  const tagFMigrationpending = new web3.eth.Contract(tagFLiquidityABI, TAGFMigrationAddress)
  tagFMigrationpending.methods.pending().call((err, result) => {
    setFMigrationpending(web3.utils.fromWei(result, 'ether'));
  })

  //
  //TAG FOracle fetch Current Block
  const tagFOraclefetchCurrentBlock = new web3.eth.Contract(tagFLiquidityABI, TAGFOracleAddress)
  tagFOraclefetchCurrentBlock.methods.fetchCurrentBlock().call((err, result) => {
    setFOraclefetchCurrentBlock(result);
  })

  //TAG FOracle fetch END Block
  const tagFOraclefetchEndBlock = new web3.eth.Contract(tagFLiquidityABI, TAGFOracleAddress)
  tagFOraclefetchEndBlock.methods.fetchEndBlock().call((err, result) => {
    setFOraclefetchEndBlock(result);
  })

  //TAG FOracle fetch Start Block
  const tagFOraclefetchStartBlock = new web3.eth.Contract(tagFLiquidityABI, TAGFOracleAddress)
  tagFOraclefetchStartBlock.methods.fetchStartBlock().call((err, result) => {
    setFOraclefetchStartBlock(result);
  })

  //TAG FOracle pending
  const tagFOraclepending = new web3.eth.Contract(tagFLiquidityABI, TAGFOracleAddress)
  tagFOraclepending.methods.pending().call((err, result) => {
    setFOraclepending(web3.utils.fromWei(result, 'ether'));
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
              <div className="mt-5 rounded-t bg-white mb-0 px-6 py-6 mx-4">
                <div className="text-center flex justify-between">
                  <h6 className="text-blueGray-700 text-xl font-bold">TagLPFarm</h6>
                  <button
                    className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                    type="button"
                  >
                    <a target="_blank" href="https://bscscan.com/address/0xB609853B9C81D199338605a19ba1bC7e630f289E">
                    0xB609853...30f289E</a>
                  </button>
                </div>
              </div>

              <div className="flex flex-wrap">
              <div className="mt-5 w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="POOL Length"
                  statTitle="49,65%"
                  statArrow=""
                  statPercent={
                    <NumericFormat
                      value={TAGLPFarmpoolLength}
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
                  statSubtitle="Reward Per Block"
                  statTitle="49,65%"
                  statArrow=""
                  statPercent={
                    <NumericFormat
                      value={TAGLPFarmrewardPerBlock}
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
                  statSubtitle="Start Block"
                  statTitle="49,65%"
                  statArrow=""
                  statPercent={<a target="_blank" href={"https://bscscan.com/block/countdown/" + TAGLPFarmstartBlock}>{TAGLPFarmstartBlock}</a>}
                      
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
                  statPercent={<a target="_blank" href={"https://bscscan.com/block/countdown/" + TAGLPFarmendBlock}>{TAGLPFarmendBlock}</a>}
                  statPercentColor="text-emerald-500"
                  statDescripiron=""
                  statIconName="fas fa-percent"
                  statIconColor="bg-lightBlue-500"
                />
              </div>
              <div className="mt-5 w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="Paid Out"
                  statTitle="49,65%"
                  statArrow=""
                  statPercent={
                    <NumericFormat
                      value={TAGLPFarmpaidOut}
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
                  statSubtitle="Total Pending"
                  statTitle="49,65%"
                  statArrow=""
                  statPercent={
                    <NumericFormat
                      value={TAGLPFarmtotalPending}
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
                  statPercent={
                    <NumericFormat
                      value={TAGLPFarmtotalAllocPoint}
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
                  <h6 className="text-blueGray-700 text-xl font-bold">TagTreasury</h6>
                  <button
                    className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                    type="button"
                  >
                    <a target="_blank" href="https://bscscan.com/address/0xA0961c56A7695336a4aD651639d094Be4EEFC1dd">
                    0xA0961c5.......EEFC1dd</a>
                  </button>
                </div>
              </div>

              <div className="flex flex-wrap">
              <div className="mt-5 w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="Curentctr"
                  statTitle="49,65%"
                  statArrow=""
                  statPercent={TAGTreasurycurrentctr}
                  statPercentColor="text-emerald-500"
                  statDescripiron=""
                  statIconName="fas fa-percent"
                  statIconColor="bg-lightBlue-500"
                />
              </div>
              <div className="mt-5 w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="Fetch Burn Ratio"
                  statTitle="49,65%"
                  statArrow=""
                  statPercent={TAGTreasuryfetchBurnRatio}
                  statPercentColor="text-emerald-500"
                  statDescripiron=""
                  statIconName="fas fa-percent"
                  statIconColor="bg-lightBlue-500"
                />
              </div>
              <div className="mt-5 w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="Fetch Price"
                  statTitle="49,65%"
                  statArrow=""
                  statPercent={TAGTreasuryfetchPrice}
                  statPercentColor="text-emerald-500"
                  statDescripiron=""
                  statIconName="fas fa-percent"
                  statIconColor="bg-lightBlue-500"
                />
              </div>
              <div className="mt-5 w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="Fetch Baserate"
                  statTitle="49,65%"
                  statArrow=""
                  statPercent={TAGTreasuryfetchBaserate}
                  statPercentColor="text-emerald-500"
                  statDescripiron=""
                  statIconName="fas fa-percent"
                  statIconColor="bg-lightBlue-500"
                />
              </div>
              <div className="mt-5 w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="Fetch Max level"
                  statTitle="49,65%"
                  statArrow=""
                  statPercent={TAGTreasuryfetchMaxlevel}
                  statPercentColor="text-emerald-500"
                  statDescripiron=""
                  statIconName="fas fa-percent"
                  statIconColor="bg-lightBlue-500"
                />
              </div>
              <div className="mt-5 w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="inc"
                  statTitle="49,65%"
                  statArrow=""
                  statPercent={TAGTreasuryinc}
                  statPercentColor="text-emerald-500"
                  statDescripiron=""
                  statIconName="fas fa-percent"
                  statIconColor="bg-lightBlue-500"
                />
              </div>
              <div className="mt-5 w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="Price inc"
                  statTitle="49,65%"
                  statArrow=""
                  statPercent={TAGTreasuryPriceinc}
                  statPercentColor="text-emerald-500"
                  statDescripiron=""
                  statIconName="fas fa-percent"
                  statIconColor="bg-lightBlue-500"
                />
              </div>
            </div>

            <div className="mt-5 rounded-t bg-white mb-0 px-6 py-6 mx-4">
                <div className="text-center flex justify-between">
                  <h6 className="text-blueGray-700 text-xl font-bold">TAGStaking</h6>
                  <button
                    className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                    type="button"
                  >
                    <a target="_blank" href="https://bscscan.com/address/0xA047CbB36Aa512b654D3A99aEaa2D61DAd6dff26">
                    0xA047CbB36A.......Ad6dff26</a>
                  </button>
                </div>
              </div>

              <div className="flex flex-wrap">
              <div className="mt-5 w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="fetch CliamID"
                  statTitle="49,65%"
                  statArrow=""
                  statPercent={TAGStakingfetchClaimID}
                  statPercentColor="text-emerald-500"
                  statDescripiron=""
                  statIconName="fas fa-percent"
                  statIconColor="bg-lightBlue-500"
                />
              </div>
              <div className="mt-5 w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="fetch cooldown block"
                  statTitle="49,65%"
                  statArrow=""
                  statPercent={TAGStakingfetchCooldownBlock}
                  statPercentColor="text-emerald-500"
                  statDescripiron=""
                  statIconName="fas fa-percent"
                  statIconColor="bg-lightBlue-500"
                />
              </div>
              <div className="mt-5 w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="Fetch fees"
                  statTitle="49,65%"
                  statArrow=""
                  statPercent={TAGStakingfetchFees}
                  statPercentColor="text-emerald-500"
                  statDescripiron=""
                  statIconName="fas fa-percent"
                  statIconColor="bg-lightBlue-500"
                />
              </div>
              <div className="mt-5 w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="Fetch NFT Limit"
                  statTitle="49,65%"
                  statArrow=""
                  statPercent={TAGStakingfetchNFTLimit}
                  statPercentColor="text-emerald-500"
                  statDescripiron=""
                  statIconName="fas fa-percent"
                  statIconColor="bg-lightBlue-500"
                />
              </div>
            </div>

            <div className="mt-5 rounded-t bg-white mb-0 px-6 py-6 mx-4">
                <div className="text-center flex justify-between">
                  <h6 className="text-blueGray-700 text-xl font-bold">TagFLiquidity</h6>
                  <button
                    className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                    type="button"
                  >
                    <a target="_blank" href="https://bscscan.com/address/0x331a73Af449ef78cd17C0C24d10B6486eCa21d60">
                    0x331a73Af4...........eCa21d60</a>
                  </button>
                </div>
              </div>

              <div className="flex flex-wrap">
              <div className="mt-5 w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="fetch Start Block"
                  statTitle="49,65%"
                  statArrow=""
                  statPercent={<a target="_blank" href={"https://bscscan.com/block/countdown/" + FLiquidityfetchStartBlock}>{FLiquidityfetchStartBlock}</a>}
                  statPercentColor="text-emerald-500"
                  statDescripiron=""
                  statIconName="fas fa-percent"
                  statIconColor="bg-lightBlue-500"
                />
              </div>
              <div className="mt-5 w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="fetch Current Block"
                  statTitle="49,65%"
                  statArrow=""
                  statPercent={<a target="_blank" href={"https://bscscan.com/block/countdown/" + FLiquidityfetchCurrentBlock}>{FLiquidityfetchCurrentBlock}</a>}
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
                  statPercent={<a target="_blank" href={"https://bscscan.com/block/countdown/" + FLiquidityfetchEndBlock}>{FLiquidityfetchEndBlock}</a>}
                  statPercentColor="text-emerald-500"
                  statDescripiron=""
                  statIconName="fas fa-percent"
                  statIconColor="bg-lightBlue-500"
                />
              </div>
              <div className="mt-5 w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="Pending"
                  statTitle="49,65%"
                  statArrow=""
                  statPercent={FLiquiditypending}
                  statPercentColor="text-emerald-500"
                  statDescripiron=""
                  statIconName="fas fa-percent"
                  statIconColor="bg-lightBlue-500"
                />
              </div>
            </div>

            <div className="mt-5 rounded-t bg-white mb-0 px-6 py-6 mx-4">
                <div className="text-center flex justify-between">
                  <h6 className="text-blueGray-700 text-xl font-bold">TagFMigration</h6>
                  <button
                    className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                    type="button"
                  >
                    <a target="_blank" href="https://bscscan.com/address/0xD570C1284FA7C33800eeBA82AA245229467fC734">
                    0xD570C128............467fC734</a>
                  </button>
                </div>
              </div>

              <div className="flex flex-wrap">
              <div className="mt-5 w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="fetch Start Block"
                  statTitle="49,65%"
                  statArrow=""
                  statPercent={<a target="_blank" href={"https://bscscan.com/block/countdown/" + FMigrationfetchStartBlock}>{FMigrationfetchStartBlock}</a>}
                  statPercentColor="text-emerald-500"
                  statDescripiron=""
                  statIconName="fas fa-percent"
                  statIconColor="bg-lightBlue-500"
                />
              </div>
              <div className="mt-5 w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="fetch Current Block"
                  statTitle="49,65%"
                  statArrow=""
                  statPercent={<a target="_blank" href={"https://bscscan.com/block/countdown/" + FMigrationfetchCurrentBlock}>{FMigrationfetchCurrentBlock}</a>}
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
                  statPercent={<a target="_blank" href={"https://bscscan.com/block/countdown/" + FMigrationfetchEndBlock}>{FMigrationfetchEndBlock}</a>}
                  statPercentColor="text-emerald-500"
                  statDescripiron=""
                  statIconName="fas fa-percent"
                  statIconColor="bg-lightBlue-500"
                />
              </div>
              <div className="mt-5 w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="Pending"
                  statTitle="49,65%"
                  statArrow=""
                  statPercent={FMigrationpending}
                  statPercentColor="text-emerald-500"
                  statDescripiron=""
                  statIconName="fas fa-percent"
                  statIconColor="bg-lightBlue-500"
                />
              </div>
            </div>

            <div className="mt-5 rounded-t bg-white mb-0 px-6 py-6 mx-4">
                <div className="text-center flex justify-between">
                  <h6 className="text-blueGray-700 text-xl font-bold">TagFOracle</h6>
                  <button
                    className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                    type="button"
                  >
                    <a target="_blank" href="https://bscscan.com/address/0x9B813B3E6cF2B27593CD8397deAeB6842D2e9df9">
                    0x9B813B3...........D2e9df9</a>
                  </button>
                </div>
              </div>

              <div className="flex flex-wrap">
              <div className="mt-5 w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="fetch Start Block"
                  statTitle="49,65%"
                  statArrow=""
                  statPercent={<a target="_blank" href={"https://bscscan.com/block/countdown/" + FOraclefetchStartBlock}>{FOraclefetchStartBlock}</a>}
                  statPercentColor="text-emerald-500"
                  statDescripiron=""
                  statIconName="fas fa-percent"
                  statIconColor="bg-lightBlue-500"
                />
              </div>
              <div className="mt-5 w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="fetch Current Block"
                  statTitle="49,65%"
                  statArrow=""
                  statPercent={<a target="_blank" href={"https://bscscan.com/block/countdown/" + FOraclefetchCurrentBlock}>{FOraclefetchCurrentBlock}</a>}
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
                  statPercent={<a target="_blank" href={"https://bscscan.com/block/countdown/" + FOraclefetchEndBlock}>{FOraclefetchEndBlock}</a>}
                  statPercentColor="text-emerald-500"
                  statDescripiron=""
                  statIconName="fas fa-percent"
                  statIconColor="bg-lightBlue-500"
                />
              </div>
              <div className="mt-5 w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="Pending"
                  statTitle="49,65%"
                  statArrow=""
                  statPercent={FOraclepending}
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
