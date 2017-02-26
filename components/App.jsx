import React from 'react';

class Profile extends React.Component{
	constructor(){
		super();
	}
}

class UserInfo extends React.Component{
	constructor(){
		super();
	}
}


class App extends React.Component {

	constructor() {
		super();
		this.state = {
			list : [
				{
					name:"Producto 1",
					description: "Description 1"
				},
				{
					name:"Producto 2",
					description: "Description 1"
				}

			]
		}
	}


	handleClick(){
		const list = this.state.list.slice();
		list.push({
			name:"Producto 1",
			description: "Description 1"
		});
		this.setState({
			list:list
		})
	}

   render() {
      return (
				 <div className="row">
					 <div className="col-md-12">
						 <h1>Lista de mercado</h1>
					 </div>
					 <div className="col-md-6">
						 <ListGrocery handleClick={()=> this.handleClick()} items={this.state.list} />
					 </div>
					 <div className="col-md-6">
						 <a onClick={()=> this.handleClick() } className="btn btn-primary">Add new grocery</a>
					 </div>
				 </div>
      );
   }
}


class ListGrocery extends React.Component{
	render(){
		return(
			<div className="list-group">
				{this.props.items.map(item => <Grocery grocery={item}  /> )}
			</div>
		);
	}
}

class Grocery extends React.Component{
	render(){
		return(
		<a href="#" className="list-group-item">
			<div className="row">
				<div className="col-md-2">
					<img src="http://www.imagenesdeamor.pro/wp-content/uploads/2016/09/imagenes-con-frases-de-desamor-8-320x320.jpg" className="img-responsive" width="100" height="100"></img>
				</div>
				<div className="col-md-10">
					<h4 className="list-group-item-heading">{this.props.grocery.name}</h4>
				<p className="list-group-item-text">{this.props.grocery.description}</p>
				</div>
			</div>
		</a>
		);
	}
}

export default App;
