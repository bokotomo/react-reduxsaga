import React from 'react';

interface Props {
  readonly name: string;
  readonly age: number;
  requestGetUser(id: string): void;
  requestGetUserAge(id: string): void;
}
export class TopPage extends React.Component<Props> {
  render() {
    return (
      <div>
        <p>Name: {this.props.name}</p>
        <p>Age: {this.props.age}</p>
        <button
          type="button"
          onClick={() => this.props.requestGetUser('unique_id')}
        >
          click_name1
        </button>
        <button
          type="button"
          onClick={() => this.props.requestGetUser('unique_id2')}
        >
          click_name2
        </button>
        <button
          type="button"
          onClick={() => this.props.requestGetUserAge('unique_id')}
        >
          click_age1
        </button>
        <button
          type="button"
          onClick={() => this.props.requestGetUserAge('unique_id2')}
        >
          click_age2
        </button>
      </div>
    );
  }
}
