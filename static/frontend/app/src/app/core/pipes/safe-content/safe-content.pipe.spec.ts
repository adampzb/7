import { SafeContentPipe } from './safe-content.pipe';
import { DomSanitizer } from '@angular/platform-browser';

describe('SafeContentPipe', () => {
  let domSanitizer: jasmine.SpyObj<DomSanitizer>;

  beforeEach(() => {
    domSanitizer = jasmine.createSpyObj('DomSanitizer', ['bypassSecurityTrustHtml']);
  });

  it('create an instance', () => {
    const pipe = new SafeContentPipe(domSanitizer);
    expect(pipe).toBeTruthy();
  });

  it('should transform content using DomSanitizer', () => {
    const pipe = new SafeContentPipe(domSanitizer);
    const testContent = '<div>Test Content</div>';
    
    domSanitizer.bypassSecurityTrustHtml.and.returnValue(testContent);
    
    const result = pipe.transform(testContent);
    expect(result).toBe(testContent);
    expect(domSanitizer.bypassSecurityTrustHtml).toHaveBeenCalledWith(testContent);
  });
});
