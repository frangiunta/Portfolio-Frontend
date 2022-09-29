
import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { SkillsService } from './skills.service';
import { Skills } from './skills';
import { NgForm } from '@angular/forms';
import {MatProgressBarModule} from '@angular/material/progress-bar';
@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
public skills:Skills[]=[];
public editSkills:Skills;
public deleteSkills:Skills;
public skill:Skills;
  constructor(private skillsService:SkillsService) { }

  ngOnInit(): void {
    this.getSkills();
  }

  public getSkills():void{
    this.skillsService.GetSkill().subscribe
    (
        (response:Skills[])=>{
          this.skills=response;
          console.log(this.skills);}
        ,(error:HttpErrorResponse)=>
          {alert(error.message)}
    );
        }

        public porcentaje(string){
        
          return this.skill.porcentaje;
        }
      }