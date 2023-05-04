import './HeroCard.css'

function Hero (props) {
   return(
      <div className='hero__wrapper'>
         <div className='hero__info'>
            <div className='name'>{props.name}</div>
            <div className='universe'><strong>Вселенная:</strong> {props.universe}</div>
            <div className='alterego'><strong>Альтер эго:</strong> {props.alterego}</div>
            <div className='occupation'><strong>Род деятельности:</strong> {props.occupation}</div>
            <div className='friends'><strong>Друзья:</strong> {props.friends}</div>
            <div className='superpowers'><strong>Суперсила:</strong> {props.superpowers}</div>
            <div className='info'><strong>Описание:</strong> {props.info}</div>
         </div>
         <div className='hero__image'>
            <img className='image' src={props.url}/>
         </div>  
      </div> 
      
   )
}

export default Hero;