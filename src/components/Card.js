import React from 'react'

class Card extends React.Component {
  render() {
    return (

      <article className="box col-sm-3 col-6">
        <div className="profil">
          <img src={this.props.picture} alt="gris 128x128"/>
          <h2> {this.props.name}</h2>
          <div>
            <p>{this.props.about}</p>
          </div>
        </div>
      </article>
    )
  }
}

export default Card 