import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";

import { geoApiOptions, GEO_API_URL } from "../../Api";

const Search = ({ onSearchChange }) => {
  const [search, setSearch] = useState(null);

  const onChangeHandler = (searchData) => {
    setSearch(searchData);
    onSearchChange(searchData);
  };

  const loadOptionsHandler = async (inputValue) => {
    try {
      const response = await fetch(
        `${GEO_API_URL}/cities?minPopulation=1000000&namePrefix=${inputValue}`,
        geoApiOptions
      );
      const response_1 = await response.json();
      return console.log(response_1);
    } catch (err) {
      return console.error(err);
    }
  };

  return (
    <AsyncPaginate
      placeHolder="search for city"
      debounceTimeout={600}
      value={search}
      onChange={onChangeHandler}
      loadOptions={loadOptionsHandler}
    />
  );
};

export default Search;
