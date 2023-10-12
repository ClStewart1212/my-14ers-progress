import React, { type ReactElement } from 'react'

import { handleLogin } from '../hooks'

const Signin = (): ReactElement => {
  return (
    <div>
      <h1>Signin Page</h1>
      <button onClick={handleLogin}>Home</button>
    </div>
  )
}

export default Signin
