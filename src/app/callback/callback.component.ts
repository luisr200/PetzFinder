import { Component, OnInit } from '@angular/core';
import { AwsService } from '../services/aws.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-callback',
  templateUrl: './callback.component.html',
  styleUrls: ['./callback.component.css']
})
export class CallbackComponent implements OnInit {

  constructor(private route: ActivatedRoute, private location: Location, private awsService: AwsService, private userService: UserService) { }

  ngOnInit() {
    const code = this.route.snapshot.queryParamMap.get('code');
    this.awsService.getTokens2(code).then(p => {this.userService.getUser('').subscribe(res => console.log(res)); this.userService.getPetzfinderUser('').subscribe(res => console.log(res))});
    //this.userService.getUser('').subscribe(res => console.log(res))
  }
}
