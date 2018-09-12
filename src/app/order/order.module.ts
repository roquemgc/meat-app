import {NgModule} from '@angular/core'
import {SharedModule} from '../shared/shared.module'
import {RouterModule, Routes} from '@angular/router'

import {OrderComponent} from './order.component'
import {DeliveryCostsComponent} from './delivery-costs/delivery-costs.component'
import {OrderItensComponent} from './order-itens/order-itens.component'

const ROUTES: Routes = [
  {path: '', component: OrderComponent}
]

@NgModule({
  declarations: [OrderComponent, DeliveryCostsComponent, OrderItensComponent],
  imports: [SharedModule, RouterModule.forChild(ROUTES)]
})

export class OrderModule{}
