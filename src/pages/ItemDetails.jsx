import React, { useEffect, useState } from "react";
import EthImage from "../images/ethereum.svg";
import { Link, useParams } from "react-router-dom";
import AuthorImage from "../images/author_thumbnail.jpg";
import nftImage from "../images/nftImage.jpg";
import axios from "axios";
<<<<<<< HEAD

function ItemDetails()  {

  const { nftId } = useParams(); // get nftId from the URL
  const [item, setItem] = useState([]);


    async function fetchItem()  {
        const {data} = await axios.get(`https://us-central1-nft-cloud-functions.cloudfunctions.net/itemDetails?nftId=${nftId}`);
        console.log(data)
        setItem(data);
      
    };



  useEffect(() => {
=======

const ItemDetails = () => {
 

    //because we're using dynamic route like /item/:nftId
   const { nftId } = useParams(); 
  const [itemDetail, setItemDeatil] = useState({})

   useEffect(() => {
>>>>>>> 9c62e3affc122badf7c01725bf810fd569d4983c
    window.scrollTo(0, 0);
    fetchItem()
  }, [nftId]);

  async function FetchItemDetail(nftId) {
    
    const {data} = await axios.get(`https://us-central1-nft-cloud-functions.cloudfunctions.net/itemDetails?nftId=${nftId || 17914494}`)
      setItemDeatil(data)
    
  }

  useEffect(() => {
    FetchItemDetail()
  },[nftId])


  return (
    <div id="wrapper">
      <div className="no-bottom no-top" id="content">
        <div id="top"></div>
        <section aria-label="section" className="mt90 sm-mt-0">
          <div className="container">
            <div className="row">
<<<<<<< HEAD

                {/* Left image */}
              <div className="col-md-6 text-center">
                <img
                  src={item.nftImage}
=======
                    {/* NFT Image */}
              <div className="col-md-6 text-center">
                <img
                  src={itemDetail.nftImage}
>>>>>>> 9c62e3affc122badf7c01725bf810fd569d4983c
                  className="img-fluid img-rounded mb-sm-30 nft-image"
                  alt={itemDetail.title}
                />
              </div>

<<<<<<< HEAD
               {/* Right details */}
              <div className="col-md-6">
                <div className="item_info">
                  <h2>{item.title} #{item.tag}</h2>
=======
                 {/* NFT Details */}
              <div className="col-md-6">
                <div className="item_info">
                  <h2>{itemDetail.title} #{itemDetail.tag}</h2>
>>>>>>> 9c62e3affc122badf7c01725bf810fd569d4983c

                  <div className="item_info_counts">
                    <div className="item_info_views">
                      <i className="fa fa-eye"></i>
<<<<<<< HEAD
                      {item.views}
                    </div>
                    <div className="item_info_like">
                      <i className="fa fa-heart"></i>
                      {item.likes}
                    </div>
                  </div>
                  <p>
                    {item.description}
=======
                     {itemDetail.views}
                    </div>
                    <div className="item_info_like">
                      <i className="fa fa-heart"></i>
                       {itemDetail.likes}
                    </div>
                  </div>
                  <p>
                  {itemDetail.description}
>>>>>>> 9c62e3affc122badf7c01725bf810fd569d4983c
                  </p>
                   {/* Owner */}
                  <div className="d-flex flex-row">
                    <div className="mr40">
                      <h6>Owner</h6>
                      <div className="item_author">
                        <div className="author_list_pp">
<<<<<<< HEAD
                          <Link to={`/author/${item.nftId}`}>
                            <img className="lazy" src={item.ownerImage} alt="" />
=======
                          <Link to={`/author/${itemDetail.ownerId}`}>
                            <img className="lazy" src={itemDetail.ownerImage} alt={itemDetail.ownerName}/>
>>>>>>> 9c62e3affc122badf7c01725bf810fd569d4983c
                            <i className="fa fa-check"></i>
                          </Link>
                        </div>
                        <div className="author_list_info">
<<<<<<< HEAD
                          <Link to={`/author/${item.nftId}`}>{item.ownerName}</Link>
=======
                           <Link to={`/author/${itemDetail.ownerId}`}> {itemDetail.ownerName}</Link>
>>>>>>> 9c62e3affc122badf7c01725bf810fd569d4983c
                        </div>
                      </div>
                    </div>
                    <div></div>
                  </div>
                       
                        {/* Creator */}
                  <div className="de_tab tab_simple">
                    <div className="de_tab_content">
                      <h6>Creator</h6>
                      <div className="item_author">
                        <div className="author_list_pp">
<<<<<<< HEAD
                          <Link to={`/author/${item.nftId}`}>
                            <img className="lazy" src={item.creatorImage} alt="" />
=======
                          <Link to={`/author/${itemDetail.creatorId}`}>
                            <img className="lazy" src={itemDetail.creatorImage} alt={itemDetail.creatorName} />
>>>>>>> 9c62e3affc122badf7c01725bf810fd569d4983c
                            <i className="fa fa-check"></i>
                          </Link>
                        </div>
                        <div className="author_list_info">
<<<<<<< HEAD
                          {/* ✅ Also link title properly */}
                          <Link to={`/item-details/${item.nftId}`}>
                           <h4>{item.title}</h4></Link>
=======
                          <Link to={`/author/${itemDetail.creatorId}`}>{itemDetail.creatorName}</Link>
>>>>>>> 9c62e3affc122badf7c01725bf810fd569d4983c
                        </div>
                      </div>
                    </div>
                    <div className="spacer-40"></div>

                     {/* Price */}
                    <h6>Price</h6>
                    <div className="nft-item-price">
<<<<<<< HEAD
                      <img src={EthImage} alt="" />
                      <span>{item.price}</span>
=======
                      <img src={EthImage} alt="ETH" />
                      <span>{itemDetail.price}</span>
>>>>>>> 9c62e3affc122badf7c01725bf810fd569d4983c
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ItemDetails;
