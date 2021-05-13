import React from 'react';
import axios from 'axios';
import UserTable from './UserTable';
import { base_url } from '../config';
class HomePage extends React.Component {
	constructor() {
		super();
		this.state = {
			userList: [],
		};
	}
	componentDidMount = () => {
		axios
			.get(base_url)
			.then((res) => this.setState({ userList: res.data }))
			.catch((err) => console.log(err));
	};
	render() {
		console.log(this.state.userList);
		return (
			<div className="container mt-5">
				<div className="table-responsive">
					<UserTable userList={this.state.userList} />
				</div>
			</div>
		);
	}
}

export default HomePage;
