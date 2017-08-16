

class NavComponent extends React.Component{
	constructor(props,context){
		super(props,context)
	}

	render(){
		return (
			<nav className="nav-bar">
				<ul>
					<li><a href="" className="nav-active">推荐</a></li>
					<li><a href="">手游</a></li>
					<li><a href="">娱乐</a></li>
					<li><a href="">游戏</a></li>
					<li><a href="">趣玩</a></li>
				</ul>
			</nav>
		)
	}
}

export default NavComponent