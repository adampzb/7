import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  standalone: false,
  name: 'timeSince'
})
export class TimeSincePipe implements PipeTransform {
  transform(value: string | Date): string {
    if (!value) return '';
    
    const now = new Date();
    const date = new Date(value);
    const seconds = Math.floor((now.getTime() - date.getTime()) / 1000);
    
    const intervals = [
      { label: 'year', seconds: 31536000 },
      { label: 'month', seconds: 2592000 },
      { label: 'day', seconds: 86400 },
      { label: 'hour', seconds: 3600 },
      { label: 'minute', seconds: 60 },
      { label: 'second', seconds: 1 }
    ];
    
    for (const interval of intervals) {
      const count = Math.floor(seconds / interval.seconds);
      if (count > 0) {
        return count === 1 ? `1 ${interval.label}` : `${count} ${interval.label}s`;
      }
    }
    
    return 'just now';
  }
}