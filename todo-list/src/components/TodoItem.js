import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import './TodoItem.css';
import checkImg from '../images/check.png'
import checkedImg from '../images/checked.png'

class TodoItem extends Component {
    render() { 
        const { item, onClick } = this.props;
        let url = checkImg;
        if (item.isComplete){
            url = checkedImg;
        }

        return (
            <div onClick={onClick} className={classNames('TodoItem',{
                'TodoItem-Complete': item.isComplete
            })}>
                <img src={url} alt="text check" width={32} height={32}/>
                <p>{item.title}</p>
            </div>
        );
    }

}


TodoItem.propTypes = {
    item: PropTypes.shape({
        isComplete: PropTypes.bool.isRequired,
        title: PropTypes.string.isRequired
    }),
    onClick: PropTypes.func.isRequired
  };

export default TodoItem;