import React from 'react'

export default class Overview extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <>
        <div>
        {this.props.product.name}
        </div>
        <div>
        {this.props.product.description}
        </div>
        <div>
        {this.props.product.default_price}
        </div>
      </>
    )
  }
}
