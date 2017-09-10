import React from 'react';
import axios from 'axios';
class Form extends React.Component{

state = {userName:''}

handleSubmit=(event) =>{

event.preventDefault();

axios.get(`https://api.github.com/users/${this.state.userName}`).
then(response=>{

		this.props.onSubmitForm(response.data);
		this.setState({userName:''});
	});
};


render(){
return(

	<form onSubmit = {this.handleSubmit}> 
	<input style = {{marginLeft:"20px", marginTop:"20px" , lineHeight:"2em" , width : "50%"}}
	type = "text"
	value = {this.state.userName}
	onChange = {(event)=>this.setState({userName:event.target.value})}
	placeholder = "Enter Github Username" required />
	<button type = "submit" style = {{lineHeight:"2em"}}> Get Details </button>
	</form>
);
}
}


export default Form;