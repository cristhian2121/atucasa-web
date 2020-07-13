import React from "react";

export const ElementDetail = ({ image, title, subTitle, Content, price }) => {
  return (
    <div classNameName="single">
      <div className="container">
        <div className="single-top-main">
          <div className="col-md-5 single-top">
            <div className="single-w3agile">
              <div id="picture-frame">
                <img
                  src={image}
                  data-src="images/si-1.jpg"
                  alt=""
                  className="img-responsive"
                />
              </div>
              {/* <script src="js/jquery.zoomtoo.js"></script> */}
              {/* $(function() {
				$("#picture-frame").zoomToo({
					magnify: 1
				});
			}); */}
            </div>
          </div>
          <div className="col-md-7 single-top-left ">
            <div className="single-right">
              <h3>{title}</h3>

              {price && (
                <div className="pr-single">
                  <p className="reduced ">
                    <del>${price.total}</del>${price.descount}
                  </p>
                </div>
              )}
              <div className="block block-w3">
                <div className="starbox small ghosting"> </div>
              </div>

              {/* Content */}
              {Content}

              {/* Social tap */}
              {/* <ul className="social-top">
                <li>
                  <a href="#" className="icon facebook">
                    <i className="fa fa-facebook" aria-hidden="true"></i>
                    <span></span>
                  </a>
                </li>
                <li>
                  <a href="#" className="icon twitter">
                    <i className="fa fa-twitter" aria-hidden="true"></i>
                    <span></span>
                  </a>
                </li>
                <li>
                  <a href="#" className="icon pinterest">
                    <i className="fa fa-pinterest-p" aria-hidden="true"></i>
                    <span></span>
                  </a>
                </li>
                <li>
                  <a href="#" className="icon dribbble">
                    <i className="fa fa-dribbble" aria-hidden="true"></i>
                    <span></span>
                  </a>
                </li>
              </ul> */}
              {price && (
                <div className="add add-3">
                  <button
                    className="btn btn-danger my-cart-btn my-cart-b"
                    data-id="1"
                    data-name="Wheat"
                    data-summary="summary 1"
                    data-price="6.00"
                    data-quantity="1"
                    data-image="images/si.jpg"
                  >
                    Add to Cart
                  </button>
                </div>
              )}

              <div className="clearfix"> </div>
            </div>
          </div>
          <div className="clearfix"> </div>
        </div>
      </div>
    </div>
  );
};
