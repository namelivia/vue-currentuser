import axios from 'axios'

const getCurrentUser = async function (apiEndpoint) {
  if (this.state.currentUser === undefined) {
    const currentUser = await axios.get(
      `${apiEndpoint}/users/me`,
    )
    this.state.currentUser = currentUser.data
  }
  return this.state.currentUser
}

var store = {
  debug: true,
  state: {
    currentUser: undefined,
  },
  getCurrentUser: getCurrentUser,
}

export default store
