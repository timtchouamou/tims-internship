import React, { useEffect, useState } from "react";
import EthImage from "../images/ethereum.svg";
import { Link, useParams } from "react-router-dom";
import AuthorImage from "../images/author_thumbnail.jpg";
import nftImage from "../images/nftImage.jpg";
import axios from "axios";

const ItemDetails = () => {
 

    //because we're using dynamic route like /item/:nftId
   const { nftId } = useParams(); 
  const [itemDetail, setItemDeatil] = useState({})

   useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
                    {/* NFT Image */}
              <div className="col-md-6 text-center">
                <img
                  src={itemDetail.nftImage}
                  className="img-fluid img-rounded mb-sm-30 nft-image"
                  alt={itemDetail.title}
                />
              </div>

                 {/* NFT Details */}
              <div className="col-md-6">
                <div className="item_info">
                  <h2>{itemDetail.title} #{itemDetail.tag}</h2>

                  <div className="item_info_counts">
                    <div className="item_info_views">
                      <i className="fa fa-eye"></i>
                     {itemDetail.views}
                    </div>
                    <div className="item_info_like">
                      <i className="fa fa-heart"></i>
                       {itemDetail.likes}
                    </div>
                  </div>
                  <p>
                  {itemDetail.description}
                  </p>
                   {/* Owner */}
                  <div className="d-flex flex-row">
                    <div className="mr40">
                      <h6>Owner</h6>
                      <div className="item_author">
                        <div className="author_list_pp">
                          <Link to={`/author/${itemDetail.ownerId}`}>
                            <img className="lazy" src={itemDetail.ownerImage} alt={itemDetail.ownerName}/>
                            <i className="fa fa-check"></i>
                          </Link>
                        </div>
                        <div className="author_list_info">
                           <Link to={`/author/${itemDetail.ownerId}`}> {itemDetail.ownerName}</Link>
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
                          <Link to={`/author/${itemDetail.creatorId}`}>
                            <img className="lazy" src={itemDetail.creatorImage} alt={itemDetail.creatorName} />
                            <i className="fa fa-check"></i>
                          </Link>
                        </div>
                        <div className="author_list_info">
                          <Link to={`/author/${itemDetail.creatorId}`}>{itemDetail.creatorName}</Link>
                        </div>
                      </div>
                    </div>
                    <div className="spacer-40"></div>

                     {/* Price */}
                    <h6>Price</h6>
                    <div className="nft-item-price">
                      <img src={EthImage} alt="ETH" />
                      <span>{itemDetail.price}</span>
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
