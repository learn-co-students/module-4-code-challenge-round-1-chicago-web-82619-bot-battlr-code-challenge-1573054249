import React from 'react'


const FilterBar = (props) => {

    const {changeFilter, changeSort} = props

    return (
        <div id="sort-bar" className="ui brown three item inverted menu">
            <div id="filter-header" className="item header"> Filter By</div>
            <select id="filter" onChange={changeFilter} className="item ui dropdown">
                <option value="">All</option>
                <option value="Assault">Assault</option>
                <option value="Defender">Defender</option>
                <option value="Support">Support</option>
            </select>
            <div className="item header"> Sort By</div>
            <select id="sort" onChange={changeSort} className="item ui dropdown">
                <option value="id">ID</option>
                <option value="Health">Health</option>
                <option value="Damage">Damage</option>
                <option value="Armor">Armor</option>
            </select>
        </div>
    )
}

export default FilterBar