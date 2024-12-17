import axios from 'axios';

// Axiosのデフォルト設定
axios.defaults.baseURL = 'https://yourdomain.com';
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'; // Laravel用

export default axios;