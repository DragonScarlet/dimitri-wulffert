import { Pipe, PipeTransform } from '@angular/core';
import {Skill} from "../skill";
import {DATA_BASE, FRAMEWORK, PROGRAMING_LANGUAGE, TOOL} from "../skills.service";

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(array: Array<Skill>): Array<Skill> {
    array.sort((a: any, b: any) => {
      if(a.type == b.type){
        return 0;
      }
      if(a.type == PROGRAMING_LANGUAGE){
        return -1;
      }
      if(b.type == PROGRAMING_LANGUAGE){
        return 1;
      }
      if(a.type == FRAMEWORK){
        return -1;
      }
      if(b.type == FRAMEWORK){
        return 1;
      }
      if(a.type == TOOL){
        return -1;
      }
      if(b.type == TOOL){
        return 1;
      }
      if(a.type == DATA_BASE){
        return -1;
      }
      if(b.type == DATA_BASE){
        return 1;
      }
      return 0;
    });
    return array;
  }

}
