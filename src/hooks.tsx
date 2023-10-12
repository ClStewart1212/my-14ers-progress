const redirectUrl = 'http://localhost:3000/redirect'
const scope = 'read'
const { STRAVA_ID } = process.env

export const handleLogin = () => {
  ;(
    window as Window
  ).location = `http://www.strava.com/oauth/authorize?client_id=${STRAVA_ID}&response_type=code&redirect_uri=${redirectUrl}/exchange_token&approval_prompt=force&scope=${scope}`
}
