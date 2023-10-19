import React from "react";
import './/NFT.css';

const NFTshow = ({ nft }) => {
    return (
        <div className="card nft-card">
            <img src={nft.meta.content[0].url} className="nft-image" />
            <div className="card contend">
                Contract Address:
            </div>
            <div className="card address">
                {nft.contract}
            </div>
            <div className="card contend">
                NFT Name:
            </div>
            <div className="card contend">
                {nft.meta.name}
            </div>
            <div className="card contend">
                Collection Description:
            </div>
            <div className="card contend">
                {nft.meta.description}
            </div>
        </div>
    );
}

export default NFTshow;