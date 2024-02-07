const React = require('react');

const DefaultLayout = require('./layout/Default');

class Home extends React.Component {
  render() {
    return (
      <DefaultLayout>
        <a href="/users/signup"><button>Sign up</button></a>
        <a href="/users/login"><button>Log in</button></a>
      </DefaultLayout>
    )
  }
}

module.exports = Home;