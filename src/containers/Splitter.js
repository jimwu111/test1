import React from 'react';
import ReactDOM from 'react-dom';

import { TabStrip, TabStripTab, PanelBar, PanelBarItem, PanelBarUtils, Menu, MenuItem, MenuItemModel, MenuItemLink, MenuItemArrow, Splitter } from '@progress/kendo-react-layout'
import '@progress/kendo-react-intl'
import '@progress/kendo-react-dropdowns'
import 'react-router-dom'

calss DSplitter extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            verticalPanes: [
                { },
                { },
            ],
            horizontalPanes: [
                {size: '20%',  collapsible: true},
                {},
                {size: '20%', collapsible: true}
            ]
        };
    }

    onHorizontalLayoutChange = (updatedState) => {
        this.setState({
            horizontalPanes: updatedState
        });
    }

    onVerticalLayoutChange = (updatedState) => {
        this.setState({
            verticalPanes: updatedState
        });
    }

    render() {
        return (
            <div>
                <Splitter
                    style={{height: 200}}
                    panes={this.state.horizontalPanes}
                    onLayoutChange={this.onHorizontalLayoutChange}
                >
                    <h3>Left pane</h3>
                    <h3>Middle pane</h3>
                    <h3>Right pane</h3>
                </Splitter>

                <Splitter
                    style={{height: 200}}
                    panes={this.state.verticalPanes}
                    orientation={'vertical'}
                    onLayoutChange={this.onVerticalLayoutChange}
                >
                    <h3>Top pane</h3>
                    <h3>Bottom pane</h3>
                </Splitter>
            </div>
        );
    }
}

export default DSplitter;