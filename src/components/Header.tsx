import { MagnifyingGlass, ShoppingCart, UserCirclePlus } from 'phosphor-react';
import { Link } from 'react-router-dom';
import styled from 'styled-components'

type Props = {}

const HeaderWrapper = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    top: 0;
    width: 100%;
    height: 88px;
    padding: 0 8%;
    z-index: 2;
`;
const Logo = styled.span`
    font-size: 2.5rem;
    font-family: 'Dancing Script';
    font-weight: 700;
    a {
        color: #fff;
        text-decoration: none;
    }
    
`;
const List = styled.ul`

    li a {
        padding: 0.3rem 1rem;
        border: 2px solid #fff;
        border-radius: 1rem 1rem 0 1rem;
        margin: 0 0.5rem;
        color: #fff;
        font-weight: 500;
        text-decoration: none;
        transition: 0.3s;
    }
    li:hover a {
        color: var(--cor-A);
        background-color: #fff;
    }
`;
const User = styled.div`
    display: flex;
    justify-content: flex-end;
    font-size: 2rem;
    span a {
        color: #fff;
        margin: 0 0 0 0.5rem;
    }
`;
const ButtonSearch = styled.div`
    display: flex;
    position: relative;
    input {
        display: none;
        z-index: 2;
    }
    &:hover input {
        display: block;
    }
    svg {
        position: absolute;
        right: 0.5rem;
    }
    &:hover svg {
        color: var(--cor-B);
        z-index: 3;
    }
`;

const Header = (props: Props) => {
  return (
    <HeaderWrapper>
        <Logo>
            <Link to={"/"}>Maria</Link>
        </Logo>
        <List>
            <li>
                <Link to={"/corte"}>Corte</Link>
            </li>
            <li>
                <Link to={"/impressao"}>Impressão</Link>
            </li>
            <li>
                <Link to={"/produtos"}>Pronta entrega</Link>
            </li>
        </List>
        <User>
            <ButtonSearch>
                <input type="text" />
                <MagnifyingGlass size={32} />
            </ButtonSearch>
            <span><Link to={"/shop"}><ShoppingCart size={32} weight="fill" /></Link></span>
            <span><Link to={"/user"}><UserCirclePlus size={32} weight="fill" /></Link></span>
        </User>
    </HeaderWrapper>
  )
}

export default Header;