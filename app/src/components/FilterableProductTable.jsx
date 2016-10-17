import React from 'react'
import SearchBar from './SearchBar.jsx'
import ProductTable from './ProductTable.jsx'

export default class FilterableProductTable extends React.Component{
	constructor(){
		super();
	}
	render() {
		return(
			<div>
				<SearchBar/>
				<ProductTable/>
			</div>
		);
	}
}