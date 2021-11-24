import { Component, OnInit, TemplateRef } from '@angular/core';
import { TicketsService } from 'src/servicios/tickets.service';
import { BsModalService, BsModalRef } from '@bit/valor-software.ngx-bootstrap.modal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  modalRef: BsModalRef | undefined;
  title = 'proyectotickets';
  tickets: any;
  constructor(	
    private ticketsService: TicketsService,
    private modalService: BsModalService   ){
  this.tickets = [];
  }
  async getTickets(){
    this.ticketsService.GET_tickets_operador().then((res)=>{
      this.tickets = this.ticketsService.tickets.recordset;
      console.log(this.tickets)

    })
  }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  async ngOnInit() {
    console.log('inicio')
    this.getTickets();
  }
}
