/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';
import propTypes from 'prop-types';

import { convertTimestampToDate } from 'src/utilities/convertTimestampToDate';

import * as S from './PaymentHistory.style';

const PaymentHistory = ({ paymentsList }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 5;

  const totalPages = Math.ceil(paymentsList.length / rowsPerPage);

  const currentRows = paymentsList.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  const handlePreviousPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  return (
    <S.PaymentHistoryWrapper>
      <S.Title>Your payments history:</S.Title>
      <S.TableWrapper>
        <S.Table>
          <S.TableHead>
            <S.TableRow>
              <S.TableHeader>Amount</S.TableHeader>
              <S.TableHeader>Currency</S.TableHeader>
              <S.TableHeader>Type</S.TableHeader>
              <S.TableHeader>Status</S.TableHeader>
              <S.TableHeader>Date</S.TableHeader>
            </S.TableRow>
          </S.TableHead>
          <tbody>
            {currentRows.map((row, index) => (
              <S.TableRow key={index}>
                <S.TableData>{row.amount}</S.TableData>
                <S.TableData>{row.currency}</S.TableData>
                <S.TableData>{row.type}</S.TableData>
                <S.TableData>{row.status}</S.TableData>
                <S.TableData>{convertTimestampToDate(row.created)}</S.TableData>
              </S.TableRow>
            ))}
          </tbody>
        </S.Table>
        <S.PaginationWrapper>
          <S.PaginationButton
            onClick={handlePreviousPage}
            disabled={currentPage === 1}
          >
            &laquo; Previous
          </S.PaginationButton>
          <S.PageInfo>
            Page {currentPage} of {totalPages}
          </S.PageInfo>
          <S.PaginationButton
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
          >
            Next &raquo;
          </S.PaginationButton>
        </S.PaginationWrapper>
      </S.TableWrapper>
    </S.PaymentHistoryWrapper>
  );
};

PaymentHistory.propTypes = {
  paymentsList: propTypes.array.isRequired,
};

export default PaymentHistory;
