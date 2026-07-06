import { useState } from "react";

function SearchBar({

    onSearch,

    filter,

    setFilter,

    setCurrentPage

}) {

    const [keyword, setKeyword] = useState("");

    return (

        <div className="row g-3">

            <div className="col-md-7">

                <input
                    type="text"
                    className="form-control"
                    placeholder="🔍 Search task..."
                    value={keyword}
                    onChange={(e) =>
                        setKeyword(e.target.value)
                    }
                />

            </div>

            <div className="col-md-2">

                <button
                    className="btn btn-primary w-100"
                    onClick={() => onSearch(keyword)}
                >

                    Search

                </button>

            </div>

            <div className="col-md-3">

                <select
                    className="form-select"
                    value={filter}
                    onChange={(e) => {

                        setFilter(e.target.value);

                        setCurrentPage(1);

                    }}
                >

                    <option value="ALL">
                        All
                    </option>

                    <option value="COMPLETED">
                        Completed
                    </option>

                    <option value="PENDING">
                        Pending
                    </option>

                </select>

            </div>

        </div>

    );

}

export default SearchBar;