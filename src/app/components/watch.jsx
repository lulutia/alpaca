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
      Paper} from 'material-ui';

const { Colors, Spacing, Typography } = Styles;
const ThemeManager = Styles.ThemeManager;
const LightRawTheme = Styles.LightRawTheme;
let ArrowDropRight = require('material-ui/lib/svg-icons/navigation/arrow-back');

const Watch = React.createClass({
    

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
            list:{
                maxHeight:450,
                overflow: "scroll",
            },
            allButton: {
                float: "right",
                margin: "0px 20px 20px 0px",
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
           <span style={styles.navtitle}>监控区域选择</span>
           {githubButton}
         </div>
         );

        return(
                <Paper zDepth={2} style={styles.wrapper}>
                    {header}
                <List style={styles.list}>
                   <ListItem primaryText="监控区域一" 
                            leftIcon={<ArrowDropRight />} 
                            initiallyOpen={false}
                            nestedItems={[
                                <ListItem
                                  leftCheckbox={<Checkbox />}
                                  primaryText="摄像头1号" />,
                                <ListItem
                                  leftCheckbox={<Checkbox />}
                                  primaryText="摄像头2号"/>,
                                <ListItem
                                  leftCheckbox={<Checkbox />}
                                  primaryText="摄像头3号"/>,
                                ]}/>
                     <ListItem primaryText="监控区域二" 
                                leftIcon={<ArrowDropRight />} 
                                initiallyOpen={false}
                                nestedItems={[
                                    <ListItem
                                      leftCheckbox={<Checkbox />}
                                      primaryText="摄像头1号" />,
                                    <ListItem
                                      leftCheckbox={<Checkbox />}
                                      primaryText="摄像头2号"/>,
                                    ]}/>
                     <ListItem primaryText="监控区域三" 
                                leftIcon={<ArrowDropRight />} 
                                initiallyOpen={false}
                                nestedItems={[
                                    <ListItem
                                      leftCheckbox={<Checkbox />}
                                      primaryText="摄像头1号" />,
                                    <ListItem
                                      leftCheckbox={<Checkbox />}
                                      primaryText="摄像头2号"/>,
                                    <ListItem
                                      leftCheckbox={<Checkbox />}
                                      primaryText="摄像头3号"/>,
                                    ]}
                                />
                     <ListItem primaryText="监控区域四"
                                leftIcon={<ArrowDropRight />} 
                                initiallyOpen={false}
                                nestedItems={[
                                    <ListItem
                                      leftCheckbox={<Checkbox />}
                                      primaryText="摄像头1号" />,
                                    <ListItem
                                      leftCheckbox={<Checkbox />}
                                      primaryText="摄像头2号"/>,
                                    <ListItem
                                      leftCheckbox={<Checkbox />}
                                      primaryText="摄像头3号"/>,
                                    <ListItem
                                      leftCheckbox={<Checkbox />}
                                      primaryText="摄像头4号"/>,
                                    ]}/>
                     <ListItem primaryText="监控区域五"
                                leftIcon={<ArrowDropRight />} 
                                initiallyOpen={false}
                                nestedItems={[
                                    <ListItem
                                      leftCheckbox={<Checkbox />}
                                      primaryText="摄像头1号"/>,
                                    <ListItem
                                      leftCheckbox={<Checkbox />}
                                      primaryText="摄像头2号"/>,
                                    <ListItem
                                      leftCheckbox={<Checkbox />}
                                      primaryText="摄像头3号"/>,
                                    <ListItem
                                      leftCheckbox={<Checkbox />}
                                      primaryText="摄像头4号"/>,
                                    <ListItem
                                      leftCheckbox={<Checkbox />}
                                      primaryText="摄像头5号"/>,
                                    ]}/>
                    <ListItem />
                    <RaisedButton label="全选"  secondary={true} style={styles.allButton}/>
                    </List>
                </Paper>
            )
    },

});

Watch.childContextTypes = {
        muiTheme: React.PropTypes.object,
    };

module.exports = Watch;
