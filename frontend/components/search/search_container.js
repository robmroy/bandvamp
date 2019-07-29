import { connect } from 'react-redux';
import {search} from '../../actions/search_actions';
import Search from './search';
import {withRouter} from 'react-router-dom';

const mapStateToProps = (state, ownProps) => (
    {results: 
        state.search.searchResults}
);

const mapDispatchToProps = (dispatch, ownProps) => {
    return {search: (query) => dispatch(search(query))}
};

export default withRouter(connect(
    mapStateToProps, 
    mapDispatchToProps
    )(Search));