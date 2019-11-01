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
            {item}
        </li>
    );
    return (
        <ul>
            {listItems}
        </ul>
    );
}

// https://reactjs.org/docs/lists-and-keys.html
export default ListsAndKeys;
