import { Component, OnInit } from '@angular/core';
import { CompanyService, Company } from '../../services/company.service';

@Component({
  selector: 'app-company-table',
  templateUrl: './company-table.component.html',
  styleUrls: ['./company-table.component.css'],
})
export class CompanyTableComponent implements OnInit {
  companies: Company[] = [];
  filteredCompanies: Company[] = [];
  displayAddDialog: boolean = false;
  displayEditDialog: boolean = false;
  newCompany: Partial<Company> = {};
  companyToEdit: Partial<Company> = {};

  constructor(private companyService: CompanyService) {}

  ngOnInit(): void {
    this.companyService.getCompanies().subscribe((data: Company[]) => {
      this.companies = data;
      this.filteredCompanies = data;
    });
  }


  applyFilter(event: Event): void {
    const input = event.target as HTMLInputElement;
    const filterValue = input ? input.value : '';
    this.filteredCompanies = this.companies.filter(company =>
      company.companyName.toLowerCase().includes(filterValue.toLowerCase())
    );
  }

  editCompany(company: Company): void {
    this.companyToEdit = { ...company };
    this.displayEditDialog = true;
  }

  deleteCompany(id: string): void {
    this.companyService.deleteCompany(id).subscribe(() => {
      this.companies = this.companies.filter(company => company.id !== id);
      this.filteredCompanies = this.filteredCompanies.filter(company => company.id !== id);
    });
  }

  showAddCompanyDialog(): void {
    this.newCompany = {};
    this.displayAddDialog = true;
  }

  addCompany(): void {
    if (this.newCompany.name && this.newCompany.companyName) {
      this.companyService.addCompany(this.newCompany as Company).subscribe(() => {
        this.displayAddDialog = false;
        this.companyService.getCompanies().subscribe((data: Company[]) => {
          this.companies = data;
          this.filteredCompanies = data;
        });
      });
    }
  }

  updateCompany(): void {
    if (this.companyToEdit.id && this.companyToEdit.name && this.companyToEdit.companyName) {
      this.companyService.updateCompany(this.companyToEdit.id, this.companyToEdit as Company).subscribe(() => {
        this.displayEditDialog = false;
        this.companyService.getCompanies().subscribe((data: Company[]) => {
          this.companies = data;
          this.filteredCompanies = data;
        });
      });
    }
  }

  goBack(): void {
    console.log('Going back');
  }
}
