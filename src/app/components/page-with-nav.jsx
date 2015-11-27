import React from 'react';
import {State, History} from 'react-router';
import { Menu, Mixins, Styles } from 'material-ui';

let { Spacing, Colors } = Styles;
let { StyleResizable, StylePropable } = Mixins;


let PageWithNav = React.createClass({

  contextTypes: {
    muiTheme: React.PropTypes.object,
    router: React.PropTypes.func,
  },

  mixins: [StyleResizable, StylePropable, History],

  propTypes: {
    menuItems: React.PropTypes.array,
  },

  getStyles(){
    let subNavWidth = Spacing.desktopKeylineIncrement * 3 + 'px';
    let styles = {
      root: {
        paddingTop: 0 + 'px',
      },
      rootWhenMedium: {
        position: 'relative',
      },
      secondaryNav: {
        borderTop: 'solid 1px ' + Colors.grey300,
        overflow: 'hidden',
      },
      content: {
        boxSizing: 'border-box',
        padding: 0 + 'px',
        maxWidth: (Spacing.desktopKeylineIncrement * 14) + 'px',
      },
      secondaryNavWhenMedium: {
        borderTop: 'none',
        position: 'absolute',
        top: '64px',
        width: subNavWidth,
      },
      contentWhenMedium: {
        marginLeft: subNavWidth,
        borderLeft: 'solid 1px ' + Colors.grey300,
        minHeight: '800px',
      },
    };

    return styles;
  },

  render() {
    let styles = this.getStyles();
    return (
      <div style={this.prepareStyles(styles.root)}>
        <div style={this.prepareStyles(styles.content)}>
          {this.props.children}
        </div>
        <div style={this.prepareStyles(styles.secondaryNav)}>
          <Menu
            ref="menuItems"
            zDepth={0}
            menuItems={this.props.menuItems}
            selectedIndex={this._getSelectedIndex()}
            onItemTap={this._onMenuItemClick} />
        </div>
      </div>
    );
  },

  _getSelectedIndex() {
    let menuItems = this.props.menuItems;
    let currentItem;

    for (let i = menuItems.length - 1; i >= 0; i--) {
      currentItem = menuItems[i];
      if (currentItem.route && this.history.isActive(currentItem.route)) return i;
    }
  },

  _onMenuItemClick(e, index, item) {
    this.history.pushState(null, item.route);
  },

});

module.exports = PageWithNav;
