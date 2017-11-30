import { Component, OnInit } from '@angular/core';
import { journalServices } from '../../services/journal-service';


@Component({
  selector: 'app-entry-list',
  templateUrl: './entry-list.component.html',
  styleUrls: ['./entry-list.component.css']
})
export class EntryListComponent implements OnInit {
  entries:any

  constructor(public journalServices: journalServices) { }

  ngOnInit(){
    this.journalServices.getJournalList().subscribe( list =>{
    this.entries = list;
  });

  }

}
