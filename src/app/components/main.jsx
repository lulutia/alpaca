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
      LinearProgress,
      Slider,
      Paper} from 'material-ui';


const { Colors, Spacing, Typography } = Styles;
const ThemeManager = Styles.ThemeManager;
const LightRawTheme = Styles.LightRawTheme;
let Menu = require('material-ui/lib/menus/menu');
let MenuItem = require('material-ui/lib/menus/menu-item');
let MenuDivider = require('material-ui/lib/menus/menu-divider');
let ArrowDropRight = require('material-ui/lib/svg-icons/navigation/arrow-back')


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
        backgroundColor: Colors.cyan100,
        position: 'fixed',
        height: 64,
        bottom: 0,
        right: 0,
        zIndex: 100,
        width: '100%',
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
       progressContainer: {
         position: 'absolute',
         right: "10%",
         width:"80%",
         height: "100%",
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
       navheader:{
        cursor: 'pointer',
        //.mui-font-style-headline
        fontSize: '26px',
        color: Typography.textFullWhite,
        lineHeight: Spacing.desktopKeylineIncrement + 'px',
        fontWeight: Typography.fontWeightLight,
        backgroundColor: Colors.cyan500,
        paddingLeft: Spacing.desktopGutter,
        paddingTop: '0px',
        marginBottom: '8px',
       },
       navtitle: {
        fontWeight: Typography.fontWeightLight,
        left: 45,
        position:'relative',
       },
       menu: {
        width:250,
        height:"100%",
        top:64,
        left:0,
        position: 'absolute',
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

    _navToggle(){
      this.refs.leftNav.toggle();
    },

  render() {
    let styles = this._getStyles();
    let icon = (
        <iconButton iconClassName="muidocs-icon-action-stars" />
      )
    let menuRealItems = (
     <Menu desktop={true} style={styles.menu}>
       <MenuItem primaryText="监控操作"  leftIcon={<ArrowDropRight />} />
       <MenuDivider />
       <MenuItem primaryText="线路巡逻"  leftIcon={<ArrowDropRight />} />
       <MenuDivider />
       <MenuItem primaryText="模式切换"  leftIcon={<ArrowDropRight />} />
       <MenuDivider />
       <MenuItem primaryText="视图调整" leftIcon={<ArrowDropRight />} />
       <MenuDivider />
       <MenuItem primaryText="工具选择"  leftIcon={<ArrowDropRight />} />
     </Menu>
      )
    let githubButton = (
      <IconButton
        iconStyle={styles.iconButton}
        iconClassName="muidocs-icon-action-stars"
        style={styles.github} onClick={this._navToggle}/>
    );

     let materialIcon= (
      <EnhancedButton
        style={styles.svgLogoContainer}
        linkButton={true}
        href="/#/home">
        <img style={styles.svgLogo} src="images/material-ui-logo.svg"/>
        <span style={styles.span}>Test Case</span>
      </EnhancedButton>) ;

     let header=(
      <div style={styles.navheader} onTouchTap={this._onHeaderClick}>
        <img style={styles.svgLogo} src="images/material-ui-logo.svg"/>
        <span style={styles.navtitle}>Test Case</span>
      </div>
      )
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
             <LeftNav 
                ref="leftNav" 
                header={header}>
                {menuRealItems}
            </LeftNav>
            <div>
               <Paper
                 zDepth={0}
                 rounded={false}
                 style={styles.footer}>
                 <div style={styles.progressContainer}>
                    <Slider name="slider2" defaultValue={0.5} />                
                </div>
               </Paper>
             </div>
      </AppCanvas>
    );
  },
});

module.exports = Main;
