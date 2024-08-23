import { put, takeLatest } from 'redux-saga/effects';
import { setCurrency } from './userInfoSlice';

function* fetchUserInfoFromUrl() {
	try {
		const lang = 'EUR';
		yield put(setCurrency(lang));
	} catch (error) {
		console.error('Error fetching User info from URL', error);
	}
}

export function* userInfoSaga() {
	yield takeLatest('FETCH_USER_INFO', fetchUserInfoFromUrl);
}
