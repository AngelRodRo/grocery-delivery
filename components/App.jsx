import React from 'react';

class App extends React.Component {

	constructor() {
		super();
		this.state = {
			list : [1,2,3]
		}
	}
	

	handleClick(){
		alert('hola ')
		const list = this.state.list.slice();
		console.log(list)
		list.push(2);
		this.setState({
			list:list
		})
	}

   render() {
      return (
         <ListGrocery handleClick={this.handleClick} items={this.state.list} />
      );
   }
}


class ListGrocery extends React.Component{
	render(){
		return(
			<ul>
				{this.props.items.map(item => <Grocery handleClick={this.props.handleClick}  /> )}
			</ul>
		);
	}
}

class Grocery extends React.Component{
	render(){
		return(
			<li onClick={this.props.handleClick} >Grocery </li>
		);
	}
}

export default App;