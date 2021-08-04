import React from 'react';
import Modal from './Modal.jsx';


class ModalViewer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayModal: false
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    var id = event.target.id;
    if (id === 'open') {
      this.setState({displayModal: true});
    } else if (id === 'close') {
      this.setState({displayModal: false});
    }
  }

  render () {
    return (
      <React.Fragment>
        <div className='test-modal'>
          <Modal product_id={this.props.data} characteristics={this.props.metaData.characteristics} click={this.handleClick} display={this.state.displayModal}/>
          <button className="button-RR rating-reviews-button-form" id='open' onClick={this.handleClick}>Add A Review</button>
        </div>
      </React.Fragment>
    )
  }
}

export default ModalViewer;

/*
Put these in the proper spots in app if you want a small example of how this works

<ModalViewer/>
import ModalViewer from './Components/Shared/Modal/ModalViewer.jsx';
*/
