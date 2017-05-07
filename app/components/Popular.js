var React = require('react');
var PropTypes = require('prop-types');

// if all your components has a render method,
// it is good to instead create a function 
// to return the UI

// below is an example of a stateless functional component
// it is just a function that is rendering
// or returning some UI 
// abstracted complexity into its own stateless functional component


function SelectLanguage(props) {
  var languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python'];

  return (
      <ul className="languages">
        {languages.map(function (lang) {
          return (
            <li 
              style={lang === props.selectedLanguage ? { color: '#d0021b'} : null}
              onClick={props.onSelect.bind(null, lang)}
              key={lang}>
                  {lang}
            </li>
          )
        }, this)}
      </ul>  
    )
}

// a pretty classic example of writing a Component
// class 'blank' extends React.Component { render() return () }

// class SelectLanguage extends React.Component {
//   render() {

//     var languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python'];

//     return (
//       <ul className="languages">
//         {languages.map(function (lang) {
//           return (
//             <li 
//               style={lang === this.props.selectedLanguage ? { color: '#d0021b'} : null}
//               onClick={this.props.onSelect.bind(null, lang)}
//               key={lang}>
//                   {lang}
//             </li>
//           )
//         }, this)}
//       </ul>  
//     )
//   }
// }

SelectLanguage.propTypes = {
  selectedLanguage: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
}

class Popular extends React.Component {
  constructor(props) {
    super();
    this.state = {
      selectedLanguage: 'All',
    };

    this.updateLanguage = this.updateLanguage.bind(this);

  }
  updateLanguage(lang) {
    this.setState(function() {
      return {
        selectedLanguage: lang,
      }
    });
  }

  render() {
    return (
      <div>
        <SelectLanguage 
          selectedLanguage = {this.state.selectedLanguage}
          onSelect = {this.updateLanguage}
        />
      </div>
    )
  }
}

module.exports = Popular;