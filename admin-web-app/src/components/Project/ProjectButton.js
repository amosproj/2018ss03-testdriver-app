import React, { Component } from 'react';
import { Text } from 'react-native';
import { setState } from '../shared/GlobalState';
import { Link } from 'react-router-dom';

export default class ProjectButton extends Component {
	displayProject() {
		setState({
			isAuth: true,
			show: 'listUsers',
			param: this.props.proj.row.entryKey,
			name: this.props.proj.row.projectName
		});
	}
	render() {
		return (
			<Link to={"/project/" + this.props.proj.row.entryKey} style={{textDecoration: 'none'}}>
				<Text
					onPress = { this.displayProject.bind(this) }
					style={{color: '#5daedb'}}
				>
					{this.props.proj.row.projectName}
				</Text>
			</Link>
		);
	}
}
