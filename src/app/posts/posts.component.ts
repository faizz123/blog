import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  userId: any;
  toDoListArray: any[] = [];
  postName: any = "";
  p: number = 1;

  constructor(
    private actRoute: ActivatedRoute,
    private blogservice: BlogService,
    private router: Router) { }

  ngOnInit() {
    this.userId = this.actRoute.snapshot.paramMap.get('userId');
    this.getData();
  }
  getData() {
    this.blogservice.getPostData(this.userId).subscribe((data) => {

      this.toDoListArray = data;

    }
      ,
      (error) => {
        alert('error message 404 not found');
      })
  }

  searchName() {
    if (this.postName == "") {
      this.getData()
    }
    else {
      this.toDoListArray = this.toDoListArray.filter(res => {
        return res.title.toLocaleLowerCase().match(this.postName.toLocaleLowerCase());
      })

    }
  }

  goToPostDetailPage(postId: any) {
    this.router.navigateByUrl("postDetail/" + postId);
  }

}