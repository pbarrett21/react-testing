import React from 'react';

class ListsAndKeys extends React.Component {
    constructor(props) {
        super(props);
        this.state = { list: [] }
    }

    componentDidMount() {
        this.setState({ list: ['this', 'is', 'a', 'list', 'of', 'length', 'seven'] });
    }

    render() {
        const listToDisplay = this.state.list;
        return(
            <ListDisplayer list={listToDisplay}/>
        );
    }
}

function ListDisplayer(props) {
    const list = props.list;
    const listItems = list.map((item) => 
        <li key={list.indexOf(item).toString()}>
            {item}, key = {list.indexOf(item).toString()}
        </li>
    );
    return (
        <ul>
            {listItems}
        </ul>
    );
}

// Keys help React identify which items have changed, are added, or are removed. 
// Keys should be given to the elements inside the array to give the elements a stable identity
// Most often you would use IDs from your data as keys
// When you don’t have stable IDs for rendered items, you may use the item index as a key as a last resort

// https://reactjs.org/docs/lists-and-keys.html
export default ListsAndKeys;
