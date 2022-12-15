import { useState, useEffect } from 'react';
import UserService from '../api-service/user-service/UserService'

const CurrentUser = () => {
	const [user, setUser] = useState<any>();

	useEffect(() => {
		UserService.GetUser().then((res) => {
			setUser(res.data);
		}).catch((err) => {
			console.warn(err);
		})
	}, []);

	return user
}

export default CurrentUser;
