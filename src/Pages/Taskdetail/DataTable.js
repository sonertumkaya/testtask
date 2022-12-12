import React from 'react';
import './data.css';
import 'font-awesome/css/font-awesome.min.css';
import {
  useTable,
  useSortBy,
  useGlobalFilter,
  useFilters,
  usePagination,
} from 'react-table'
import {  Button} from 'react-bootstrap';
import GlobalFilter from './GloabalFilter'
var XLSX = require("xlsx");
const Datatable = (props) => {
  const { data, columns} = props

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    footerGroups,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    state,
    preGlobalFilteredRows,
    setGlobalFilter,
    page,

    prepareRow,
  } = useTable(
    {
      columns,
      data,
      initialState: {
        hiddenColumns: ['score'],
      },
    },
    useFilters,
    useGlobalFilter,
    useSortBy,
    usePagination,
  )
  const handleOnExport =() => {
    var tbl = document.getElementById("task");
const wb = XLSX.utils.table_to_book(tbl);
XLSX.writeFile(wb, "Tapşırıqlar.xlsx");
   }
  const { pageIndex } = state

  //console.log('headerGroups', headerGroups)
  //   console.log('footerGroups', footerGroups)

  return (
    <>
     
                <GlobalFilter
                  preGlobalFilteredRows={preGlobalFilteredRows}
                  globalFilter={state.globalFilter}
                  setGlobalFilter={setGlobalFilter}
                />
             
             <Button
                type="button" className="btn btn-outline-primary"
                onClick={handleOnExport}
            >
              Məlumatları ixrac edin
            </Button>
                <table
                  {...getTableProps()} // Tablo proplarını buradan alıyoruz.
                  className="table  table-striped table-hover" id="task"
                >
                  <thead>
                    {headerGroups.map((
                      headerGroup, // Tablo başlıklarını buradan alıyoruz.
                    ) => (
                      <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map((column) => (
                          <th
                            {...column.getHeaderProps(
                              column.getSortByToggleProps, // sort edebilmek için
                            )}
                          >
                            {column.render('Header')}
                            <span>
                              {column.isSortedDesc ? ( // aşağı ve yukarı yönlü okları gösteriyoruz.
                                <i
                                  className=" fa fa-sort"
                                  aria-hidden="true"
                                ></i>
                              ) : (
                                <i
                                  className=" fa fa-sort"
                                  aria-hidden="true"
                                ></i>
                              )}
                            </span>
                          </th>
                        ))}
                      </tr>
                    ))}
                  </thead>
                  <tbody {...getTableBodyProps()}>

                    {page.map((row) => {
                      prepareRow(row)
                      return (
                        <tr {...row.getRowProps()}>
                          {row.cells.map((cell) => {
                            return (
                              <td className="text-xs font-weight-bold" {...cell.getCellProps()}>
                                {cell.render('Cell')}
                              </td>
                            )
                          })}
                        </tr>

                      )
                    })}
                  </tbody>

                  <tfoot>

                    {footerGroups.map((group) => (

                      <tr {...group.getFooterGroupProps()}>
                        {group.headers.map((column) => (
                          <th {...column.getFooterProps()}>
                            {column.render('Footer')}
                          </th>
                        ))}
                      </tr>

                    ))}

                  </tfoot>

                </table>
              
     
            <span className="pageOptionsSpan">
              {' '}
              {pageIndex + 1} / {pageOptions.length}{' '}
            </span>
            <button
              className="btn btn-primary btn-sm mr-2"
              onClick={() => previousPage()}
              disabled={!canPreviousPage}
            >
              <i className="fa fa-chevron-left" aria-hidden="true"></i>
            </button>

            <button
              className="btn btn-primary btn-sm"
              onClick={() => nextPage()}
              disabled={!canNextPage}
            >
              <i className="fa fa-chevron-right" aria-hidden="true"></i>
            </button>
          
    </>
  )
}

export default Datatable