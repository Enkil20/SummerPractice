import { Component, h} from '@stencil/core';
@Component({
    tag: 'base-nav',
    styleUrl: 'base22-nav.scss'
})
export class BaseNav{
    render(){
        return (
            <nav>
                <img src="../../../assets/logo22.png" alt="base22 logo"/>
            </nav>
        )
    }
}