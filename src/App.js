import React, { Component } from 'react';
import { Grid, Jumbotron } from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <div>
        <Jumbotron>
          <Grid>
            <h1>The Cole Train 6</h1>
            <p>
              The adventures are beginning, check back soon for more details.
            </p>
          </Grid>
        </Jumbotron>
      </div>
    );
  }
}

export default App;
