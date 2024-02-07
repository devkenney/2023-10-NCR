const React = require('react');
const DefaultLayout = require('./layout/Default');

class New extends React.Component {
  render() {
    return (
      <DefaultLayout>
        <form action="/fruits" method="post">
          <fieldset>
            <legend>Create a New Fruit</legend>
            <label htmlFor="name">NAME:</label>
            <input type="text" name="name" placeholder="enter fruit name" />

            <label htmlFor="color">COLOR:</label>
            <input type="text" name="color" placeholder="enter fruit name" />

            <label htmlFor="readyToEat"> READY TO EAT:</label>
            <input type="checkbox" name="readyToEat" />
          </fieldset>
          <input type="submit" value="create New fruit" />
        </form>
      </DefaultLayout>
    )
  }
}

module.exports = New;