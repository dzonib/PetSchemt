import {GET_ERRORS} from '../types'

export const getErrors = (payload) => {
  return {
  type: GET_ERRORS,
  payload
}}