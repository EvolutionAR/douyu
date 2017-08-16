
//入口文件

require('./styles/app.scss')


///////////////////////////////////

import HeaderComponent from "./scripts/components/HeaderComponent"
import RootComponent from "./scripts/components/RootComponent"
import MainComponent from './scripts/components/MainComponent'
import DetailComponent from "./scripts/components/DetailComponent"
import SearchComponent from "./scripts/components/SearchComponent"
import SearchlistComponent from "./scripts/components/SearchlistComponent"
import Root from "./scripts/components/Root"
import {Router,Route,hashHistory,IndexRedirect,IndexRoute} from 'react-router'

ReactDOM.render(
	<Router history={hashHistory}>
        <Route path="/" component={RootComponent}>
			<IndexRoute component={Root} />
			<Route path="main" component={MainComponent}></Route>
			<Route path="detail" component={DetailComponent}></Route>
			<Route path="search" component={SearchComponent}></Route>
			<Route path="searchlist/:id" component={SearchlistComponent}></Route>
		</Route>
    </Router>
    ,document.getElementById('root'))
