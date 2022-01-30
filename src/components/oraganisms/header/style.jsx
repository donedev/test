import S from "styled-components"

const Container = S.header`
    display: flex;
    height: 75px;
    border-bottom: 1px solid #CCC;
`

const LogoWrapper = S.div`
`

const Logo = S.img`
`

const MenuListWrapper = S.div`
    margin-left:auto;
`

const MenuList = S.ul`
    list-style:none;
    display:flex;
    margin:0px;
    padding:0px;
`

const Menu = S.li`
    & {
        a {
            text-decoration: none;
            color:black;        
        }
    }
`

export { 
    Container,
    LogoWrapper,
    Logo,
    MenuListWrapper,
    MenuList,
    Menu
}