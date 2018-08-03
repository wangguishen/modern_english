import store from '@/store/store'

var verify;
verify = (path) => {
	if (path == '/home' || path == '/course' || path == '/learnCard' || path == '/shoppingTrolley' || path == '/myMessage') {
		store.dispatch('setMyTabbarShow',true);
	} else {
		store.dispatch('setMyTabbarShow',false);
	}
}

export {
	verify
}