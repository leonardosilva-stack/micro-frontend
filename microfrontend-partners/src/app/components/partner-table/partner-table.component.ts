import { Component, OnInit } from '@angular/core';
import { PartnerService, Partner } from '../../services/partner.service';

@Component({
  selector: 'app-partner-table',
  templateUrl: './partner-table.component.html',
  styleUrls: ['./partner-table.component.css'],
})
export class PartnerTableComponent implements OnInit {
  partners: Partner[] = [];
  filteredPartners: Partner[] = [];
  displayAddDialog: boolean = false;
  displayEditDialog: boolean = false;
  newPartner: Partial<Partner> = {};
  partnerToEdit: Partial<Partner> = {};

  constructor(private partnerService: PartnerService) {}

  ngOnInit(): void {
    this.partnerService.getPartners().subscribe((data) => {
      this.partners = data;
      this.filteredPartners = data;
    });
  }

  applyFilter(event: Event): void {
    const input = event.target as HTMLInputElement;
    const filterValue = input ? input.value : '';
    this.filteredPartners = this.partners.filter(partner =>
      partner.name.toLowerCase().includes(filterValue.toLowerCase())
    );
  }

  editPartner(partner: Partner): void {
    this.partnerToEdit = { ...partner };
    this.displayEditDialog = true;
  }

  deletePartner(id: string): void {
    this.partnerService.deletePartner(id).subscribe(() => {
      this.partners = this.partners.filter(partner => partner.id !== id);
      this.filteredPartners = this.filteredPartners.filter(partner => partner.id !== id);
    });
  }

  showAddPartnerDialog(): void {
    this.newPartner = {};
    this.displayAddDialog = true;
  }

  addPartner(): void {
    if (this.newPartner.name && this.newPartner.description) {
      this.partnerService.addPartner(this.newPartner as Partner).subscribe(() => {
        this.displayAddDialog = false;
        this.partnerService.getPartners().subscribe((data) => {
          this.partners = data;
          this.filteredPartners = data;
        });
      });
    }
  }

  updatePartner(): void {
    if (this.partnerToEdit.id && this.partnerToEdit.name && this.partnerToEdit.description) {
      this.partnerService.updatePartner(this.partnerToEdit.id, this.partnerToEdit as Partner).subscribe(() => {
        this.displayEditDialog = false;
        this.partnerService.getPartners().subscribe((data) => {
          this.partners = data;
          this.filteredPartners = data;
        });
      });
    }
  }

  goBack(): void {
    console.log('Going back');
  }
}
