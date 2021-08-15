export type Action = {
  type: string,
  payload: {
    error: string,
    account: {
      id: string,
      firstName: string,
      lastName: string,
      username: string,
      password: string
    },
    success: string
  }
};