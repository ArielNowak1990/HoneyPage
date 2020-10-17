import React, {useState, useEffect} from 'react';
import image1 from "../../assets/foto1.jpg"
import image2 from "../../assets/foto2.jpg"
import image3 from "../../assets/foto3.jpg"
import image4 from "../../assets/foto4.jpg"


function Carousel() {
 const [counter, setCounter] = useState(0)


 const carousel_element = () => {
  if (counter === 0) {
   return (
       <>
        <p>Z nami masz więcej czasu na wakacje!</p>
        <img src={image1} alt="wakacje"/>
       </>
   )
  }
  if (counter === 1) {
   return (
       <>
        <p>Kurier dostarczy materiał na czas!</p>
        <img src={image2} alt="kurier"/>
       </>
   )
  }
  if (counter === 2) {
   return (
       <>
        <p>Masz pewność że nie przepłacisz!</p>
        <img src={image3} alt="pieniądze"/>
       </>
   )
  }
  if (counter === 3) {
   return (
       <>
        <p>Najprostszy sposób aby zyskać to wszystko!</p>
        <img src={image4} alt="zegar"/>
       </>
   )
  }
 };


 useEffect(() => {
      const timeOut = setTimeout(() => {
           if (counter === 3) {setCounter(0)}
           else {setCounter(prevState => prevState + 1)}

          },3500
      );
      return() => {clearTimeout(timeOut);
      }

     },[counter]
 )

 const handlePrev = () => {
  if (counter === 0) {setCounter(3)}
  else {setCounter(prevState => prevState - 1)}
 }

 const handleNext = () => {
  if (counter === 3) {setCounter(0)}
  else {setCounter(prevState => prevState + 1)}
 }


 return (
     <div className={"carousel"}>
      <button onClick={handlePrev}>&lt;</button>
      <p> {carousel_element()}</p>
      <button onClick={handleNext}>&gt;</button>
     </div>
 );
}

export default Carousel;