import {CardsComponent} from './cards-component';
import {LoginComponent} from './login-component';
import {ComponentsManager} from './components-manager';

let manager = new ComponentsManager();
manager.addComponent(new LoginComponent());
manager.addComponent(new CardsComponent());
manager.render();
