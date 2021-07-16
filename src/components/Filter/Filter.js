import { connect } from 'react-redux';
import styles from './Filter.module.css';
import * as actions from '../../redux/actions';
import { getFilter } from '../../redux/selectors';

const Filter = ({ filter, onChange}) => {
    return (
        <input type="text" className={styles.filter} 
        name="filter" value={filter} onChange={onChange}/>
    )
}

const mapStatetoProps = state => ({
    filter: getFilter(state)
});

const mapDispatchToProps = dispatch => ({
    onChange: (e) => dispatch(actions.filterContacts(e.target.value))
});

export default connect(mapStatetoProps, mapDispatchToProps)(Filter);