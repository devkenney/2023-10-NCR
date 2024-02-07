const React = require('react');
const DefaultLayout = require('./layout/Default');

class Index extends React.Component {
  render() {
    const { fruits } = this.props;
    return (
      <DefaultLayout>
        <a href="/fruits/new"><button>Create a New Fruit</button></a>
        <div>
          {
            fruits.map((fruit, i) => (
              <article key={i}>
                <a href={`/fruits/${fruit._id}`}>
                  <h2>
                    {fruit.name} - {fruit.readyToEat ? 'Ripe' : 'Not Ripe Yuck Thats Nasty'}
                  </h2>
                </a>
              </article>
            ))
          }
        </div>
      </DefaultLayout>
    );
  }
}

module.exports = Index;