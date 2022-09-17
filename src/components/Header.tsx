import { MagnifyingGlass, ShoppingCart, UserCirclePlus } from 'phosphor-react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components'
import image from '../assets/woman.png'

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
    font-size: 2rem;
    font-family: 'Dancing Script';
    font-weight: 700;
    a {
        display: flex;
        align-items: center;
        color: var(--cor-C);
        text-decoration: none;
    }
    img {
        border: 1px solid #fff;
        border-radius: 50%;
        height: 40px;
        margin-right: 0.5rem;
    }
    
`;
const List = styled.ul`

    li a {
        padding: 0.5rem 1.5rem;
        margin: 0 0.5rem;
        cursor: pointer;
        border-radius: 25px;
        color: #fff;
        font-weight: 500;
        text-decoration: none;
        text-transform: uppercase;
        transition: 0.3s;
    }
    li:hover a {
        color: var(--cor-A);
        background-color: #fff;
    }
    li:last-child a {
        border: 1px solid #fff;
    }
`;
const User = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    font-size: 2rem;
    width: 253px;
    span a {
        color: #fff;
        margin: 0 0 0 0.5rem;
    }
`;
const ButtonSearch = styled.form`
    display: flex;
    align-items: center;
    position: relative;
    input {
        display: none;
        z-index: 2;
    }
    &:hover input {
        display: block;
        padding: 8px 16px;
        color: var(--cor-B);
        border-radius: 45px;
        -webkit-transition: 0.3s;
        transition: 0.3s;
        border: 2px solid var(--cor-B);
        font-weight: 700;
        cursor: text;
    }
    svg {
        color: #fff;
        position: absolute;
        right: 0.5rem;
        cursor: pointer;
    }
    &:hover svg {
        color: var(--cor-B);
        z-index: 3;
    }
`;

const Header = (props: Props) => {

    const navigate = useNavigate()
    function handleSubmit(q:string): void {
        navigate('/produtos')
    }
  return (
    <HeaderWrapper>
        <Logo>
            <Link to={"/"}><img src={image} alt="" />Maria</Link>
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
                <input onSubmit={(e:any)=>{handleSubmit(e.target.value)}} type="text" />
                <MagnifyingGlass size={32} />
            </ButtonSearch>
            <span><Link to={"/shop"}><ShoppingCart size={32} weight="fill" /></Link></span>
            <span><Link to={"/user"}><UserCirclePlus size={32} weight="fill" /></Link></span>
        </User>
    </HeaderWrapper>
  )
}

export default Header;