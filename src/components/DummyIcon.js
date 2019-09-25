import React from 'react';
import { connect } from 'react-redux';






let DummyIcons = ({dispatch}) => {

   
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
    `;
    
        var iconList = ['e-search', 'e-upload', 'e-font'];
        const listItems = iconList.map((icon, index) =>
            <li><span className={`e-icons ${icon}`} key={index}></span></li>
        );

        return (
            <div>
            <div>
              <div>abcde</div>
                    <style>{icons}</style>
            <div className="icons">
                        <ul>
                            {listItems}
                        </ul>
                 </div>
            </div>
            </div>
        );
   // }
};

DummyIcons = connect()(DummyIcons);

export default DummyIcons;