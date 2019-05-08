import React from 'react';
import $ from 'jquery';

class Preview extends React.Component {
    constructor(props) {
        super(props);
        this.max_page = Math.ceil(this.props.youtubes.length / 4) - 1;
        this.current_page = 0;
        this._setYotubeInfo = this._setYotubeInfo.bind(this);
        this._previewNext = this._previewNext.bind(this);
        this._previewPrev = this._previewPrev.bind(this);
        this._setMaxString = this._setMaxString.bind(this);
      }
 
      _setYotubeInfo(e){
        this.props._onYutubeLoader(e.target.id);
      }

      _previewNext(){
        
        if(this.current_page >= this.max_page){
          this.current_page = this.max_page;
        }else{
          let targetPage = (++this.current_page) * -100;
          $('#' + this.props.galleryId).animate({
            left: targetPage + "%"
          },500);
        }
      }

      _previewPrev(){
        if(this.current_page <= 0){
          this.current_page = 0;
        }else{
          let targetPage = (--this.current_page) * -100;
          $('#' + this.props.galleryId).animate({
            left: targetPage + "%"
          },500);
        }
      }

      _setMaxString(str){
        if(str.length <= 20) {
          return str;
        }else{
          return str.substring(0, 19) + '..';
        }
      }
      
      render () {
        return (
            <div class="preview_whole">
              <div className='preview_btn_wrapper'>
                <div className="left_arrow">
                  <span className="css-arrow-left" onClick={this._previewPrev}></span>
                </div>
                <div className="right_arrow">
                  <span className="css-arrow-right" onClick={this._previewNext}></span>
                </div>
              </div>
              <div className='preview_wrap'>
                <div className='preview_wrapper'>
                  <div className='preview_wrap_in' id={this.props.galleryId}>
                      <ul className='preview_list'>
                        {this.props.youtubes.map(image => {
                            const imgSrc = 'https://img.youtube.com/vi/' + image.id + '/hqdefault.jpg';
                            const previewTitle = this._setMaxString(image.title);
                            const previewDescrp = this._setMaxString(image.descrp);
                            return (
                                  <li key={image.id} onClick={this._setYotubeInfo} >
                                    <div className='previewImgDiv'>
                                      <img src={imgSrc}  id={image.id} className='previewCover' />
                                    </div>
                                    <div>
                                      <div className='preview_title'>{previewTitle}</div>
                                      <div className='preview_descrp'>{previewDescrp}</div>
                                    </div>
                                  </li>
                            )
                        })}
                      </ul>
                  </div>
                </div>
              </div>
            </div>
        )
      }
  }

  export default Preview;