import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  toDoListArray:any[]=[];
  name:any="";
  companyName:any="";
  constructor(private studentservice:BlogService,
    private router:Router)
  {

  }
  ngOnInit()
  {
    this.getData()

  }
  getData()
  {
    this.studentservice.getdata().subscribe((data)=>
    {
      
        this.toDoListArray=data;
       
    }
  ,
  (error)=>
  {
      alert('error message 404 not found');
  }
    )
  }
  goToPostPage(userId:any)
  {
    this.router.navigateByUrl("post/"+userId);
  }

  
  searchName()
  {
    if(this.name=="")
    {
      this.getData()
    }
    else
    {
      this.toDoListArray=this.toDoListArray.filter(res=>
        {
          return res.name.toLocaleLowerCase().match(this.name.toLocaleLowerCase());
        })

    }
  }
  searchCompanyName()
  {
    if(this.companyName=="")
    {
      this.getData()
    }
    else
    {
      this.toDoListArray=this.toDoListArray.filter(res=>
        {
          return res.company.name.toLocaleLowerCase().match(this.companyName.toLocaleLowerCase());
        })

    }
  }

}
