// @flow
import * as React from 'react';

class App extends React.Component<{}> {
  handleClick(e: SyntheticEvent<HTMLDivElement>): void {
    console.log(e);
  }

  render() {
    return <div onClick={this.handleClick}>hello world</div>;
  }
}
