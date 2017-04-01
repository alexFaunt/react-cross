export default process.browser ? require('./web').default : require('./native').default
