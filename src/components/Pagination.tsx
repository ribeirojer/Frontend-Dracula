import { Button } from "dracula-ui";
import { useState } from "react";
import styled from "styled-components";

interface Props {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const PaginationWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  margin-top: 20px;

  ul {
    display: flex;
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  button {
    margin: 0 5px;
  }

  p {
    margin: 1rem 0;
  }
`;

function Pagination(props: Props) {
  const [currentPage, setCurrentPage] = useState(props.currentPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    props.onPageChange(page);
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= props.totalPages; i++) {
      pageNumbers.push(
        <li key={i}>
          <Button
            disabled={i === currentPage}
            onClick={() => handlePageChange(i)}
          >
            {i}
          </Button>
        </li>
      );
    }
    return pageNumbers;
  };

  return (
    <PaginationWrapper>
      <ul>
        <Button
          disabled={currentPage === 1}
          onClick={() => handlePageChange(currentPage - 1)}
        >
          Anterior
        </Button>
        {renderPageNumbers()}
        <Button
          disabled={currentPage === props.totalPages}
          onClick={() => handlePageChange(currentPage + 1)}
        >
          Próximo
        </Button>
      </ul>
      <p className="drac-text">
        Página {currentPage} de {props.totalPages}
      </p>
    </PaginationWrapper>
  );
}

export default Pagination;
