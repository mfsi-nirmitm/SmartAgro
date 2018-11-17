import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { WorkStatusComponent } from './work-status/work-status.component';
import { MODAL_ATTRIBUTES } from '../../constants/application-setting.constant';
import { JobsService } from '../../service/jobs.service';
import { SpinnyService } from '../../shared/spinny/spinny.service';
import { Observable, Subscription } from 'rxjs';
import { Overview } from '../../model/overview.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less']
})
export class DashboardComponent implements OnInit {

  private _apiCallSubscriptions: Subscription[] = [];
  public jobOverview: Overview;

  constructor(private _modalService: NgbModal,
    private _spinnyService: SpinnyService,
    private _jobService: JobsService) { }

  ngOnInit() {
    this.jobOverview = {
      'activeJobs': 38,
      'completedJobs': 6,
      'pendingApprovals': 12,
      'rightFirstTimePercentage': 92.2
    }
  }

  //for doughnut chart1
  public doughnutChartLabels: string[] = ['Administration', 'In-Progress', 'Pending Approval', 'On Hold'];
  public doughnutChartData =
    [11.7, 47.3, 31.5, 9.5];
  // [
  //   {
  //     type: "doughnut",
  //     indexLabelPlacement: "outside",
  //     radius: "90%",
  //     innerRadius: "75%",
  //     data: [11.7, 47.3, 31.5, 9.5],
  //     dataPoints: [
  //       { y: 11.7, label: "Administration" },
  //       { y: 47.3, label: "In-Progress" },
  //       { y: 31.5, label: "Pending Approval" },
  //       { y: 9.5, label: "On Hold" },
  //     ]
  //   }
  // ]
  public doughnutChartType: string = 'doughnut';
  public chartColors: Array<any> = [{
    backgroundColor: ['#2db2fc', '#8cc63e', '#fbaf3f', '#ff0000']
  }];
  public options = {
    responsive: true
  };

  //for doughnut chart2
  public doughnutChartLabels2: string[] = ['Planned', 'Unplanned'];
  public doughnutChartData2 =
    [60, 18];
  public chartColors2: Array<any> = [{
    backgroundColor: ['#2db2fc', '#cccccc']
  }];


  //for bar chart
  public barChartOptions: any = {
    scales: {
      xAxes: [{
        gridLines: {
          drawOnChartArea: false
        }
      }],
      yAxes: [{
        display: false,
        gridLines: {
          drawOnChartArea: false
        }
      }]
    }
  };
  public barChartLabels: string[] = ['On Time', 'Late'];
  public barChartType: string = 'bar';
  public barChartData: any[] = [
    { data: [29, 9], label: 'Series A' },
    { data: [6, 6], label: 'Series B' }
  ];
  public barChartColors: Array<any> = [{
    backgroundColor: ['#8cc63e', '#ff0000', '#cccccc']
  }];


  //for bar chart2
  public barChartLabels2: string[] = ['Marketing', 'Procurement'];
  public barChartType2: string = 'bar';
  public barChartColors2: Array<any> = [{
    backgroundColor: ['#7030a0', '#8cc63e']
  }];
  public barChartData2: any[] = [
    { data: [60, 40], label: 'Series A' },
    { data: [0, 0], label: 'Series B' },
  ];

  //for bar chart3
  public barChartData3: any[] = [
    { data: [40, 20], label: 'Series A' },
    { data: [0, 0], label: 'Series B' },
  ];

  //for horizontal bar chart 1
  showXAxis = false;
  showYAxis = true;
  showLegend = false;
  showXAxisLabel = true;
  xAxisLabel = '';
  showYAxisLabel = true;
  yAxisLabel = '';
  view: any[] = [300, 130];
  colorScheme1 = {
    domain: ['#00b0f0', '#00b0f0', '#00b0f0', '#00b0f0']
  };
  multi1: any[] = [
    {
      "name": "Output",
      "value": 80
    },
    {
      "name": "Retouching",
      "value": 12
    },
    {
      "name": "Assembly",
      "value": 64
    },
    {
      "name": "Production Art",
      "value": 75
    },
  ];

  //for horizontal bar chart 2
  colorScheme2 = {
    domain: ['#8cc63e', '#8cc63e', '#8cc63e', '#8cc63e']
  };
  multi2: any[] = [
    {
      "name": "Output",
      "value": 62
    },
    {
      "name": "Retouching",
      "value": 14
    },
    {
      "name": "Assembly",
      "value": 78
    },
    {
      "name": "Production Art",
      "value": 65
    },
  ];

  //for horizontal bar chart 3
  colorScheme3 = {
    domain: ['#7030a0', '#7030a0', '#7030a0', '#7030a0']
  };
  multi3: any[] = [
    {
      "name": "Output",
      "value": 82
    },
    {
      "name": "Retouching",
      "value": 20
    },
    {
      "name": "Assembly",
      "value": 59
    },
    {
      "name": "Production Art",
      "value": 67
    },
  ];

  //for horizontal bar chart 4
  colorScheme4 = {
    domain: ['#7030a0', '#8cc63e']
  };
  multi4: any[] = [
    {
      "name": "Procurement",
      "value": 200
    },
    {
      "name": "Marketing",
      "value": 210
    }
  ];

  //for horizontal bar chart 5
  multi5: any[] = [
    {
      "name": "August",
      "value": 112
    },
    {
      "name": "July",
      "value": 55
    },
    {
      "name": "June",
      "value": 65
    },
    {
      "name": "May",
      "value": 45
    },
    {
      "name": "April",
      "value": 28
    },
    {
      "name": "March",
      "value": 10
    },
  ];


  // events
  public chartClicked(e: any): void {
    console.log(e);
    const modalRef = this._modalService.open(WorkStatusComponent, MODAL_ATTRIBUTES);

  }

  public chartHovered(e: any): void {
    console.log(e);
  }
}
