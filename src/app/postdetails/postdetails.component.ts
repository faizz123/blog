import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-postdetails',
  templateUrl: './postdetails.component.html',
  styleUrls: ['./postdetails.component.css']
})
export class PostdetailsComponent implements OnInit {

  postId: any;
  toDoListArray: any[] = [];
  showComments: boolean = false;
  comments: any[] = [];
  title: any = "";
  name: any;
  body: any = "";
  companyName: any;

  constructor(private actroute: ActivatedRoute,
    private studentservice: BlogService,
    private router: Router) { }

  ngOnInit() {
    this.postId = this.actroute.snapshot.paramMap.get('postId');
    this.getData();
  }
  getData() {
    this.studentservice.getPostDetailData(this.postId).subscribe((data) => {
      this.toDoListArray.push(data);
    },
      (error) => {
        alert('error message 404 not found');
      }

    )
  }

  getComments(postId: any) {
    this.showComments = true;
    this.studentservice.getComments(this.postId).subscribe((data) => {
      this.comments = data;
    },
      (error) => {
        alert('error message 404 not found');
      })
  }

  close() {
    this.showComments = false;
  }

  deletePost(postId: any, userId: any) {
    this.studentservice.deletePost(1).subscribe((data) => {
      if (data) {
        alert("Deleted Sucessfully!");
        this.router.navigateByUrl("post/" + userId);
      }
    },
      (error) => {
        alert('error message 404 not found');
      })
  }


  searchTitle() {
    if (this.title == "") {
      this.toDoListArray = [];
      this.getData()
    }
    else {
      this.toDoListArray = this.toDoListArray.filter(res => {
        return res.title.toLocaleLowerCase().match(this.title.toLocaleLowerCase());
      })

    }
  }
  searchBody() {
    if (this.body == "") {
      this.toDoListArray = [];
      this.getData()
    }
    else {

      this.toDoListArray = this.toDoListArray.filter(res => {
        return res.body.toLocaleLowerCase().match(this.body.toLocaleLowerCase());
      })

    }
  }
}