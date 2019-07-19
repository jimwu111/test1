import React from 'react';
//import PropTypes from 'prop-types';
import ListGroup from 'react-bootstrap/ListGroup';

//what is a componennt?  an expression to be rendered
//that expression is a bunch of MarkUp (jsx generated)
//condition on a group of 'props' - both code and value (setters)

// U can have one that display nothing..

// it can have life cycle event - beforeMount()..

//shit - these are key matches from State 
//typo kills you - 'title': 
const ToDo = ({title}) => <ListGroup.Item>{title}</ListGroup.Item>
/* 
ToDo.propTypes = {
    title: PropTypes.string.isRequired
};
 */

export default ToDo;



