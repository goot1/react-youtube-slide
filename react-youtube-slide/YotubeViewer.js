import React from 'react';
import Modal from 'react-modal';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    border                : 'none',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    overflow : 'hidden',
    background : 'none'
  }
};

class YoutubeViewer extends React.Component {
    constructor(props) {
        super(props);
        this._setYoutubeClose = this._setYoutubeClose.bind(this);
      }

      _setYoutubeClose(){
        this.props._onYutubeCloser();
      }

      render () {
        let youtubeSrc = 'http://www.youtube.com/embed/' + this.props.youtubeInfo.currentYtbId+ '?autoplay=' + this.props.youtubeInfo.autoplay;
        
          if(this.props.youtubeInfo.displayFlag){
            return (
              <Modal 
                isOpen={true}
                style={customStyles}
                ariaHideApp={false}
              >
              <div>
                <span onClick={this._setYoutubeClose} className='css-cancel'></span>
                <iframe id="ytplayer" type="text/html" width="640" height="360" src={youtubeSrc} frameBorder="0" allowFullScreen='allowfullscreen'/>
              </div>
              </Modal>
            );
          }else{
            return (
              null
            );
          }
        
      }
  }

  export default YoutubeViewer;