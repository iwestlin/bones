import React from 'react'
import {Link} from 'react-router-dom'
import {Button} from 'antd'

export default class NotFound extends React.Component {
  render() {
    return (
      <div style={{textAlign: 'center'}}>
        <div style={{fontSize: '2em', margin: 30}}>404 Not Found</div>
        <Link to='/'>
          <Button>返回首页</Button>
        </Link>
      </div>
    )
  }
}
