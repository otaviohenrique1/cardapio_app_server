import {EventSubscriber, EntitySubscriberInterface} from "typeorm";

@EventSubscriber()
export class UsuarioSubscriber implements EntitySubscriberInterface<any> {
  
}
