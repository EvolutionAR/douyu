

class RootComponent extends React.Component{
	constructor(props,context){
		super(props,context)
	}
	
	render(){
		return (
			<div>
				{this.props.children}
			</div>
			
		)
	}
}

export default RootComponent