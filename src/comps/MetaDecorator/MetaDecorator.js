import React, { Component } from 'react';
//import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

export class MetaDecorator extends Component {
render()
{
    const obj = this.props.obj;
    const {For,title,description,keywords} = this.props.obj;

    return(
        <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        </Helmet>
    );
}
}

/* MetaDecorator.propTypes = {
title: PropTypes. string. isRequired,
description: PropTypes.string. isRequired,
keywords: PropTypes. string. isRequired,
};  */

export default MetaDecorator;