'use client'
//https://react-data-table-component.netlify.app/
import { Dispatch, SetStateAction } from 'react';
import DataTable, { PaginationOptions, TableColumn, createTheme } from 'react-data-table-component';

export default function Datatables<T>({ columns, data, theme = "", setSelectedRows }: { columns: TableColumn<T>[], data: T[], theme?: "" | "solarized", setSelectedRows?: Dispatch<SetStateAction<T[]>> }) {
  const handleChange = ({ selectedRows }: { selectedRows: T[] }) => {
    // You can set state or dispatch with something like Redux so we can use the retrieved data
    if (setSelectedRows) setSelectedRows(selectedRows)
  };
  const paginationComponentOptions: PaginationOptions = {
    rowsPerPageText: '선택',
    rangeSeparatorText: '/',
    selectAllRowsItem: true,
    selectAllRowsItemText: '전체',
  };
  const customStyles = {
    rows: {
      style: {
        minHeight: '50px', // override the row height
      },
    },
    headCells: {
      style: {
        paddingLeft: '8px', // override the cell padding for head cells
        paddingRight: '8px',
      },
    },
    cells: {
      style: {
        paddingLeft: '8px', // override the cell padding for data cells
        paddingRight: '8px',
      },
    },
  };
  createTheme('solarized', {
    text: {
      primary: '#268bd2',
      secondary: '#2aa198',
    },
    background: {
      default: '#002b36',
    },
    context: {
      background: '#cb4b16',
      text: '#FFFFFF',
    },
    divider: {
      default: '#073642',
    },
    action: {
      button: 'rgba(0,0,0,.54)',
      hover: 'rgba(0,0,0,.08)',
      disabled: 'rgba(0,0,0,.12)',
    },
  }, 'dark');
  return (
    <DataTable
      fixedHeader
      columns={columns}
      data={data}
      pagination
      paginationComponentOptions={paginationComponentOptions}
      customStyles={customStyles}
      theme={theme}
      selectableRows={!!setSelectedRows}
      onSelectedRowsChange={handleChange}
    />
  )
}


