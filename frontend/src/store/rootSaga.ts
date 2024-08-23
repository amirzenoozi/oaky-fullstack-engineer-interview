import { all, fork } from 'redux-saga/effects';
import { uiSettingsSaga } from '@/store/uiSettings/uiSettingsSaga';
import { userInfoSaga } from '@/store/userInfo/userInfoSaga';

export function* rootSaga() {
	yield all([
		fork(uiSettingsSaga),
		fork(userInfoSaga),
	]);
}
