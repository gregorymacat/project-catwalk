import React from 'react';

class PhotoModal extends React.Component {
  render() {
    const { submit, children } = this.props;

    return (
      <div className="photoMod">
        <div className="photoPopout">
          <button className="photoModalClose" onClick={submit}>&times;</button>
          {children}
        </div>
      </div>
    );
  }
}

export default PhotoModal;