const React = require('react');

const DefaultLayout = require('./layout/Default');

class Edit extends React.Component {
  render() {
    const { fruit } = this.props;
    return (
      <DefaultLayout>
        <form action={`/fruits/${fruit._id}?_method=PUT`} method="POST">
          <fieldset>
            <legend>Edit a Fruit</legend>
            <label htmlFor="name">NAME:</label>
            <input type="text" name="name" placeholder="enter fruit name" 
            defaultValue={fruit.name}
            />

            <label htmlFor="color">COLOR:</label>
            <input type="text" name="color" placeholder="enter fruit name"
            defaultValue={fruit.color} 
            />

            <label htmlFor="readyToEat"> READY TO EAT:</label>
            {
              fruit.readyToEat ?
              <input type="checkbox" name="readyToEat" defaultChecked /> :
              <input type="checkbox" name="readyToEat" />
            }
          </fieldset>
          <input type="submit" value={`Edit ${fruit.name}`} />
        </form>
      </DefaultLayout>
    )
  }
}

module.exports = Edit;