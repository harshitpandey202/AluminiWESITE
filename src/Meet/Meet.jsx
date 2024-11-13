import "./Meet.css"
import img62 from "./model-img.jpg";
import img63 from "./IMG_20241113_233917.jpg"
import img64 from "./IMG_20241113_235540.jpg"


export default function Meet(){
    return(
    <div className="meet">
        <div className="meet-left">
           <div className="meet-modeldiv"><img src={img62} alt="" className="meet-modelimg" /></div> 
            <div className="meet-left-sub">
                <div className="sub-left">
                    <img src={img63} alt="" className="sub-leftimg" />
                </div>
                <div className="sub-right">
                    <p className="dfsedf"><b>Health Check</b></p>
                    <p>Cat And Dog</p>
                </div>
                </div> 

                <div className="meet-left-sub2">
                <div className="sub-left">
                    <img src={img63} alt="" className="sub-leftimg2" />
                </div>
                <div className="sub-right2">
                    <p className="dfsedf"><b>Health Check</b></p>
                    <p>Cat And Dog</p>
                </div>
                </div> 




        </div>
        <div className="meet-right">
            <p className="meet-tilte">Meet Our <br />Professional Trainers</p>
            
            <p className="meet-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias quia excepturi tempora quidem quasi amet, iusto maiores temporibus ipsam sed, placeat eveniet unde, provident repudiandae. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores, temporibus!</p>
          
          <div className="weeeee">
           <img src={img64} alt="" className="meet-icon" />
            <p className="meet-imgtitle">Jenny Wilton</p>
            <p className="meeet-imgsubtitle">Cheif of Team</p>
            </div>
        </div>
    </div>)
}