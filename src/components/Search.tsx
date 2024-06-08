import React, { ChangeEvent } from 'react'
interface Props {
  onSearch: () => void
  onValue: (_: ChangeEvent<HTMLInputElement>) => void
}
const Search = ({ onSearch, onValue }: Props) => {
  return (
    <div className="form-inline">
      <input
        className="form-control mr-sm-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
        onChange={onValue}
      />
      <button
        className="btn btn-outline-primary my-2 my-sm-0"
        type="submit"
        onClick={onSearch}
      >
        Search
      </button>
    </div>
  )
}

export default Search
