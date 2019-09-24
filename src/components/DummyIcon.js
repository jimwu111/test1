import * as React from 'react';
import { connect } from 'react-redux';

var icons = `
.e-search:before {
    content:'\\e993';
}
.e-upload:before {
    content: '\\e725';
}
.e-font:before {
    content: '\\e34c';
}
`
let DummyIcons = ({dispatch}) => {
   // render() {
        var iconList = ['e-search', 'e-upload', 'e-font'];
        const listItems = iconList.map((icon, index) =>
            <li><span className={`e-icons ${icon}`} key={index}></span></li>
        );

        return (
            <div>abcde
                <style>{icons}</style>
                <div className="icons">
                    <ul>
                        {listItems}
                    </ul>
                </div>
            </div>
        );
   // }
};

DummyIcons = connect()(DummyIcons);

export default DummyIcons;