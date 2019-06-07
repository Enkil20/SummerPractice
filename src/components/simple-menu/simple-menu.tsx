import { Component, h, Method} from '@stencil/core';
@Component({
    tag: 'simple-menu',
    styleUrl: 'simple-menu.scss'
})
export class SimpleMenu{
    @Method()
    openMenu(){
        let menuButton = document.getElementById("show-menu");
        let bg = document.getElementById("bg-opacity");
        let wrapper = document.getElementById("menu-wrapper");

        menuButton.classList.toggle("active");
        bg.classList.toggle("showOpacity");
        wrapper.classList.toggle("showMenu");
    }
    render(){
        return (
            <span>
                <div id="bg-opacity"></div>
                <div id="wrapper">
                    <base-nav></base-nav>
                    <div id="show-menu" class="start-menu" onClick={()=> this.openMenu()}>
                        <span class="chevron"></span>
                    </div>
                    <div id="menu-wrapper">
                        <div id="swipe-cmpnt">
                            <p>Select one of the options below</p>
                            <ul>
                                <li><a href="#">Menu <span>Option 1</span></a></li>
                                <li><a href="#">Menu <span>Option 2</span></a></li>
                                <li><a href="#">Menu <span>Option 3</span></a></li>
                                <li><a href="#">Menu <span>Option 4</span></a></li>
                                <li><a href="#"><span class="far fa-life-ring"></span>Help Center</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </span>
        )
    }
}