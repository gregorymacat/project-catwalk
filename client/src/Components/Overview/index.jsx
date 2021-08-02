import React from 'react'
import styles from './styles.js'
import StarsDisplay from '../Shared/StarsDisplay.jsx'
import axios from 'axios'
import {getOneProduct} from '../../../Controllers/general.js';
// import testStyle from './dummy-style.js';
// import Carousel from './components/Shared/Carousel/Carousel.jsx';
import testProduct from '../../dummy-product.js';
import {stylesArray} from '../../dummy-style.js';
<<<<<<< HEAD

=======
>>>>>>> 95ccdc50434074715a6d4a4ae9c7d0f194f7eced
export default class Overview extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      addedToCart: false,
      quantity: 1,
      selectedSize: 'Select Size',
      product: testProduct,
      styles: stylesArray,
      selectedStyle: {}
    }
    this.addToCart = this.addToCart.bind(this)
    this.changeQuantity = this.changeQuantity.bind(this)
    this.changeSelectedSize = this.changeSelectedSize.bind(this)
    this.changeSelectedStyle = this.changeSelectedStyle.bind(this)
  }
  componentDidMount(){
    getOneProduct(this.props.product.toString(), (err, results) => {
      if (err) {
        return console.log('Unable to get a product: ', err)
      }
      this.setState({product: results});
    })
  }
  addToCart() {
    axios.post('/cart', {
      "sku_id": this.state.product.id,
      "count": this.state.quantity,
      "size": this.state.selectedSize
    })
    .then((data)=>{
      this.setState({
        addedToCart: true
      })
      // console.log('data::', data)
    })
    .catch(()=>{
      console.log('Error')
    })
  }
  changeQuantity(event) {
    this.setState({
      quantity: Number(event.target.value)
    })
  }
  changeSelectedSize(event) {
    this.setState({
      selectedSize: event.target.value
    })
  }
  changeSelectedStyle(index) {
    this.setState({
      selectedStyle: stylesArray[index]
    })
  }
  render() {
<<<<<<< HEAD
    // console.log("PRODUCT", this.state.product)
    console.log("STYLE", this.state.selectedStyle)
=======
    var sku = 599567
    // console.log("PRODUCT", this.state.product)
    console.log("STYLES", this.state.selectedStyle.skus)
>>>>>>> 95ccdc50434074715a6d4a4ae9c7d0f194f7eced
    return (
      // overview is the container component, flex direction is set to column, so the page reads top to bottom
      <div style={styles.overview}>
        {/*
          from top to bottom:
          first row "section" includes carousel and product info, style selection
          flex direction set to "row" to read from left to right, carousel and info each taking 50% width
        */}
        <div style={styles.row}>
          <div style={styles.carousel}>
          {this.state.selectedStyle.photos && <img src={this.state.selectedStyle.photos[0].thumbnail_url}></img>}
          </div>
          <div style={styles.productInfo}>
            <div style={styles.rating}>
                <StarsDisplay starsData={5}/>
                <a href="#RatingsReviews">Read All Reviews</a>
            </div>
            <p>{this.state.product.category}</p>
            <h1>{this.state.product.name}</h1>
            <p>${this.state.selectedStyle.original_price || this.state.product.default_price}</p>
            <div style={styles.productStyle}>
              <div>
                <p>Style &gt; {this.state.selectedStyle.name || "Selected Style"}</p>
              </div>
              <div style={styles.colorCircles}>
                {this.state.styles.map((styleObj, index) => {
                  return <div onClick={() => this.changeSelectedStyle(index)}>
                    <img style={styles.circle} src={styleObj.photos[0].thumbnail_url}></img>
                  </div>
                })}
                {/* <div style={styles.circle}></div>
                <div style={styles.circle}></div>
                <div style={styles.circle}></div>
                <div style={styles.circle}></div>
                <div style={styles.circle}></div> */}
              </div>
              <div>
                <select
                  name="quantity"
                  value={this.state.quantity}
                  style={styles.select}
                  onChange={this.changeQuantity}
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                  <option value="11">11</option>
                  <option value="12">12</option>
                  <option value="13">13</option>
                  <option value="14">14</option>
                  <option value="15">15</option>
                </select>
                <select name="SelectedSize"
                  value={this.state.selectedSize}
                  style={styles.select}
                  onChange={this.changeSelectedSize}>
                  <option value="Select A Size">Select A Size</option>
                  {/* <option value="XS">{this.state.selectedStyle.skus[599567].size || "XS"}</option>
                  <option value="S">{this.state.selectedStyle.skus[599568].size || "S"}</option>
                  <option value="M">{this.state.selectedStyle.skus[599569].size || "M"}</option>
                  <option value="L">{this.state.selectedStyle.skus[599570].size || "L"}</option>
                  <option value="XL">{this.state.selectedStyle.skus[599571].size || "XL"}</option>
                  <option value="XXL">{this.state.selectedStyle.skus[599572].size || "XXL"}</option> */}
                </select>
                {
                  this.state.addedToCart ?
                  <p style={styles.addedToCart}>Added To Cart</p> :
                  <button style={styles.addToCartButton} onClick={this.addToCart}>
                    Add To Bag
                  </button>
                }
{/*
                <button>
                  *
                </button> */}
                <div class="fb-share-button" data-href="https://developers.facebook.com/docs/plugins/" data-layout="button" data-size="small"><a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&amp;src=sdkpreparse" class="fb-xfbml-parse-ignore">Share</a></div>
                <a class="twitter-share-button"
                href="https://twitter.com/intent/tweet?text=Hello%20world">
                Tweet</a>
                <a href="https://www.pinterest.com/pin/create/button/" data-pin-do="buttonBookmark">
                </a>
              </div>
            </div>
          </div>
        </div>
        {/*
          second row "section" includes slogan, description, related items etc
        */}
        <div style={styles.row}>
          <div style={styles.productDetails}>
            <h1>{this.state.product.slogan}</h1>
            <p>{this.state.product.description}</p>
          </div>
        </div>
      </div>
    );
  }
}