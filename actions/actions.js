export const addSavingsGoal = (amount, description, photo, reoccuring) => {
  return dispatch => {
  	return fetch('http://localhost:8080/checks',
		{
			method: "POST",
			body: JSON.stringify({
				amount,
				description,
				photo,
				reoccuring
			}),
			headers: { "Content-Type" : "application/json" }
		}).then(res => {
			if (res.status >= 300) {
				throw new Error(res.statusText)
			}
			return res
		}).then(res => {
			console.log('post check success')
		}).catch(e => {
			console.error(e)
		})
    }
}
