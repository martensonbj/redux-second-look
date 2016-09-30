import { connect } from 'react-redux'
import { setFilter } from '../actions'
import FilterLink from '../components/FilterLink'

const mapStateToProps = (state, props) => ({
  active: props.filter === state.setFilter
})

const mapDispatchToProps = (dispatch, props) => ({
  onClick: () => {
    dispatch(setFilter(props.filter))
  }
})

const Filter = connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterLink)

export default Filter
