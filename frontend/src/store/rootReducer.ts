import { combineReducers } from '@reduxjs/toolkit';
import uiSettingsReducer from './uiSettings/uiSettingsSlice';
import userInfoReducer from './userInfo/userInfoSlice';

export const rootReducer = combineReducers({
	uiSettings: uiSettingsReducer,
	userInfo: userInfoReducer,
});
