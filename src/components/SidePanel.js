import {Route} from 'react-router-dom';
import '../index.css';
import * as React from 'react';
import { SidebarComponent } from '@syncfusion/ej2-react-navigations';
import { TreeViewComponent } from '@syncfusion/ej2-react-navigations';
import { SampleBase } from '../sample-base';
import AddToDo from '../containers/AddToDo';
 
 
//import JsonForm from '../components/SearchBox'


/*
*  1) THe SidebarCompoent, has data jSON, and child has subchild
*  2) the jsoN goest o a TreeViewComponent - now you need to study that
*   on how to bring in behavior..
*  3/ the main-content is the Right pane,  but why the "TAB" in 
* title does not open is a problem..
*
*  4/ Smaple Base is nothing
*
*  5/Question - how to trigger conent changeo on main
*/
/*
var icons = `
    e-icons {
        color: #00ffff;
        font-size: 26px;
    }   
    .e-search:before {
        content:'\\e993';
    }
    .e-down:before {
        content: '\\e304';
    }
    .e-up:before {
        content: '\\e306';
    }`
 

const eicons ={
    color: '#00ffff',
    fontSize: '26px'
};

const e-up = {
    content: '\e306'
};
*/

export class ResponsivePanel extends SampleBase {
    constructor() {
        super(...arguments);
        this.data = [
            {
                nodeId: '01', nodeText: 'Home', iconCss: 'icon-microchip icon',
                navigateUrl: '/jim'
            },
            {
                nodeId: '02', nodeText: 'Org Info', iconCss: 'icon-thumbs-up-alt icon',
                navigateUrl: '/jim'
            },
            {
                nodeId: '03', nodeText: 'Suppliers', iconCss: 'icon-docs icon',
            },
            {
                nodeId: '04', nodeText: 'Work Orders', iconCss: 'icon-th icon',
                nodeChild: [
                    { nodeId: '04-01', nodeText: 'Calendar', 
                    iconCss: 'icon-circle-thin icon' ,  navigateUrl: '/cnbc'},
                    { nodeId: '04-02', nodeText: 'DatePicker', iconCss: 'icon-circle-thin icon' },
                    { nodeId: '04-03', nodeText: 'DateTimePicker', iconCss: 'icon-circle-thin icon' },
                    { nodeId: '04-04', nodeText: 'DateRangePicker', iconCss: 'icon-circle-thin icon' },
                    { nodeId: '04-05', nodeText: 'TimePicker', iconCss: 'icon-circle-thin icon' },
                    { nodeId: '04-06', nodeText: 'SideBar', iconCss: 'icon-circle-thin icon' }
                ]
            },
          
            {
                nodeId: '09', nodeText: 'FAQ', iconCss: 'icon-help-circled icon'
            },
            {
                nodeId: '10', nodeText: 'License', iconCss: 'icon-doc-text icon'
            }
        ];
        this.width = '290px';
        this.target = '.main-content';
        this.mediaQuery = '(min-width: 600px)';
        this.fields = { dataSource: this.data, id: 'nodeId', text: 'nodeText', child: 'nodeChild' };
    }
    render() {
        return (<div className="control-section">
                <div className="col-lg-12 col-sm-12 col-md-12 center">
                    BDCDCDCDCDCDCDCD
                 </div>
                <div className="col-lg-12 col-sm-12 col-md-12 center">
                    <a className="e-btn" id="newTab" target="_blank" onClick={this.newTabClick.bind(this)}>Open in new Tab</a>
                </div>
                <div id="wrapper">
                    <title></title>
                    <div className="col-lg-12 col-sm-12 col-md-12">
                        <div className='main-header' id='header-section'>
                            <ul className='header-list'>
                                <li className='float-left header-style icon-menu' id='hamburger' onClick={this.toggleClick.bind(this)} ref="sidbarToggle"></li>
                                <li className='float-left header-style nav-pane'>
                                    <img    alt="noImage"
                                            src="./FT_logo.png"
                                            width="150"
                                            height="45"
                                            className="d-inline-block align-top"
                                            />
                                </li>
                                <li className='header-style float-right support border-left'><b>Support</b></li>
                            </ul>
                        </div>
                        <SidebarComponent id="sidebar-treeview" ref={Sidebar => this.sidebarobj = Sidebar} width={this.width} target={this.target} mediaQuery={this.mediaQuery}>
                            <div className='main-menu'>
                                <div className='table-content'>
                                    <input type='text' placeholder='Search...' className='search-icon'></input>
                                      
                                    </div>
                                    <div>
                                    <TreeViewComponent id='main-treeview' fields={this.fields} expandOn='Click'/>
                                </div>
                            </div>
                        </SidebarComponent>
          
                        <div className="main-content" id="main-text">
                            <div className='sidebar-content'>
                               <h2 className='sidebar-heading'> Responsive Sidebar With Treeview</h2>
                                <p className='paragraph-content '>
                                    
                              
                                    defualt helps the layout
                                    <Route exact path="/cnbc" component={AddToDo}/>
                                    <Route exact path="/jsonform" component={AddToDo}/>
                                </p>   
                                <div className='icons'>
                                      <span className="e-icons e-up"></span>
                                </div>
                         </div>
                        </div>
                    </div>
                </div>
            </div>);
    }
    //open newTab
    newTabClick() {
        let URL = window.location.href.replace(window.location.search, '');
        document.getElementById('newTab').setAttribute('href', URL.split('#')[0] + 'sidebar/responsive-panel/index.html');
    }
    //toggle the sidebar
    toggleClick() {
        this.sidebarobj.toggle();
    }
}

//render(<ResponsivePanel />, document.getElementById('sample'));