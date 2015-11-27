import React from 'react';
import Router from 'react-router';
import { AppBar,
      AppCanvas,
      FontIcon,
      IconButton,
      EnhancedButton,
      Menu,
      Mixins,
      RaisedButton,
      Styles,
      Tab,
      Tabs,
      Dialog,
      Paper} from 'material-ui';

const { Colors, Spacing, Typography } = Styles;
const ThemeManager = Styles.ThemeManager;
const LightRawTheme = Styles.LightRawTheme;


const Main = React.createClass({

  childContextTypes: {
    muiTheme: React.PropTypes.object,
  },

  getInitialState () {
    return {
      muiTheme: ThemeManager.getMuiTheme(LightRawTheme),
      time: new Date(),
    };
  },

  getChildContext() {
    return {
      muiTheme: this.state.muiTheme,
    };
  },

  componentWillMount() {
    setInterval(()=>{
    let date = new Date();
    this.setState({
        time: date,
    })
    date = null;}.bind(this), 1000);
  },

  _getStyles() {
     let darkWhite = Colors.darkWhite;
     return {
       footer: {
         backgroundColor: Colors.grey900,
         textAlign: 'center',
       },
       a: {
         color: darkWhite,
       },
       p: {
         margin: '0 auto',
         padding: 0,
         color: Colors.lightWhite,
         maxWidth: 335,
       },
       github: {
         position: 'fixed',
         right: Spacing.desktopGutter/2,
         top: 8,
         zIndex: 5,
         color: 'white',
       },
        iconButton: {
         color: darkWhite,
       },
       root: {
         backgroundColor: Colors.cyan500,
         position: 'fixed',
         height: 64,
         top: 0,
         right: 0,
         zIndex: 4,
         width: '100%',
       },
       container: {
         position: 'absolute',
         right: (Spacing.desktopGutter/2) + 48,
         bottom: 0,
       },
       span: {
         color: Colors.white,
         fontWeight: Typography.fontWeightLight,
         left: 45,
         top: 22,
         position: 'absolute',
         fontSize: 26,
       },
       svgLogoContainer: {
         position: 'fixed',
         width: 300,
         left: Spacing.desktopGutter,
       },
       svgLogo: {
         width: 65,
         backgroundColor: Colors.cyan500,
         position: 'absolute',
         top: 20,
       },
       tabs: {
         width: 425,
         bottom:0,
       },
       tab: {
         height: 64,
       },
       inkbar:{
        backgroundColor:Colors.indigo300,
        height:3,
       },
     };
   },

   _currentTime(now){
        let year = now.getFullYear();
        let month = now.getMonth() + 1;
        let day = now.getDate();
        let hh = now.getHours();
        let mm = now.getMinutes();
        let ss = now.getSeconds();
        let output = year + '年' + month + '月' + day + '日 ' + hh + '时' + mm + '分' + ss + '秒';
        return output
    },

  render() {
    let styles = this._getStyles();
    let githubButton = (
      <IconButton
        iconStyle={styles.iconButton}
        iconClassName="muidocs-icon-action-stars"
        style={styles.github} />
    );

     let materialIcon= (
      <EnhancedButton
        style={styles.svgLogoContainer}
        linkButton={true}
        href="/#/home">
        <img style={styles.svgLogo} src="images/material-ui-logo.svg"/>
        <span style={styles.span}>Test Case</span>
      </EnhancedButton>) ;

    return (
      <AppCanvas>
             {githubButton}
             <div>
               <Paper
                 zDepth={0}
                 rounded={false}
                 style={styles.root}>
                 {materialIcon}
                 <div style={styles.container}>
                   <Tabs
                     style={styles.tabs}
                     inkBarStyle={styles.inkbar}>
                     <Tab
                       value="1"
                       label={this._currentTime(this.state.time)}
                       style={styles.tab} />
                   </Tabs>
                 </div>
               </Paper>
             </div>
      </AppCanvas>
    );
  },
});

module.exports = Main;
