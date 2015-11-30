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
      Toggle,
      DatePicker,
      Paper} from 'material-ui';

const { Colors, Spacing, Typography } = Styles;
const ThemeManager = Styles.ThemeManager;
const LightRawTheme = Styles.LightRawTheme;
let ArrowDropRight = require('material-ui/lib/svg-icons/navigation/arrow-back');
let MenuDivider = require('material-ui/lib/menus/menu-divider');

const Tool = React.createClass({
    

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
          toggle:{
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
           <span style={styles.navtitle}>视图调整</span>
           {githubButton}
         </div>
         );

        return(
                <Paper zDepth={2} style={styles.wrapper}>
                    {header}
                    <div style={styles.toggle}>
                    <Toggle
                      name="toggleName1"
                      value="toggleValue1"
                      label="速度调整"/>
                      <Slider name="slider1" defaultValue={0.5} step={0.10} disabled={true}/>
                    <MenuDivider />
                    <Toggle
                      name="toggleName1"
                      value="toggleValue1"
                      label="交互尺度"/>
                      <Slider name="slider1" defaultValue={0.5} step={0.10} disabled={true}/>
                    <MenuDivider />
                    <Toggle
                      name="toggleName1"
                      value="toggleValue1"
                      label="时间选择"/>
                     <DatePicker
                       hintText="时间选择"
                       mode="landscape"/>
                    </div>

                </Paper>
            )
    },

});

Tool.childContextTypes = {
        muiTheme: React.PropTypes.object,
    };

module.exports = Tool;
