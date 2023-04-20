import Image from "./Image";

const Card = (props) => {
    return ( 
        <div className='kortele'>
        <Image 
            source={props.imageData.source}
            alternativeText={props.imageData.alternativeText}
            CSS_class ={props.imageData.CSS_class}
        />
        <h1>{props.heading}</h1>
        <p>{props.paragraph}</p>
      </div>
  
     );
}
 
export default Card;