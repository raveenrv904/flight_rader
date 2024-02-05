import React, { useState } from "react";
import { useSelector } from "react-redux";
import ReactPaginate from "react-paginate";
const ListView = ({ openModal }) => {
  const store = useSelector((store) => store);

  const [itemOffset, setItemOffset] = useState(0);
  //console.log(store.flights);

  const itemsPerPage = 10;

  const endOffset = itemOffset + itemsPerPage;

  const currentItems = store.flights.slice(itemOffset, endOffset);

  const pageCount = Math.ceil(store.flights.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % store.flights.length;
    setItemOffset(newOffset);
  };

  return (
    <div className="list-page">
      <table className="table table-dark">
        <thead>
          <tr>
            <th>ID</th>
            <th>Flight Code</th>
            <th>Latitude</th>
            <th>Longitude</th>
            <th>Detail Information</th>
          </tr>
        </thead>

        <tbody>
          {currentItems.map((flight) => (
            <tr key={flight.id}>
              <td>{flight.id}</td>
              <td>{flight.code}</td>
              <td>{flight.lat}</td>
              <td>{flight.lng}</td>
              <td>
                <button onClick={() => openModal(flight.id)}>Detail</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <ReactPaginate
        className="pagination"
        pageCount={pageCount}
        nextLabel="next >"
        previousLabel="< prev"
        activeClassName="active"
        onPageChange={handlePageClick}
      />
    </div>
  );
};

export default ListView;
