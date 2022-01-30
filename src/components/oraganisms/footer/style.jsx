import S from "styled-components"

const Container = S.footer`
    width:100%;
    height:200px;
`

const Fixed = S.div`
    width:100%;
    height:150px;
    position:fixed;
    border-top:1px solid #CCC;
    bottom: 0px;
    display:flex;
    align-items:center;
`

const Content = S.span`
    margin:auto;
`

export {
    Container,
    Fixed,
    Content
}