import React from 'react';
import Search from 'material-ui/svg-icons/action/search';
import IconButton from 'material-ui/IconButton';
import AutoComplete from 'material-ui/AutoComplete';

export default class AutoCompleteSearch extends React.Component {
  state = {
    dataSource: [],
  };

  handleUpdateInput = (value) => {
    this.setState({
      dataSource: [
        value,
        value + value,
        value + value + value,
      ],
    });
  };
  render() {
    return (
      <div>
        <IconButton><Search /></IconButton>
        <AutoComplete
          hintText="Type anything"
          dataSource={this.state.dataSource}
          onUpdateInput={this.handleUpdateInput}
        />
      </div>
    );
  }
}
