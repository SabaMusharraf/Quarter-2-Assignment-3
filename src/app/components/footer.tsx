import Link from "next/link";
import Image from "next/image";
import wImage from "../images/whatsapp.png";
import fBookImage from "../images/facebook.png";
import instImage from "../images/instagram.png";
import tImage from "../images/twitter.png";

export default function Footer (){
    return(
        <div className= "footer">
            <ul className="footer-button">
               <Link href= "/"> <li>Home</li></Link>
              <Link href= "/about-us"> <li>About us</li></Link>
             
                <li>Contact and Reach Us
                <ul>
                <li>www.xyz.com</li>
                <li>xyz@gmail.com</li>
                <li>Address: House #111, Shaheed e Millat Road, Lahore.</li>
                </ul>
                </li>
                
                {/* <Image className= "whatsAppImage" src={wImage} alt= "whatsappLogo"> </Image>
                <Image className= "fBImage" src={fBookImage} alt= "faceBookLogo"> </Image>
                <Image className= "intImage" src={instImage} alt= "instagramLogo"> </Image>
                <Image className= "TweeterImage" src={tImage} alt= "tweeterLogo"> </Image>
                <Link href = "./navButtons/jobs.tsx"><li>Jobs</li></Link> */}



                
            </ul>
        </div>
    )
}
