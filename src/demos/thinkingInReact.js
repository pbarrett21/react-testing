// from https://reactjs.org/docs/thinking-in-react.html
import React from 'react';

class ProductRow extends React.Component {
    render() {
        const product = this.props.product;
        const name = product.stocked ? product.name : <span style={{color: 'red'}}>{product.name}</span>;

        return (
            <tr>
                <td>{name}</td>
                <td>{product.price}</td>
            </tr>
        );
    }
}

class ProductCategoryRow extends React.Component {
    render () {
        const category = this.props.category;
        return (
            <tr>
                <th colSpan="2">
                    {category}
                </th>
             </tr>
        );
    }
}

class ProductTable extends React.Component {
    render() {
        const product = this.props.product;
        const searchQuery = this.props.searchQuery;
        const inStockOnly = this.props.inStockOnly;
        const sportRows = [];
        const electronicsRows = [];
        product.forEach(product => {
            if (product.name.indexOf(searchQuery) === -1) {
                return;
            }
            if (inStockOnly && !product.stocked) {
                return;
            }
            if (product.category === 'Sporting Goods') {
                sportRows.push(
                    <ProductRow product={product} key={product.name} />
                );
            } else {
                electronicsRows.push(
                    <ProductRow product={product} key={product.name} />
                );
            }
        });        

        return (
            <table>
                <tbody>
                <tr>
                    <td>Name</td>
                    <td>Price</td>
                </tr>
                <ProductCategoryRow category='Sporting Goods' />
                {sportRows}
                <ProductCategoryRow category='Electronics' />
                {electronicsRows}
                </tbody>
            </table>
        );
    }
}

class SearchBar extends React.Component {

    handleQueryChange = event => {
        this.props.onQueryChange(event.target.value);
    }

    handleStockChange = event => {
        this.props.onStockChange(event.target.checked);
    }

    render() {
        return (
            <form>
                <input type="text" onChange={this.handleQueryChange} placeholder="Search..." />
                <p>
                    <input type="checkbox" onChange={this.handleStockChange} />
                    {' '}
                    Only show products in stock
                </p>
            </form>
        );
    }
}

class FilterableProductTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {searchQuery: '', inStockOnly: false};
    }

    handleSearchQuery = query => {
        this.setState({searchQuery: query});
    }

    handleInStockOnly = check => {
        this.setState({inStockOnly: check});
    }

    render() {
        const searchQuery = this.state.searchQuery;
        const inStockOnly = this.state.inStockOnly;

        return (
            <div>
                <SearchBar onQueryChange={this.handleSearchQuery} onStockChange={this.handleInStockOnly} />
                <ProductTable product={PRODUCTS} searchQuery={searchQuery} inStockOnly={inStockOnly} />
            </div>
        );
    }
}

const PRODUCTS = [
    {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
    {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
    {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
    {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
    {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
    {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
];

export default FilterableProductTable;
