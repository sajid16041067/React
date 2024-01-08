/* eslint-disable array-callback-return */
import React, { useState } from "react";

export default function Pagination() {
    const [noOfPages] = useState(5);
  return (
    <div>
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          <li className="page-item">
            <a className="page-link" href="/">
              Previous
            </a>
          </li>
          {noOfPages.map(pageNo =>{
            <li className="page-item">
            <a className="page-link" href="/">
              Next
            </a>
          </li>
          })}
          <li className="page-item">
            <a className="page-link" href="/">
              Next
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
