import React from "react";


//creating a searchbar
export default function SearchBar({ searchTxt, setSearchTxt }) {
    return (
        <div className="card mt-4">
            <div className="card-body">
                <div className="row">
                    <div className="col-md-12">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Search by Employee ID, First Name or Last Name..."
                            value={searchTxt}
                            onChange={(event) => setSearchTxt(event.target.value)}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
};