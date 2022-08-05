import React from 'react'

export default function Button({action, onClick}) {
  return (
    <div>
        <button onClick={onClick}>{action}</button>
    </div>
  )
}
