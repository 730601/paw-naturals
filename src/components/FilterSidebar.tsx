import React from 'react';

interface FilterSidebarProps {
  filters: {
    breed: string;
    size: string;
    limit: number;
  };
  onFilterChange: (filters: { breed: string; size: string; limit: number }) => void;
  breeds: string[];
  sizes: string[];
}

const FilterSidebar: React.FC<FilterSidebarProps> = ({
  filters,
  onFilterChange,
  breeds,
  sizes,
}) => {
  return (
    <div className="w-64 p-4 bg-white rounded-lg shadow">
      <h3 className="text-lg font-semibold mb-4">Filters</h3>
      
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Breed
        </label>
        <select
          value={filters.breed}
          onChange={(e) => onFilterChange({ ...filters, breed: e.target.value })}
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
        >
          <option value="">All Breeds</option>
          {breeds.map((breed) => (
            <option key={breed} value={breed}>
              {breed}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Size
        </label>
        <select
          value={filters.size}
          onChange={(e) => onFilterChange({ ...filters, size: e.target.value })}
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
        >
          <option value="">All Sizes</option>
          {sizes.map((size) => (
            <option key={size} value={size}>
              {size}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Items per page
        </label>
        <select
          value={filters.limit}
          onChange={(e) => onFilterChange({ ...filters, limit: Number(e.target.value) })}
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
        >
          <option value={10}>10</option>
          <option value={20}>20</option>
          <option value={50}>50</option>
        </select>
      </div>
    </div>
  );
};

export default FilterSidebar; 