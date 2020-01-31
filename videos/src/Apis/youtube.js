import axios from 'axios';

const KEY = 'AIzaSyAolmXEv2ZRKHJUpSlgnzyzS0W-VqAE9UM';

export default axios.create({
	baseURL: 'https://www.googleapis.com/youtube/v3',
	params: {
		part: 'snippet',
		maxResults: 5,
		key: KEY
	}
})