const React = require("react");

import Autosuggest from 'react-autosuggest';

const LocationSearchBar = React.createClass({
  getInitialState: function(){
    return ({value: "", suggestions: this.getSuggestions("")});
  },

  componentDidMount: function(){
    let self = this;
    $('#locationSearchBar').on('keypress', function(e){
      let key = e.which;
      if (key== 13){
        event.preventDefault();
        event.stopPropagation();
        self.props.onsubmit();
      }
    })
  },

  onChange: function(event, {newValue}){
    this.props.textChange(newValue);
  },

  componentWillReceiveProps: function(newProps){
    this.setState({value: newProps.text});
  },

  onSuggestionsUpdateRequested: function({value, reason}){
    this.setState({
      suggestions: this.getSuggestions(value)
    });
  },

  renderSuggestion: function(suggestion){
    return (
      <span>{suggestion.name}</span>
    );
  },

  getSuggestionValue: function(suggestion){
    return suggestion.name
  },

  getSuggestions: function(value){
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;

    let suggestions = [];
    if (inputLength === 0){
      return [];
    }
    else {
      this.props.locations.forEach((location) => {
        if (location.name.toLowerCase().startsWith(inputValue)){
          suggestions.push(location);
        }
      })
    }

    return suggestions;
  },


  render: function(){
    const value = this.state.value;
    const suggestions = this.state.suggestions;
    const inputProps = {
      placeholder: "Enter Location",
      value,
      onChange: this.onChange
    }
    return (
      <div id="locationSearchBar">
        <Autosuggest suggestions={suggestions}
          onSuggestionsUpdateRequested={this.onSuggestionsUpdateRequested}
          getSuggestionValue={this.getSuggestionValue}
          renderSuggestion={this.renderSuggestion}
          inputProps={inputProps}
          />
      </div>
    )
  }


});


module.exports = LocationSearchBar;
