import { Pipe, PipeTransform } from '@angular/core';
import {Skill} from "../skill";
import {DATA_BASE, FRAMEWORK, PROGRAMING_LANGUAGE, TOOL} from "../skills.service";

@Pipe({
    name: 'sort',
    standalone: false
})
export class SortPipe implements PipeTransform {

  skills = [PROGRAMING_LANGUAGE, FRAMEWORK, TOOL, DATA_BASE];

  transform(array: Array<Skill>): Array<Skill> {
    array.sort((a: any, b: any) => {
      if(a.type == b.type){
        return 0;
      }
      for (let skill of this.skills) {
        if(a.type == skill){
          return -1;
        }
        if(b.type == skill){
          return 1;
        }
      }
      return 0;
    });
    return array;
  }

}
