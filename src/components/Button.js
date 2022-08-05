import React from 'react'
import '../styles/button.css'

export default function Button({action, onClick}) {
  return (
    <div>
        <button onClick={onClick}>{action}</button>
    </div>
  )
}
