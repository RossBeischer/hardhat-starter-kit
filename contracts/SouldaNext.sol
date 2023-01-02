// SPDX-License-Identifier: MIT
pragma solidity ^0.8.12;

//@author Ross B
//@title SouldaNext Lottery

import "@chainlink/contracts/src/v0.8/interfaces/VRFCoordinatorV2Interface.sol";
import "@chainlink/contracts/src/v0.8/VRFConsumerBaseV2.sol";

contract SouldaLottery is VRFConsumerBaseV2 {
    address public owner;
    address payable[] public players;
    uint public lotteryId;
    mapping (uint => address payable) public lotteryHistory;

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

            owner = msg.sender;
            lotteryId = 1;
     }
      }

        function getRandomNumber() public returns (bytes32 requestID) {
            require (LINK.balanceOf(address(this)) >= fee, "Not enough LINK in contract");
            return requestRandomness(keyHash, fee);
        }

        function fulfillRandomness(bytes32 requestId, uint randomness) internal override {
            randomResult = randomness.mod(3888).add(1);
            payWinner();
        }


    function getWinnerByLottery(uint lottery) public view returns (address payable) {
        return lotteryHistory[lottery];
    }

    function getBalance() public view returns (uint) {
        return address(this).balance;
    }

    function getPlayers() public view returns (address payable[] memory) {
        return players;
    }

    function enter() public payable {
        require(msg.value > .01 ether);

        // I assume this wont be payable though as they are getting these for free?
        players.push(payable(msg.sender));
    }

   
     function pickWinner() public onlyowner {
     getRandomNumber();
    }

 function pickWinner() public onlyowner {
        uint index = randomResult % players.length;
        players[index].transfer(address(this).balance);

        lotteryHistory[lotteryId] = players[index];
        lotteryId++;
        

        // reset the state of the contract
        players = new address payable[](0);
    }

    }

    modifier onlyowner() {
      require(msg.sender == owner);
      _;
    }
