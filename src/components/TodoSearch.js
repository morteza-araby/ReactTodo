import React from 'react'

class TodoSearch extends React.Component {
    constructor(props, context) {
        super(props, context)

        this.handleSearch = this.handleSearch.bind(this)
    }

    handleSearch(e){
        var showComleted = this.refs.showComleted.checked
        var searchText = this.refs.searchText.value

        this.props.onSearch(showComleted, searchText)
    }

    render() {
        return (
            <div>
                <div>
                    <input type='search' ref='searchText' placeholder='Search todos' onChange={this.handleSearch} />
                </div>
                <div>
                    <label>
                        <input type='checkbox' ref='showComleted' onChange={this.handleSearch} />
                        Show completed todos
                    </label>
                </div>
            </div>
        )
    }
}

export default TodoSearch