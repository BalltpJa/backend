import { Injectable } from '@nestjs/common';
import _ from 'underscore'

@Injectable()
export class InfoService {
  shuffling(textdata: string) {
    if (textdata.length === 1) {
      return [textdata]
    }
    let result = [];
    let setResult = new Set<string>()

    for (let index = 0; index < textdata.length; index++) {
      const element = textdata[index];
      if (setResult.has(element)) continue;
      setResult.add(element)
      let setSlice = textdata.slice(0, index) + textdata.slice(index + 1)
      for (let item of this.shuffling(setSlice)) {
        result.push(element + item)
      }

    }
    console.log('result : ', result);
    return result;
  }

  oddnumber(number: number[]) {
    const result = []
    for (const item of _.uniq(number)) {
      const data = []
      for (const element of number) {
        if (item === element) {
          data.push(element)
        }
      }
      if ((data.length % 2) !== 0) {
        result.push(...(_.uniq(data)))
      }
    }
    console.log('result:', result);
    return result
  }

  countsmikey(textfile: string[]) {
    const result = []
    const smileys = [":)", ":D", ";-D", ":~)"]
    for (const item of smileys) {

      if (textfile.includes(item)) {
        result.push(item)
      }

    }
    console.log('result:', result.length);
    return result.length
  }
}

