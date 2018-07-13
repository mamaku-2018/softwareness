export const SHOW_ERROR = 'SHOW_ERROR'

export const showError = (errorMessage) => {
  return {
    type: SHOW_ERROR,
    errorMessage: errorMessage
  }
}
