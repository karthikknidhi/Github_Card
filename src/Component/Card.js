import React from 'react';


const Card = (props) =>{

return (

	<div style = {{margin:'1em'}}>
	<a href={props.html_url}><img style = {{height:'75px', width :'75px'}} alt ="avatar" src = {props.avatar_url} /></a>
	<div style ={{display : 'inline-block', marginLeft :10}}>
	<div style ={{fontSize : '1.25em', fontWeight :'bold'}}>
	{props.name} 
	</div>
	<div>{props.company}</div>
	</div>
	</div>
);
}


export default Card;