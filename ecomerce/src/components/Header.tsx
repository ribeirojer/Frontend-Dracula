import styled from 'styled-components'

type Props = {}

const HeaderWrapper = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 88px;
    padding: 0 5%;
    font-size: 1.5em;
    color: #fff;
    list-style: none;
`;
const Logo = styled.span`
    color: #fff;
    font-size: 2rem;
    font-family: 'Dancing Script';
    font-weight: 700;
`;
const List = styled.ul`
    display: flex;
`;

const Header = (props: Props) => {
  return (
    <HeaderWrapper>
        <a href="index.html">
            <Logo>Maria</Logo>
        </a>
        <List>
            <li className="nav-item active">
                <a className="nav-link" href="index.html">Home</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="menu.html">Menu</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="about.html">About</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="book.html">Book Table</a>
            </li>
        </List>
        <div>
            <a href="" className="order_online">
                Order Online
            </a>
        </div>
    </HeaderWrapper>
  )
}

export default Header;