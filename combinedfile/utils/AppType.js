import React, { Component, PropTypes } from 'react'

export default class AppType extends Component {
  static childContextTypes = {
    appType: PropTypes.string
  }

  static propTypes = {
    type: PropTypes.oneOf(['web', 'native']).isRequired
  }

  getChildContext() {
    return { appType: this.appType }
  }

  constructor(props, context) {
    super(props, context)
    this.appType = props.type
  }

  render() {
    return this.props.children
  }
}
