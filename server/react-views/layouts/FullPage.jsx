import React, {Component} from 'react';

import MainLayout from './Main';


class FullPageLayout extends Component {
	render() {
		return (
			<MainLayout loggedUser={this.props.loggedUser} page_url={this.props.page_url} bodyClass="site pattern-body">
				{this.props.children}
			</MainLayout>
		);
	}
}

export default FullPageLayout;