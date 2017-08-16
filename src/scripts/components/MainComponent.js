
import ClassesComponent from './ClassesComponent'
import BannerComponent from './BannerComponent'
import RoomsComponent from './RoomsComponent'
import FooterComponent from './FooterComponent'

class MainComponent extends React.Component{
	constructor(props,context){
		super(props,context)
		this.myScroll = null
	}
	render(){
		return (
			<div id="wrapper">
				<section className="content" id="scroller">
					<BannerComponent/>
					<RoomsComponent/>
					<FooterComponent/>
				</section>
			</div>
		)
	}
	// refresh(){
	// 	this.myScroll.refresh()
	// }
	// componentDidMount(){
	// 	this.myScroll = new iScroll("wrapper")
	// }
	// componentDidUpdate(){
    //     setTimeout(function(){
    //         this.props.refresh()
    //     }.bind(this),0)
	// }
}

export default MainComponent