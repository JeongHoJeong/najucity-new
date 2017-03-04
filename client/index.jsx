import React from 'react'
import ReactDOM from 'react-dom'
import './style.less'

class IndexTest extends React.Component {
  render () {
    return (
      <div>
        Hello, world!
      </div>
    )
  }
}

const root = document.createElement('div')
document.body.appendChild(root)

ReactDOM.render(IndexTest, root)