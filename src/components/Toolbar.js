import React from "react";

const Toolbar = ({filters, selected, onSelectFilter}) => {
    return (
        <div className="filters">
            {filters.map((item) => (
                <button
                    key={item}
                    className={`filters-item ${item === selected ? 'filters-item-active' : ''}`}
                    onClick={(evt) => {onSelectFilter(item);}}>
                    {item}
                </button>
            ))}
        </div>
    );
}

export default Toolbar;