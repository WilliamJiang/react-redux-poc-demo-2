React Router DOM and React Patterns

React Router DOM (youtube video)
--------------------------------

- React Router Complete Guide
- React Router Training  video


5 patterns to make your React Components more useful
------------------------------------------------------


Notice:
------

- connect: It does not modify the component class passed to it; instead, it returns a new, connected component class for you to use.

- Router can have only one child, so wrap all the routes in a div or Switch.

1. match
1. location
1. history

```
 <Route path="/path" render={props => (<div><Component {...props}/></div> )}/>
```

- React-Router V4, doesn't have the concept of nested routes, if you wants to use nested routes then define those routes directly inside that component.

- <code>location</code> The router will provide you with a location object in a few places:

1. Route component as this.props.location
1. Route `render` as ({ location }) => ()
1. Route `children` as ({ location }) => ()
1. withRouter as this.props.location

- <code>match</code>

1. Route component as this.props.match
1. Route render as ({ match }) => ()
1. Route children as ({ match }) => ()
1. withRouter as this.props.match
1. matchPath as the return value


Advanced React Patterns
------------------------