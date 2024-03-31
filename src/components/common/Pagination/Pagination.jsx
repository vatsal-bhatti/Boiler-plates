import React, { useState } from "react";
import { twMerge } from "tailwind-merge";
import { Button } from "../Button";

function Pagination({ recordsPerPage, data }) {
  const [currentPage, setCurrentPage] = useState(1);

  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const lastPage = Math.ceil(data.length / recordsPerPage);

  function prevPage() {
    setCurrentPage((currentPage) =>
      currentPage !== 1 ? currentPage - 1 : currentPage
    );
  }

  function nextPage() {
    setCurrentPage((currentPage) =>
      currentPage !== Math.ceil(lastPage) ? currentPage + 1 : currentPage
    );
  }

  const PageNumber = ({ pageNumber, style }) => {
    return (
      <div
        onClick={() => setCurrentPage(pageNumber)}
        className={twMerge(
          "h-10 px-5 flex justify-center items-center text-green-600 transition-colors duration-150 focus:shadow-outline  cursor-pointer",
          style
        )}
      >
        {pageNumber}
      </div>
    );
  };

  return (
    <>
      <div>
        {data && data.length ? (
          data
            .slice(firstIndex, lastIndex)
            .map((number, index) => <div key={index + 1}>number {number}</div>)
        ) : (
          <div>no data in children</div>
        )}

        <div className="bg-white p-4 flex items-center flex-wrap">
          <nav aria-label="Page navigation">
            {data && data.length ? (
              data
                .slice(firstIndex, lastIndex)
                .map((number, index) => (
                  <div key={index + 1}>number {number}</div>
                ))
            ) : (
              <div>no data in children</div>
            )}
            <ul className="inline-flex">
              <li>
                <Button
                  onClick={() => setCurrentPage(1)}
                  buttonStyle={`h-10 px-5 text-${
                    currentPage === 1 ? "white" : "green-600"
                  } font-bold transition-colors duration-150 rounded-l-lg focus:shadow-outline ${
                    currentPage === 1
                      ? "bg-gray-300 cursor-not-allowed"
                      : "bg-green-200 hover:bg-green-600 hover:text-white"
                  }`}
                >
                  &lt;&lt;
                </Button>
              </li>
              <li>
                <Button
                  onClick={prevPage}
                  buttonStyle={`h-10 px-5 text-${
                    currentPage === 1 ? "white" : "green-600"
                  } transition-colors duration-150 focus:shadow-outline ${
                    currentPage === 1
                      ? "bg-gray-300 cursor-not-allowed border-l-[0.1px] border-white"
                      : "hover:bg-green-100"
                  }`}
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                    <path d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" />
                  </svg>
                </Button>
              </li>

              {currentPage === 1 ? (
                <>
                  <li>
                    <PageNumber
                      pageNumber={currentPage}
                      style="text-white bg-green-600 cursor-default border border-r-0 border-green-600 "
                    />
                  </li>
                  <li>
                    <PageNumber
                      pageNumber={currentPage + 1}
                      style="hover:bg-green-100"
                    />
                  </li>
                  <li>
                  <PageNumber
                      pageNumber={currentPage + 2}
                      style="hover:bg-green-100"
                    />
                  </li>
                </>
              ) : currentPage === lastPage ? (
                <>
                  <li>
                  <PageNumber
                      pageNumber={currentPage - 2}
                      style="hover:bg-green-100"
                    />
                  </li>
                  <li>
                  <PageNumber
                      pageNumber={currentPage - 1}
                      style="hover:bg-green-100"
                    />
                  </li>
                  <li>
                  <PageNumber
                      pageNumber={currentPage}
                      style="text-white bg-green-600 cursor-default border border-r-0 border-green-600 "
                    />
                  </li>
                </>
              ) : (
                <>
                  <li>
                  <PageNumber
                      pageNumber={currentPage - 1}
                      style="hover:bg-green-100"
                    />
                  </li>
                  <li>
                  <PageNumber
                      pageNumber={currentPage}
                      style="text-white bg-green-600 cursor-default border border-r-0 border-green-600 "
                    />
                  </li>
                  <li>
                  <PageNumber
                      pageNumber={currentPage + 1}
                      style="hover:bg-green-100"
                    />
                  </li>
                </>
              )}

              <li>
                <Button
                  onClick={nextPage}
                  buttonStyle={`h-10 px-5 text-${
                    currentPage === lastPage ? "white" : "green-600"
                  } transition-colors duration-150 ${
                    currentPage === lastPage
                      ? "bg-gray-300 cursor-not-allowed border-r-[0.1px] border-white"
                      : "bg-white focus:shadow-outline hover:bg-green-100"
                  }`}
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                    <path d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" />
                  </svg>
                </Button>
              </li>
              <li>
                <Button
                  onClick={() => setCurrentPage(lastPage)}
                  buttonStyle={`h-10 px-5 text-${
                    currentPage === lastPage ? "white" : "green-600"
                  } font-bold transition-colors duration-150 rounded-r-lg focus:shadow-outline ${
                    currentPage === lastPage
                      ? "bg-gray-300 cursor-not-allowed "
                      : "bg-green-200 hover:bg-green-600 hover:text-white"
                  }`}
                >
                  &gt;&gt;
                </Button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Pagination;
