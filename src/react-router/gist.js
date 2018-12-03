import React, {Component, Fragment} from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

// https://v.youku.com/v_show/id_XMzExMzg3NDQyMA==.html?spm=a2h0k.11417342.soresults.dtitle
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
          <div className="flex-container" style={{width: '30%', padding: "10px"}}>
            <ul style={{listStyle: "none", padding: 0}}>
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
          </div>
          <div style={{flex: 1, padding: "10px"}}>
            <Route exact path="/" render={() => <h1>Welcome</h1>}/>
            {gists && (
              <Route path="/g/:gistId" router={({match}) => (
                <Gist gist={gists.find(g => g.id === match.params.gistId) }/>
              )}/>
            )}
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
            <a href={gist.files[key].raw_url}>
              {(text) => (<pre>{text}</pre>)}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
export default Gists;