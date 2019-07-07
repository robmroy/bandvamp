import React from 'react';
import AlbumForm from './album_form';
import { connect } from 'react-redux';

const mapStateToProps = ({session}) => ({
    session
})
export default connect(mapStateToProps, null)(AlbumForm);