
import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { SkillsService } from 'src/app/servicios/skills.service';
import { Skills } from 'src/app/interfaces/Skills';
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

        public onAddSkill(addForm: NgForm): void {
          document.getElementById('add-experiencia-form').click();
          this.skillsService.addSkill(addForm.value).subscribe(
            (response: Skills) => {
              console.log(response);
              this.getSkills();
              addForm.reset();
            },
            (error: HttpErrorResponse) => {
              alert(error.message);
              addForm.reset();
            }
          );
        }
      
        public onUpdateSkill(skill: Skills): void {
          this.skillsService.updateSkill(skill).subscribe(
            (response: Skills) => {
              console.log(response);
              this.getSkills();
            },
            (error: HttpErrorResponse) => {
              alert(error.message);
            }
          );
        }
      
        public onDeleteSkill(skillId: number): void {
          this.skillsService.deleteSkill(skillId).subscribe(
            (response: void) => {
              console.log(response);
              this.getSkills();
            },
            (error: HttpErrorResponse) => {
              alert(error.message);
            }
          );
        }
  
  public onOpenModal(skill: Skills, mode?: string): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    
    if (mode === 'edit') {
      this.editSkills = skill;
      button.setAttribute('data-target', '#updateSkill');
    }
    
    if (mode === 'add') {
      this.skill=skill;
      button.setAttribute('data-target', '#addSkill');
    }
  
    if (mode === 'delete') {
      this.deleteSkills = skill;
      button.setAttribute('data-target', '#deleteSkill');
    }
    container.appendChild(button);
    button.click();
  }}
      