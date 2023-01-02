// SPDX-License-Identifier: MIT
pragma solidity ^0.8.12;

//@author Ross B
//@title SouldaNext - RandomNumber

import "@chainlink/contracts/src/v0.8/interfaces/VRFCoordinatorV2Interface.sol";
import "@chainlink/contracts/src/v0.8/VRFConsumerBaseV2.sol";

contract RandomNumber is VRFConsumerBaseV2 {
    bytes32 internal keyHash;
    uint internal fee;
    uint public randomResult;
   
      constructor()   {
            VRFConsumerBaseV2(
            0x2Ca8E0C643bDe4C2E08ab1fA0da3401AdAD7734D, //VRF Coordinator
            0x326C977E6efc84E512bB9C30f76E30c160eD06FB, //Link Token
             ) {
            keyHash = 0x79d3d8832d904592c0bf9818b621522c988bb8b0c05cdc3b15aea1b6e8db0c15;
            fee = 0.25 * 10 ** 18; //0.25 LINK
     }
      }

        function getRandomNumber() public returns (bytes32 requestID) {
            require (LINK.balanceOf(address(this)) >= fee, "Not enough LINK in contract");
            return requestRandomness(keyHash, fee);
        }

        function fulfillRandomness(bytes32 requestId, uint randomness) internal override {
            randomResult = randomness.mod(3888).add(1);
        }

