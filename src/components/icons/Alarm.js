import * as React from "react"

function Alarm(props) {
  return (
    <svg
      width={25}
      height={25}
      viewBox="-293 409 25 25"
      className="prefix__hf"
      {...props}
    >
      <path d="M-273.33 423.67l-1.67-1.52v-3.65a5.5 5.5 0 00-6.04-5.47 5.66 5.66 0 00-4.96 5.71v3.41l-1.68 1.55a1 1 0 00-.32.74V427a1 1 0 001 1h3.49a3.08 3.08 0 003.01 2.45 3.08 3.08 0 003.01-2.45h3.49a1 1 0 001-1v-2.59a1 1 0 00-.33-.74zm-7.17 5.63c-.84 0-1.55-.55-1.81-1.3h3.62a1.92 1.92 0 01-1.81 1.3zm6.35-2.45h-12.7v-2.35l1.63-1.5c.24-.22.37-.53.37-.85v-3.41a4.51 4.51 0 013.92-4.57 4.35 4.35 0 014.78 4.33v3.65c0 .32.14.63.38.85l1.62 1.48v2.37z" fill="currentColor"/>
    </svg>
  )
}

export default Alarm