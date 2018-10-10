import React from 'react'
import {notification} from 'antd'
import post from '../utils/post'

export default class Home extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  async componentDidMount () {
    const {ok, data, message} = await post('user/ok', {hello: 'world'})
    if (ok) {
      this.setState({data})
    } else {
      notification.error({message})
    }
  }

  render() {
    const {data} = this.state
    return (
      <div style={{textAlign: 'center', marginTop: 100}}>
        <h1>this is home</h1>
        <pre>
          {data && JSON.stringify(data)}
        </pre>
      </div>
    )
  }
}
