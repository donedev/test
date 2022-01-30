import { NavLink } from "react-router-dom";
import { Container, LogoWrapper, Logo, MenuListWrapper, MenuList, Menu } from "./style"


function Header(){    
    const menuList = [
        {'path':'/', 'title':'Home'}
        , {'path':'/about', 'title':'About'}
    ];
    
    return (
        <Container>

            <LogoWrapper>
                <Logo/>
            </LogoWrapper>

            <MenuListWrapper>
                <MenuList>
                    {
                        menuList.map((menu, index) => (
                            <Menu key={index}>
                                <NavLink to={menu.path}>
                                    {menu.title}
                                </NavLink>
                            </Menu>
                        ))
                    }
                </MenuList>
            </MenuListWrapper>

        </Container>
    )
}

export default Header;