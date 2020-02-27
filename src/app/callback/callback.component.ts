import { Component, OnInit } from '@angular/core';
import { AwsService } from '../services/aws.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-callback',
  templateUrl: './callback.component.html',
  styleUrls: ['./callback.component.css']
})
export class CallbackComponent implements OnInit {

  constructor(private route: ActivatedRoute, private location: Location, private awsService: AwsService) { }

  ngOnInit() {
    const code = this.route.snapshot.queryParamMap.get('code');
    this.awsService.getTokens(code).subscribe(res => console.log(res));
  }

}
