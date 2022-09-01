import styled from 'styled-components'

type Props = {}

const HeaderWrapper = styled.header`
    display: flex;
    justify-content: space-between;
    position: fixed;
    align-items: center;
    height: 88px;
    padding: 0 5%;
    font-size: 1.5em;
    list-style: none;
`;
const Logo = styled.span`
    font-size: 2rem;
    font-family: 'Dancing Script';
    font-weight: 700;
`;
const List = styled.ul`
    display: flex;
    list-style: none;
    li {
        padding: 0 1rem;
    }
`;

const Header = (props: Props) => {
  return (
    <HeaderWrapper>
        <a href="index.html">
            <Logo>Maria</Logo>
        </a>
        <List>
            <li>
                <a href="index.html">Home</a>
            </li>
            <li>
                <a href="menu.html">Menu</a>
            </li>
            <li>
                <a href="about.html">About</a>
            </li>
            <li>
                <a href="book.html">Book Table</a>
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