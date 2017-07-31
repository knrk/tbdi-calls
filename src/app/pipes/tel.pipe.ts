import { Pipe, PipeTransform } from '@angular/core';
import { invalidPipeArgumentError } from './invalid_pipe_argument_error';

@Pipe({name: 'tel'})

export class TelPipe implements PipeTransform {
  transform(value: string): string {
    if (!value) return value;

    if (typeof value !== 'string') {
      throw invalidPipeArgumentError(TelPipe, value);
    }

    let a = [],
        i = 3;
    
    do { a.push(value.substring(0, i)) }
    while ( (value = value.substring(i, value.length)) != "" );

    return a.join(" ");
  }
}