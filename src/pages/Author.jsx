import React, { useEffect, useState } from "react";
import AuthorBanner from "../images/author_banner.jpg";
import AuthorItems from "../components/author/AuthorItems";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

import SkeletonAll from "../components/UI/SkeletonAll"; // ✅ Import adaptive skeleton

const Author = () => {
  const { authorId } = useParams(); // get authorId from route param
  const [author, setAuthor] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isFollowing, setIsFollowing] = useState(false)

 useEffect(() => {
    // define async function inside useEffect
    const fetchAuthor = async () => {
      
        const { data } = await axios.get(`https://us-central1-nft-cloud-functions.cloudfunctions.net/authors?author=${authorId}`);
        console.log(data);
        setAuthor(data);
     setTimeout(() =>  setLoading(false), 4000);
       
      
    };

    fetchAuthor();
  }, [authorId]);



  // ✅ Skeleton loading layout
  if (loading) {
    return (
      <div id="wrapper">
        <div className="no-bottom no-top" id="content">
          <div id="top"></div>

          {/* Banner skeleton */}
          <section
            id="profile_banner"
            aria-label="section"
            className="text-light"
          >
            <div className="skeleton skeleton-banner w-100" style={{ height: "300px", background: "#eee" }}></div>
          </section>

          {/* Profile skeleton */}
          <section aria-label="section">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="d_profile de-flex align-items-center">
                    {/* Left: avatar + name */}
                    <div className="de-flex-col">
                      <div className="profile_avatar">
                        <div className="skeleton skeleton-avatar rounded-circle mb-3" style={{ width: "120px", height: "120px" }}></div>
                        <div className="profile_name">
                          <div className="skeleton skeleton-text mb-2" style={{ width: "160px", height: "20px" }}></div>
                          <div className="skeleton skeleton-text mb-2" style={{ width: "100px", height: "16px" }}></div>
                          <div className="skeleton skeleton-text" style={{ width: "180px", height: "16px" }}></div>
                        </div>
                      </div>
                    </div>

                    {/* Right: follow section */}
                    <div className="profile_follow de-flex">
                      <div className="de-flex-col">
                        <div className="skeleton skeleton-text mb-3" style={{ width: "120px", height: "18px" }}></div>
                        <div className="skeleton skeleton-button" style={{ width: "100px", height: "36px", borderRadius: "6px" }}></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* NFT items skeleton */}
                <div className="col-md-12 mt-5">
                  <div className="de_tab tab_simple">
                    <div className="row">
                      {[...Array(8)].map((_, i) => (
                        <div key={i} className="col-lg-3 col-md-6 col-sm-6 mb-4">
                          <SkeletonAll type="item" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }


  if (!author) {
    return <div className="text-center p-5">Author not found</div>;
  }

   const handleFollow = () => {
    if (!author) return;
    setIsFollowing(!isFollowing);

    setAuthor((prev) => ({
      ...prev,
      followers: isFollowing ? prev.followers - 1 : prev.followers + 1,
    }));
  };

   return (
    <div id="wrapper">
      <div className="no-bottom no-top" id="content">
        <div id="top"></div>

        {/* Banner */}
        <section
          id="profile_banner"
          aria-label="section"
          className="text-light"
          style={{ background: `url(${author.banner || AuthorBanner}) top` }}
        ></section>

        <section aria-label="section">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="d_profile de-flex">
                  {/* Profile avatar */}
                  <div className="de-flex-col">
                    <div className="profile_avatar">
                      <img src={author.authorImage} alt={author.authorName} />
                      <i className="fa fa-check"></i>

                      <div className="profile_name">
                        <h4>
                          {author.authorName}
                          <span className="profile_username">@{author.tag}</span>
                          <span id="wallet" className="profile_wallet">
                            {author.address}
                          </span>
                          <button
                            id="btn_copy"
                            title="Copy Wallet"
                            onClick={() =>
                              navigator.clipboard.writeText(author.address)
                            }
                          >
                            Copy
                          </button>
                        </h4>
                      </div>
                    </div>
                  </div>

                  {/* Followers + Follow button */}
                  <div className="profile_follow de-flex">
                    <div className="de-flex-col">
                      <div className="profile_follower">
                        {author.followers} followers
                      </div>
                      <button
                        className="btn-main"
                        onClick={handleFollow}
                      >
                        {isFollowing ? "Unfollow" : "Follow"}
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Author items */}
              <div className="col-md-12">
                <div className="de_tab tab_simple">
                  <AuthorItems items={author.nftCollection} author={author} />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Author;