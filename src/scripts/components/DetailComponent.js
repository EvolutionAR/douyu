

class DetailComponent extends React.Component{
	constructor(props,context){
		super(props,context)
		this.state = {
			classes : null
		}
	}
	componentWillMount(){
		let that = this
		$.ajax({
			url: 'http://stoledata.duapp.com/getTouJson.php',
			data: {
				src: 'https://m.douyu.com/html5/live?roomId=495329'
			},
			dataType:'jsonp',
			success:function(data){
				console.log(data)
				that.setState({
					classes : data
				})
			}
		})
	}
	putClasses(){
		let arr = []
	}

	render(){
		return (
			<div>
				detail
			</div>
		)
	}1
}

export default DetailComponent