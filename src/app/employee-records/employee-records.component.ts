import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { EmployeeDetailsService } from '../service/employee-details.service';
import { MessageModel } from '../modal/Message';
import { Paginationservice } from '../service/pagination.service';
import { CONSTANTS } from '../common/constants';
import { getAllLifecycleHooks } from '@angular/compiler/src/lifecycle_reflector';


@Component({
  selector: 'app-employee-records',
  templateUrl: './employee-records.component.html',
  styleUrls: ['./employee-records.component.scss']
})
export class EmployeeRecordsComponent implements OnInit {

  employeedetails;
  filterby;
  pagesize;
  sortby;
  sortparams;
  filterparams;
  searchvalue;
  cursorvalue;
  dropdownPaginationId;
  pagesList = CONSTANTS.EMPLOYEE.PAGELIST;
  selectedPageSize: any;
  sortcounter = 0;
  iseditmode: boolean = false;
  togglebuttonvalue: string = CONSTANTS.EMPLOYEE.EDITMODE;
  loader = true;
  allItems: any;
  // pager object
  pager: any = {};
  // paged items
  pagedItems: any[];

  constructor(private route: ActivatedRoute,
    private router: Router, private employeeDetailService: EmployeeDetailsService, private pagerService: Paginationservice) {
    this.sortby = { "sortbyfieldname": "", "sortbymethodvalue": "", "type": "" };
    this.filterby = { "fieldname": "", "filtervalue": "", "filterbymethod": "" };
  }

  private

  ngOnInit(selectPageSize?) {
    this.dropdownPaginationId = "employeedropdown";
    this.pagesize = selectPageSize ? selectPageSize : this.selectedPageSize;
    this.employeeDetailService.executeEmployeeDetailService().subscribe(
      response => {
        this.getvaluesfromparams(selectPageSize);
        this.employeedetails = response;
        if (this.sortparams) {
          this.getdatasortby(this.sortparams, "", "", "");
        }

        if (this.filterparams) {
          this.getdatafilterby(this.filterparams)
        }


        this.allItems = response;
        this.setPage(1, this.pagesize);
        this.loader = false
      },
      error => {
        this.loader = false;
      }
    );


  }

  getvaluesfromparams(selectPageSize) {
    this.filterparams = this.route.snapshot.queryParamMap.get('filter');
    this.pagesize = selectPageSize !== undefined ? selectPageSize : parseInt(this.route.snapshot.queryParamMap.get('pagesize'));
    this.searchvalue = this.route.snapshot.queryParamMap.get('search');
    this.sortparams = this.route.snapshot.queryParamMap.get('sort');
    this.cursorvalue = this.route.snapshot.queryParamMap.get('cursor');
    if (!this.pagesize) {
      this.pagesize = 5;
    }
  }
  
  getdatasortby(data: any, methodtype: any, fieldname: any, checkvariabletype) {
    let sortdetails: any, checktype: any;
    if (data !== "noparams") {
      sortdetails = JSON.parse(data);
      if (isNaN(this.employeedetails[0][sortdetails[0].field])) {
        checktype = "string"
      }
      else {
        checktype = "number"
      }
    }

    this.sortby = { "sortbyfieldname": fieldname !== "" ? fieldname : sortdetails[0].field, "sortbymethodvalue": methodtype !== "" ? methodtype : sortdetails[0].method, "type": checkvariabletype !== "" ? checkvariabletype : checktype };

  }


  getdatafilterby(data: any) {
    let filterdetails = JSON.parse(data), checktype;

    this.filterby = { "fieldname": filterdetails[0].field, "filtervalue": filterdetails[0].parameters, "filterbymethod": filterdetails[0].method };

  }


  // Pagination values

  setPage(page: number, pageSize: number) {
    // get pager object from service

    this.pager = this.pagerService.getPager(this.allItems.length, page, pageSize);

    // get current page of items
    this.employeedetails = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
  }

  //Sort columns by header
  changeorder(headervalue: any, type) {
    if (this.sortcounter === 0) {
      this.getdatasortby("noparams", "ascending", headervalue, type);
    }
    else if (this.sortcounter === 1) {
      this.getdatasortby("noparams", "descending", headervalue, type);
    }
    else if (this.sortcounter === 3) {
      this.getdatasortby("noparams", "ascending", "id", "number");
      this.sortcounter = 0;
    }

    this.sortcounter++;

  }

  //Edit table mode

  edittable(event: any, identity: number, attrtype: string) {
    return this.employeedetails.map(data => {
      if (data.id === identity) {
        data[attrtype] = event.target.value;
      }
    });

  }

  //Show hide view and edit mode
  toggleDisplay() {
    this.iseditmode = !this.iseditmode;
    if (this.iseditmode) {
      this.togglebuttonvalue = CONSTANTS.EMPLOYEE.VIEWMODE;
    }
    else {
      this.togglebuttonvalue = CONSTANTS.EMPLOYEE.EDITMODE;
    }


  }

}
