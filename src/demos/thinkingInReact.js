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

class FilterableProductTable extends React.Component {
    render() {
        return (
            <div>
                <SearchBar />
                <ProductTable product={PRODUCTS} />
            </div>
        );
    }
}

class SearchBar extends React.Component {
    render() {
        return (
            <div>
                <input type="text" placeholder="Search..." />
                <p>
                    <input type="checkbox" />
                    {' '}
                    Only show products in stock
                </p>
            </div>
        );
    }
}

class ProductTable extends React.Component {
    render() {
        const product = props.product;
        

        return (
            <div>
                <tr>
                    <td>Name</td>
                    <td>Price</td>
                </tr>
                <ProductCategoryRow category='Sporting Goods' />
                {sportRows}
                <ProductCategoryRow category='Electronics' />
                {electronicsRows}
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
