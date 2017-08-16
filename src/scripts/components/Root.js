import MainComponent from './MainComponent'
import HeaderComponent from './HeaderComponent'



class Root extends React.Component{
	constructor(props,context){
		super(props,context)
	}
	
	render(){
		return (
			<div>
				<HeaderComponent/>
				<MainComponent/>
			</div>
			
		)
	}
}

export default Root