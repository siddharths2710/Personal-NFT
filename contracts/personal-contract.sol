// SPDX-License-Identifier: MIT
pragma solidity >= 0.7.0;
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
contract SidContract is ERC721URIStorage, Ownable {
     using Counters for Counters.Counter;
     Counters.Counter private _tokenIds;
     constructor() ERC721("SidContract", "NFT"){}
 
    function mintNFT(address recipient, string memory tokenUri) public onlyOwner returns (uint256){
      _tokenIds.increment();
      uint256 newItemId = _tokenIds.current();
      _mint(recipient,newItemId);
      _setTokenURI(newItemId,tokenUri);
      return newItemId;
    }
 }

