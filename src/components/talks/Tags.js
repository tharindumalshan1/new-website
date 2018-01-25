import React from 'react';
import styled from 'styled-components';

const Tags = styled.ul`
    list-style: none;
    margin: 0;
    overflow: hidden;
    padding: 0;
    & > li {
        float: left;
    }
`;

const Tag = styled.li`
    background: #eee;
    border-radius: 3px 0 0 3px;
    color: #999;
    display: inline-block;
    height: 26px;
    line-height: 26px;
    padding: 0 20px 0 23px;
    position: relative;
    margin: 0 10px 10px 0;
    text-decoration: none;
    -webkit-transition: color 0.2s;

    &::before {
        background: #fff;
        border-radius: 10px;
        box-shadow: inset 0 1px rgba(0, 0, 0, 0.25);
        content: '';
        height: 6px;
        left: 10px;
        position: absolute;
        width: 6px;
        top: 10px;
    }

    &::after {
        background: #fff;
        border-bottom: 13px solid transparent;
        border-left: 10px solid #eee;
        border-top: 13px solid transparent;
        content: '';
        position: absolute;
        right: 0;
        top: 0;
    }

    &:hover {
        background-color: crimson;
        color: white;
    }

    &:hover::after {
        border-left-color: crimson;
    }
`;

export default ({ tags }) => (
    <Tags>{tags.map(tag => <Tag key={tag}>{tag}</Tag>)}</Tags>
);
