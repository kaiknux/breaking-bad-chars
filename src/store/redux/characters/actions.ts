import { action } from 'typesafe-actions';
import { CharTypes, Char } from './types';

export const loadRequest = () => action(CharTypes.LOAD_REQUEST);

export const loadSuccess = (data: Char[]) => action(CharTypes.LOAD_SUCCESS, data);

export const loadFail = () => action(CharTypes.LOAD_FAIL);
