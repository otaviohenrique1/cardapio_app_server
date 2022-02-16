import {EventSubscriber, EntitySubscriberInterface} from "typeorm";

@EventSubscriber()
export class RefeicaoSubscriber implements EntitySubscriberInterface<any> {

}
