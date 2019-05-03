import React from 'react';
import Preview from './Preview';
import YoutubeViewer from './YotubeViewer'
import './index.css';

class Gallery extends React.Component {
    constructor(props) {
        super(props);

        /**
         * Set up dafault state
         * currentYtbId : which youtube will be loaded
         * displayFlag : Flag whether youtube player displayed or not 
         **/
        this.state = {
          currentYtbId : null,
          displayFlag : false
        }

        this._onYutubeLoader = this._onYutubeLoader.bind(this);
        this._onYutubeCloser = this._onYutubeCloser.bind(this);
      }

      _onYutubeLoader(currentYtbId) {
        this.setState({
          currentYtbId : currentYtbId,
          displayFlag : true
        });
      }

      _onYutubeCloser() {
        this.setState({
          displayFlag : false
        });
      }

      render () {
          if(this.props.youtubes.length > 50) {
            console.error('Component can display up to 50 clips :: you set ' + this.props.youtubes.length + ' clips up');
            return (null);
          }else {
            return (
              <div>
                  <div className="yotube_player">
                    <YoutubeViewer youtubeInfo={this.state} _onYutubeCloser={this._onYutubeCloser} />
                  </div>
                  <Preview youtubes={this.props.youtubes} galleryId={this.props.galleryId} _onYutubeLoader={this._onYutubeLoader}></Preview>
              </div>
            )
        }
      }
  };

  export default Gallery;