import styled from 'styled-components';

export const Title = styled.span`
  font-size: 24px;
  font-weight: 600;
`;

export const PaymentHistoryWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
`;

export const TableWrapper = styled.div`
  width: 100%;
  overflow-x: auto;
  margin-top: 32px;
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0 8px 12px rgba(0, 0, 0, 0.1);
  background-color: ${({ theme }) => theme.color.white};
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  margin: 0 auto;
`;

export const TableHead = styled.thead`
  background-color: ${({ theme }) => theme.color.gray};
`;

export const TableHeader = styled.th`
  padding: 16px;
  text-align: left;
  font-size: 16px;
  font-weight: 600;
  border-bottom: 2px solid ${({ theme }) => theme.color.gray};
  border-right: 1px solid ${({ theme }) => theme.color.lightGray};
  &:last-child {
    border-right: none;
  }
`;

export const TableData = styled.td`
  padding: 16px;
  font-size: 14px;
  border-bottom: 1px solid ${({ theme }) => theme.color.gray};
  border-right: 1px solid ${({ theme }) => theme.color.lightGray};
  &:last-child {
    border-right: none;
  }
`;

export const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: ${({ theme }) => theme.color.lightGray};
  }
`;

export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 16px;
`;

export const PaginationButton = styled.button`
  padding: 8px 16px;
  background-color: ${({ theme }) => theme.color.primary};
  border-radius: 4px;
  border: none;
  cursor: pointer;
  
  &:disabled {
    background-color: ${({ theme }) => theme.color.lightGray};
    cursor: not-allowed;
  }
`;

export const PageInfo = styled.span`
  margin-top: 8px;
  font-size: 16px;
  font-weight: 600;
`;