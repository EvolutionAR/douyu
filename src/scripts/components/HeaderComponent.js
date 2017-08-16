

class HeaderComponent extends React.Component{
	constructor(props,context){
		super(props,context)
	}

	render(){
		return (
			<header className="bar bar-nav">
				<div className="pull-left icon-logo"></div>
				<div className="btn-box pull-right">
					<a className="search" href="#/search">搜索</a>丨
					<span className="classes">
						分类
					</span>
				</div>
			</header>
			
		)
	}
}

export default HeaderComponent