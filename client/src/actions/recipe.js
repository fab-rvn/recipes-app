import * as api from '../api';
import { CREATE, FETCH_ALL } from '../constants/actionTypes';

export const getRecipe = () => async dispatch => {
  try {
    const { data } = await api.fetchRecipe();
    dispatch({
      type: FETCH_ALL,
      payload: data,
    });
  } catch (error) {
    console.log(error.message);
  }
};

export const createRecipe = recipe => async dispatch => {
  try {
    const { data } = await api.createRecipe(recipe);
    dispatch({
      type: CREATE,
      payload: data,
    });
  } catch (error) {
    console.log(error.message);
  }
};