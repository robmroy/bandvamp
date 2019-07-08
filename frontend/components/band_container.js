import { connect } from 'react-redux';
import {fetchBand} from '../actions/entities_actions';
import Band from './band';
import {withRouter} from 'react-router-dom';

const mapStateToProps = (state, ownProps) => (
    {band: 
        state.entities.bands[ownProps.match.params.bandId] || {}});

const mapDispatchToProps = (dispatch, ownProps) => {
    const id = ownProps.match.params.bandId;
    return {fetchBand: () => dispatch(fetchBand(id))}
};

export default withRouter(connect(
    mapStateToProps, 
    mapDispatchToProps
    )(Band));