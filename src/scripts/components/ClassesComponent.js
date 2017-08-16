

class ClassesComponent extends React.Component{
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
				src: 'https://m.douyu.com/category?type='
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
			<nav className="nav-bar">
				<ul>
					<li><a href="" className="nav-active">全部</a></li>
					<li><a href="">热门游戏</a></li>
					<li><a href="">王者荣耀</a></li>
					<li><a href="">客厅游戏</a></li>
					<li><a href="">移动游戏</a></li>
					<li><a href="">娱乐</a></li>
					<li><a href="">颜值</a></li>
					<li><a href="">科技</a></li>
					<li><a href="">文娱课堂</a></li>
					<li><a href="">正能量</a></li>
				</ul>
			</nav>
		)
	}
}

export default ClassesComponent