import React from 'react';
import { useStore } from '../store/myStore';

function SortPosts() {
  const { sortPosts, setSortOptions, sortOptions } = useStore();

  const handleSortChange = (e, type) => {
    const order = e.target.value;

    if (sortOptions[type] !== order) {
      setSortOptions({ ...sortOptions, [type]: order });
      sortPosts(order, type);
    }
  };

  return (
    <div className='sort-select'>
      <div>
        <label htmlFor='titleSortOrder'>Sort by title:</label>
        <select
          id='titleSortOrder'
          value={sortOptions.title}
          onChange={(e) => handleSortChange(e, 'title')}
        >
          <option value=''>Select</option>
          <option value='az'>A - Z sort</option>
          <option value='za'>Z - A sort</option>
        </select>
      </div>
      <div>
        <label htmlFor='dateSortOrder'>Sort by upload time:</label>
        <select
          id='dateSortOrder'
          value={sortOptions.date}
          onChange={(e) => handleSortChange(e, 'date')}
        >
          <option value=''>Select</option>
          <option value='asc'>Date Ascending</option>
          <option value='desc'>Date Descending</option>
        </select>
      </div>
    </div>
  );
}

export default SortPosts;
