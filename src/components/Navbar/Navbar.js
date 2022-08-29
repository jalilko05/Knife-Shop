import styled from 'styled-components'
import { ReactComponent as menu } from '../../assets/icons/menu.svg'
import { ReactComponent as map } from '../../assets/icons/map.svg'
import { ReactComponent as shop } from '../../assets/icons/shop.svg'
import { ReactComponent as email } from '../../assets/icons/email.svg'
import { ReactComponent as lupa } from '../../assets/icons/lupa.svg'
import { ReactComponent as logo } from '../../assets/icons/logo.svg'

export const Menu = styled(menu)``
export const Map = styled(map)``
export const Shop = styled(shop)``
export const Email = styled(email)``
export const Lupa = styled(lupa)``
export const Logo = styled(logo)``

export const Header = styled.header`
 display: flex;
 align-items: center;
 justify-content: center;
 width: 100%;
 height: 71px;
 background: rgba(33, 33, 33, 0.8);
 backdrop-filter: blur(11px); 
`
export const Container = styled.div`
 width: 100%;
 max-width: 1440px;
 display: flex;
 align-items: center;
 justify-content: space-between;


 .left{
    display: flex;
    justify-content: space-between;
    width: 242px;
 }
 .left p{
    color: white;
 }
 .right{
    display: flex;
    justify-content: space-between;
    align-items:center;
    width: 122px;
 }
`


