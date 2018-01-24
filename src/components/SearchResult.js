import React from "react";
import { connect } from "react-redux";
import { Table } from 'react-bootstrap';

const SearchResult = ({ searchResult }) => {
  const renderTableBody = searchResult => {
    return searchResult.map((ele, idx) => {
      return (
        <tr key={idx}>
          <td>{ele.date}</td>
          <td>{ele.time}</td>
          <td>{ele.description}</td>
        </tr>
      );
    });
  };

  const renderTableHeader = searchResult => {
    if (searchResult.length > 0) {
      return (
        <thead>
          <tr>
            <th>DATE</th>
            <th>TIME</th>
            <th>DESC</th>
          </tr>
        </thead>
      );
    }
  };

  return (
    <Table striped bordered condensed hover>
      {renderTableHeader(searchResult)}
      <tbody>
        {renderTableBody(searchResult)}
      </tbody>
    </Table>
  );
};

const mapStateToProps = ({ data }) => {
  return {
    searchResult: data
  };
};

export default connect(mapStateToProps)(SearchResult);
