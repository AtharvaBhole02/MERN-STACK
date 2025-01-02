import React from "react";
import "./../styles/Gallery.css";

const Gallery = () => {
  return (
    <section id="gallery" className="gallery">
      <h2 style={{color:"black"}}>Gallery</h2>
      <div className="images">
        <div className="image-box"><img class="img"  src="https://th.bing.com/th/id/OIP.STM7y0W7eDTSwWUgrj7ZPQHaHa?w=174&h=180&c=7&r=0&o=5&pid=1.7" alt="" /></div>
        <div className="image-box"><img class="img" src="https://th.bing.com/th/id/OIP.SlWtwq7d8s26m1q2fFYahQHaHP?w=179&h=180&c=7&r=0&o=5&pid=1.7" alt="" /> </div>
        <div className="image-box"><img class="img" src="https://th.bing.com/th/id/OIP.WIVIXMxMuYhk2c3s-1x_ZQHaHk?w=173&h=180&c=7&r=0&o=5&pid=1.7" alt="" /></div>
      </div>
      <br /><br /><br />
    </section>
  );
};

export default Gallery;
