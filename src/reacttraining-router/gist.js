import React, {Component, Fragment} from 'react'
import {BrowserRouter as Router, Route, Link, NavLink, Redirect, Prompt} from 'react-router-dom'

//TODO: which responsive CSS components does it use?
// LoadFile, Sidebar, Router...?
class Gists extends Component {
  state = {
    gists: null
  }

  componentDidMount() {
    fetch('https://api.github.com/gists')
      .then(res => res.json())
      .then(gists => {
        this.setState({gists})
      })
  }

  render() {
    const {gists} = this.state
    return (
      <Router>
        <Fragment>
          <ul className="side-bar" style={{float: 'left'}}>
            {gists && Array.isArray(gists) ? gists.map(gist => (
                <li key={gist.id}>
                  <Link to={`/g/${gist.id}`}>
                    {gist.description || '[No Description]'}
                  </Link>
                </li>
              )) : (
                <div>Loading...</div>
              )
            }
          </ul>
          <div className="main">
            <Route exact path="/" render={() => <h1>Welcome</h1>}/>
            <Route path="/g/:gistid" component={Gist}/>
            {/*<Route path="/g/:gistid" router={match =><h2>Welcome Route {match.params.gistid}</h2>}/>*/}
          </div>
        </Fragment>
      </Router>
    )
  }
}
const Gist = ({gist}) => {
  return (
    <div>
      <h1>{gist.description}</h1>
      <ul>
        {Object.keys(gist.files).map(key => (
          <li>
            <b>{key}</b>
            <LoadFile url={gist.files[key].raw_url}>
              {(text) => (<pre>{text}</pre>)}
            </LoadFile>
          </li>
        ))}
      </ul>
    </div>
  )
}
export default Gists;