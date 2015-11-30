import React from 'react';
import Router from 'react-router';
import { AppBar,
      AppCanvas,
      FontIcon,
      IconButton,
      EnhancedButton,
      Mixins,
      RaisedButton,
      Styles,
      Tab,
      Tabs,
      Dialog,
      LeftNav,
      Checkbox,
      List,
      ListItem,
      LinearProgress,
      Slider,
      RadioButtonGroup,
      RadioButton,
      Paper} from 'material-ui';

const { Colors, Spacing, Typography } = Styles;
const ThemeManager = Styles.ThemeManager;
const LightRawTheme = Styles.LightRawTheme;
let ArrowDropRight = require('material-ui/lib/svg-icons/navigation/arrow-back');

const Road = React.createClass({
    

    getInitialState () {
      return {
        muiTheme: ThemeManager.getMuiTheme(LightRawTheme),
      };
    },

    getChildContext() {
      return {
        muiTheme: this.state.muiTheme,
      };
    },

    _getStyle(){
        return{
          wrapper: {
              position: "absolute",
              width: 300,
              right:10,
              top:80,
          },
          navheader:{
           cursor: 'pointer',
           //.mui-font-style-headline
           fontSize: '16px',
           color: Typography.textFullWhite,
           lineHeight: 40 + 'px',
           fontWeight: Typography.fontWeightLight,
           backgroundColor: Colors.cyan500,
           paddingLeft: Spacing.desktopGutter,
           paddingTop: '0px',
           marginBottom: '8px',
          },
          github: {
            position: 'absolute',
            top: -4,
            right:0,
            zIndex: 5,
            color: 'white',
          },
           iconButton: {
            color: Colors.darkWhite,
          },
          radio:{
            maxHeight:450,
            overflow: "scroll",
            padding: 10,
          },
        }
    },

    render(){
        let styles = this._getStyle();
        let githubButton = (
          <IconButton
            iconStyle={styles.iconButton}
            iconClassName="icon-cog"
            style={styles.github} onClick={this._navToggle}/>
        );

        let header=(
         <div style={styles.navheader}>
           <span style={styles.navtitle}>巡逻线路选择</span>
           {githubButton}
         </div>
         );

        return(
                <Paper zDepth={2} style={styles.wrapper}>
                    {header}
                   <div style={styles.radio}>
                         <label>
                         <RadioButton type="radio" name="test" label="巡逻线路1" value="1" 
                         checked={true}/>
                         </label>
                         <img  src="images/material-ui-logo.svg" />
                         <label>
                         <RadioButton type="radio" name="test" label="巡逻线路2" value="2" />
                         test</label>
                         <img  src="images/material-ui-logo.svg" />
                   </div>
                </Paper>
            )
    },

});

Road.childContextTypes = {
        muiTheme: React.PropTypes.object,
    };

module.exports = Road;
