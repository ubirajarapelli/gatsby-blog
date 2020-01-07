import React from 'react'
import Link from 'gatsby'
import * as S from './styled'

const Pagination = ({isFirst, isLast, currentPage, numPage, prevPage, nextPage}) => (
  <S.PaginarionWrapper>
    {!isFirst &&
      <Link to={prevPage}>Página anterior</Link>
    } 
    
    {currentPage} de {numPage}
    
    {!isLast &&
      <Link to={nextPage}>Próxima página</Link>
    }
  </S.PaginarionWrapper>
)

export default Pagination
