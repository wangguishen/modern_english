import store from '@/store/store'
import {setLocalStorage} from '@/util/storageUtil'

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