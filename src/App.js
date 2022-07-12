import React from 'react'
import users from './users.json'
import Card from './components/Card'



class App extends React.Component {
  render() {
    return (
      <section>
        <h1>The wall</h1>
        <article>
        {users.map(user => (
          <Card picture={user.picture} name={user.name} about={user.about}/>
        ))}
        </article>
      </section>
    )
  }
}

export default App 