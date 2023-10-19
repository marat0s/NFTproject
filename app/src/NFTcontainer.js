import React from "react";
import NFTshow from "./NFTshow";
import './/NFT.css';

const NFTcontainer = ({ nfts }) => {
    return (
        <div className="nft-container">
            {nfts.map((nft, index)=> {return <NFTshow nft={nft} key = {index}/>})}
        </div>
    );
}

export default NFTcontainer;