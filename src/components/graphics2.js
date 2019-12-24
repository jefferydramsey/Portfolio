import React from 'react';
import ReactDOM from "react-dom";
import axios from "axios";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";


class Graphics2 extends React.Component {
  state = {
    images: null
  };

  async componentDidMount() {
    
    const response = await axios.get(
      "https://google-photos-album-demo.glitch.me/ddMYqAoaZmuWKPQ48"
    );
    if (response && response.data && response.data.length > 0) {
      this.setState({
        images: response.data.map(url => ({
          original: `${url}=w1024`,
          thumbnail: `${url}=w100`
        }))
      });
    }
  }


  render() {
    const { images } = this.state;
    return images ? <ImageGallery items={images} /> : null; 

    
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Graphics2/>, rootElement);


    

export default Graphics2;