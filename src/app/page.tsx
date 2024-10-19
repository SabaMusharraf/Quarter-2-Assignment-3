import Header from "./components/header";
import Footer from "./components/footer";
import Image from "next/image";
import image from "./images/1684529716812.jpeg";
export default function Home() {
  return (
    <div>
       

        
           <Image className="image" src={image} alt="AIimage"></Image>
           <h1><b>What is AI..?</b></h1>
         <p>Artificial intelligence (AI) refers to the capability of digital computers or computer-controlled 
          robots to perform tasks typically associated with intelligent beings, such as learning, reasoning,
           problem-solving, and decision-making. It allows machines to simulate human cognitive functions, 
           including creativity and autonomy.</p>

          <h1><b>What is HTML?</b></h1>
          <p>HTML stands for Hyper Text Markup Language. HTML is the standard markup language for creating Web pages.
             HTML describes the structure of a Web page. HTML consists of a series of elements.</p>
          <p>HTML5 <b>Hypertext Markup Language 5</b> is a markup language used for structuring and presenting
           hypertext documents on the World Wide Web. It was the fifth and final major HTML version that is now 
           a retired World Wide Web Consortium (W3C) recommendation. The current specification is known as the
            HTML Living Standard</p>
            <h1><b>What is CSS?</b></h1>
            <p>CSS is the acronym of “Cascading Style Sheets”. CSS is a computer language for laying out and 
              structuring web pages (HTML or XML). This language contains coding elements and is composed of these
               “cascading style sheets” which are equally called CSS files</p>
          
    </div>);
    
  ;
}
