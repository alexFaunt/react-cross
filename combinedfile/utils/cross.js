import React, { Component } from 'react'

const missingAppType = ({ appType }) => {
  if (appType) return null
  return new Error(`
    App type not detected - wrap your app in the AppType provider:

    <AppType type='web'>
      <App />
    </AppType>
  `)
}

class CrossPlatformBase extends Component {
  static contextTypes = {
    appType: missingAppType
  }

  render() {
    const { WebComponent, NativeComponent } = this.constructor

    const target = this.context.appType === 'web' ? WebComponent : NativeComponent

    return target ? React.createElement(target, this.props) : null
  }
}

export default (Web, Native) => {
  if (!Web || !Native) {
    throw new Error(`
      No ${Web ? 'Native' : 'Web'} version of component passed to cross platform decorator.

      Please provide both versions of your component e.g.

      export default cross(WebComponent, NativeComponent);
    `)
  }

  return class CrossPlatform extends CrossPlatformBase {
    static WebComponent = Web
    static NativeComponent = Native
  }
}
