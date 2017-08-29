import React from 'react';
import ReactDataGrid from 'react-data-grid';
import createReactClass from 'create-react-class';
import TinyBarChart from '../components/TinyBarChart';
const DataGrid = createReactClass({

  getInitialState() {
    this._columns = [
      {
        key: 'photo',
        width: 50,
        sortable: false,
        name: ''
      },
      {
        key: 'task',
        name: 'Name',
        width: 530,
        sortable: true
      },
      {
        key: 'salesNumbers',
        name: 'Sales',
        width: 100,
        sortable: true
      },
      {
        key: 'tinychart',
        name: 'Stats',
        width: 170,
        sortable: true
      },
      {
        key: 'startDate',
        name: 'Published',
        width: 120,
        sortable: true
      },
      
    ];

    let originalRows = this.createRows(1000);
    let rows = originalRows.slice(0);
    // Store the original rows array, and make a copy that can be used for modifying eg.filtering, sorting
    return { originalRows, rows };
  },

  getRandomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())).toLocaleDateString();
  },

  createRows() {
    let rows = [];
    for (let i = 0; i < 9; i++) {
      rows.push({
        id: i,
        task: [ (<a target='_blank' href='https://www.google.com'>The 37 Best Websites To Learn Something New</a>),
                (<a target='_blank' href='https://www.google.com'>How quitting my corporate job for my startup dream f*cked my life up</a>),
                (<a target='_blank' href='https://www.google.com'>8 Things Every Person Should Do Before 8 A.M.</a>),
                (<a target='_blank' href='https://www.google.com'>7 Things You Need To Stop Doing To Be More Productive, Backed By Science</a>),
                (<a target='_blank' href='https://www.google.com'>33 Websites That Will Make You a Genius</a>),
                (<a target='_blank' href='https://www.google.com'>HOW TO LOSE WEIGHT IN 4 EASY STEPS</a>),
                (<a target='_blank' href='https://www.google.com'>Advice from 30 year old me to 20 year old me</a>),
                (<a target='_blank' href='https://www.google.com'>The Crossroads of Should and Must</a>),
                (<a target='_blank' href='https://www.google.com'>7 Rejections</a>),
                (<a target='_blank' href='https://www.google.com'>When I’m Gone</a>)][i],
        salesNumbers: [Math.floor((Math.random() * 10000) + 100)],
        tinychart: [(<TinyBarChart />),(<TinyBarChart />),(<TinyBarChart />),(<TinyBarChart />),(<TinyBarChart />),
                    (<TinyBarChart />),(<TinyBarChart />),(<TinyBarChart />),(<TinyBarChart />),(<TinyBarChart />)][i],
        startDate: this.getRandomDate(new Date(2015, 3, 1), new Date()),

      });
    }
    console.log(rows);
    return rows;
  },

  handleGridSort(sortColumn, sortDirection) {
    const comparer = (a, b) => {
      if (sortDirection === 'ASC') {
        return (a[sortColumn] > b[sortColumn]) ? 1 : -1;
      } else if (sortDirection === 'DESC') {
        return (a[sortColumn] < b[sortColumn]) ? 1 : -1;
      }
    };

    const rows = sortDirection === 'NONE' ? this.state.originalRows.slice(0) : this.state.rows.sort(comparer);

    this.setState({ rows });
  },

  rowGetter(i) {
    return this.state.rows[i];
  },

  render() {
    return  (
      <ReactDataGrid
        onGridSort={this.handleGridSort}
        columns={this._columns}
        rowGetter={this.rowGetter}
        rowsCount={this.state.rows.length}
        minWidth={994}
        minHeight={300}
        rowHeight={50}
        headerRowHeight={30}
        />);
  }
});

export default DataGrid;
