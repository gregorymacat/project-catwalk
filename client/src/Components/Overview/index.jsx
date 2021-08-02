import React from 'react'
import styles from './styles.js'
import StarsDisplay from '../Shared/StarsDisplay.jsx'
import axios from 'axios'
import {getOneProduct, getProductStyle} from '../../../Controllers/general.js';
// import testStyle from './dummy-style.js';
// import Carousel from './components/Shared/Carousel/Carousel.jsx';
// import testProduct from '../../dummy-product.js';
// import {stylesArray} from '../../dummy-style.js';
export default class Overview extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      addedToCart: false,
      quantity: 1,
      selectedSize: 'Select Size',
      product: {},
      styles: [],
      selectedStyle: {},
      styleSelectError: false,
      selectedQuantity: '-'
    }
    this.addToCart = this.addToCart.bind(this)
    this.changeQuantity = this.changeQuantity.bind(this)
    this.changeSelectedSize = this.changeSelectedSize.bind(this)
    this.changeSelectedStyle = this.changeSelectedStyle.bind(this)
    this.getSizeQuantity = this.getSizeQuantity.bind(this)
  }
  componentDidMount(){
    getOneProduct("17067", (err, results) => {
      if (err) {
        return console.log('Unable to get a product: ', err)
      }
      getProductStyle(results.id, (err, styles) => {
        console.log("STYYYYYYYYLES", styles)
        if (err) {
          return console.log('Unable to get styles', err)
        }
        this.setState({
          product: results,
          styles: styles.results,
          selectedStyle: styles.results[0]
        });
      })
    })

  }
  addToCart() {
    if (this.state.selectedSize === 'Select Size') {
      this.setState({
        styleSelectError: true
      })
      return;
    }
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
  getSizeQuantity(inventory) {
    //make sure skus is defined
    // const inventory = this.state.selectedStyle.skus ? Object.values(this.state.selectedStyle.skus) : []
    // if (inventory.length) {
    //   return inventory.filter((sku) => {
    //     return sku.size === this.state.selectedSize
    //   })
    // }
    for (var i = 0; i < inventory.length; i++) {
      if (inventory[i].size === this.state.selectedSize) {
        return inventory[i].quantity
      }
    }
    return 0
    // console.log("INVENTORY:::", inventory)
    // console.log("SELECTED SIZE", this.state.selectedSize)
  }
  changeSelectedStyle(index) {
    this.setState({
      selectedStyle: this.state.styles[index],
      sizeQuantity: 1
    })
  }
  render() {
    // console.log("SELECTED STYLE::::", this.state.selectedStyle)
    // console.log("STATE::::::", this.state)
    var inventory = this.state.selectedStyle.skus ? Object.values(this.state.selectedStyle.skus) : []
    const sizeQuantity = Array.from(Array(this.getSizeQuantity(inventory)).keys())
    // console.log("SIZE QUANTITY", sizeQuantity)
    // console.log("INVENTORY::::::", inventory)
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
                  <StarsDisplay starsData={3.6}/>
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
                  {this.state.styleSelectError ? <p style={styles.errorMsg}>Please Select A Size</p> : <></>}
                  <select name="SelectedSize"
                    value={this.state.selectedSize}
                    style={styles.select}
                    onChange={this.changeSelectedSize}>
                    <option value="Select A Size">Select A Size</option>
                    {inventory.map((style, index) => {
                      return (style.quantity > 0 ? <option value={style.size}>{style.size}</option> : <></>
                        )})}
                  </select>
                  <select
                    name="quantity"
                    value={this.state.quantity}
                    style={styles.select}
                    onChange={this.changeQuantity}
                  >
                    {sizeQuantity.map((quantity, index) => {
                      return <option value={quantity}>{quantity}</option>
                    })}
                  </select>
                </div>
                  <div>
                  {
                    this.state.addedToCart ?
                    <p style={styles.addedToCart}>Added To Cart</p> :
                    <button style={styles.addToCartButton} onClick={this.addToCart}>
                      Add To Bag
                    </button>
                  }
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
      )
  }
}