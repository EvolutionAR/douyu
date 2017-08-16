

class FooterComponent extends React.Component{
	constructor(props,context){
		super(props,context)
	}
	gotop(){
		alert("程序员正努力开发中...")
	}
	render(){
		return (
			<footer>
				<div className="gotop" onClick={this.gotop}>
					<span><i className="icon-gotop"></i>返回顶部</span>
				</div>
				<p>开发人员：XXXXXX</p>
				<p>版权所有 © XXXXXXXXX</p>
			</footer>
		)
	}
}

export default FooterComponent