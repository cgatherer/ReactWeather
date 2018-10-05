var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = React.createClass({
  onSearch: function (e) {
    e.preventDefault();
    alert('Not yet wired up!');
  },
  render: function () {
    return (
      <div>
        {/* <div className="title-bar" data-responsive-toggle="main-menu" data-hide-for="medium">
          <button className="menu-icon" type="button" data-toggle="main-menu"></button>
          <div className="title-bar-title">Menu</div>
        </div> */}

        <div className="top-bar" id="main-menu">
          <div className="top-bar-left">
            <ul className="menu">
              <li className="menu-text">React Weather App</li>
              <li>
                <IndexLink to="/" activeclassNameName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
              </li>
              <li>
                <Link to="/about" activeclassNameName="active"  activeStyle={{fontWeight: 'bold'}}>About</Link>
              </li>
              <li>
                <Link to="/examples" activeclassNameName="active" activeStyle={{fontWeight: 'bold'}}>Examples</Link>
              </li>
            </ul>
          </div>

          <div className="top-bar-right">
            <ul className="menu">
              <form onSubmit={this.onSearch}>
                <li><input type="search" placeholder="Search Weather"/></li>
                <li><input type="submit" className="button" value="Get Weather"/></li>
              </form>
            </ul>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Nav;
