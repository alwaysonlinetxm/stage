import 'whatwg-fetch';

export default {

	request(api, method, data = {}) {
		// const url = `https://api.joy-homeplus.com/v1/management/${api}`;
		const url = `cgi-bin/txtCGI?Name=ECC&${api}`;
		const opt = {
			headers: {
				'Content-type': 'application/x-www-form-urlencoded;charset=UTF-8'
			},
			credentials: 'include'
		}

		if (method) {
			return fetch(url, {
				...opt,
				method,
				body: this.serialize(data)
			}).then(response => response.json()).then(res => {
				console.log(api, res);
				return res;
			});
		} else {
			return fetch(url, opt).then(response => response.json()).then(res => {
				console.log(api, res);
				return res;
			});
		}


	},

	serialize(obj) {
		return JSON.stringify(obj);
	},

	getCookie(name) {
		const arr = document.cookie.match(new RegExp(`(^| )${name}=([^;]*)(;|$)`));
		if (arr && arr.length > 2) {
			return decodeURIComponent(arr[2]);
		} else {
			return null;
		}
	},

	setCookie(name, value) {
		const Days = 30;
		const exp = new Date();
		exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
		document.cookie = `${name}=${escape(value)};expires=${exp.toGMTString()};path=/`;
	},

	delCookie(name) {
		const exp = new Date();
		exp.setTime(exp.getTime() - 1);
		const cval = this.getCookie(name);
		if (cval != null) document.cookie = `${name}=${cval};expires=${exp.toGMTString()}; path=/`;
	},

	dateFormat(date) {
		return `${date.getFullYear()}-${this.numFormat(date.getMonth() + 1)}-${this.numFormat(date.getDate())}`;
	},

	datetimeFormat(date) {
		return `${this.dateFormat(date)} ${this.numFormat(date.getHours())}:${this.numFormat(date.getMinutes())}:${this.numFormat(date.getSeconds())}`;
	},

	numFormat(num) {
		return `${(num < 10 ? '0' : '')}${num}`;
	}
};
