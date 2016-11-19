import React from 'react'
import {connect} from 'react-redux'
import * as  actions from 'Actions'

export class TodoSearch extends React.Component {
    constructor(props, context) {
        super(props, context)

       // this.handleSearch = this.handleSearch.bind(this)
    }

    // handleSearch(e){
    //     var showComleted = this.refs.showComleted.checked
    //     var searchText = this.refs.searchText.value

    //     this.props.onSearch(showComleted, searchText)
    // }

    render() {
        var {dispatch, showComleted, searchText} = this.props
        return (
            <div className='container__header'>
                <div>
                    <input type='search' ref='searchText' placeholder='Search todos' value={searchText} onChange={() => {
                        var searchText = this.refs.searchText.value
                        dispatch(actions.setSearchText(searchText))
                    }} />
                </div>
                <div>
                    <label>
                        <input type='checkbox' ref='showComleted' checked={showComleted} onChange={() => {
                            dispatch(actions.toggleShowCompleted())
                        }} />
                        Show completed todos
                    </label>
                </div>
            </div>
        )
    }
}

export default connect(
    (state) => {
        return {
            showComleted: state.showComleted,
            searchText: state.searchText
        }
    }
)(TodoSearch)