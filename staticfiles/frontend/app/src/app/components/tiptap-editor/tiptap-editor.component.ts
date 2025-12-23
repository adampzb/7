import { Component, Input, Output, EventEmitter, OnInit, OnDestroy, ViewChild, ElementRef, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Editor } from '@tiptap/core';
import StarterKit from '@tiptap/starter-kit';

@Component({
  selector: 'app-tiptap-editor',
  template: `
    <div class="tiptap-editor">
      <div #editorElement class="editor-content"></div>
    </div>
  `,
  styles: [
    `
    .tiptap-editor {
      border: 1px solid #ddd;
      border-radius: 4px;
      min-height: 200px;
      padding: 10px;
    }
    
    .editor-content {
      min-height: 150px;
    }
    
    .ProseMirror {
      outline: none;
      min-height: 150px;
    }
    
    .ProseMirror:focus {
      outline: 2px solid #1976d2;
    }
    `
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TiptapEditorComponent),
      multi: true
    }
  ],
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule]
})
export class TiptapEditorComponent implements ControlValueAccessor, OnInit, OnDestroy {
  
  @ViewChild('editorElement', { static: true }) editorElement!: ElementRef<HTMLElement>;
  @Input() placeholder: string = 'Write something amazing...';
  @Output() contentChange = new EventEmitter<string>();
  
  private editor: Editor | null = null;
  private _value: string = '';
  
  // ControlValueAccessor methods
  onChange: (value: string) => void = () => {};
  onTouched: () => void = () => {};
  
  ngOnInit() {
    this.initializeEditor();
  }
  
  private initializeEditor() {
    if (!this.editorElement) {
      console.error('Editor element not available');
      return;
    }
    
    this.editor = new Editor({
      element: this.editorElement.nativeElement,
      extensions: [
        StarterKit,
      ],
      content: this._value,
      onUpdate: ({ editor }) => {
        const html = editor.getHTML();
        this._value = html;
        this.onChange(html);
        this.contentChange.emit(html);
      },
      editorProps: {
        attributes: {
          class: 'editor-content',
          placeholder: this.placeholder,
        },
      },
    });
  }
  
  // ControlValueAccessor implementation
  writeValue(value: string): void {
    this._value = value || '';
    if (this.editor) {
      this.editor.commands.setContent(this._value);
    }
  }
  
  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }
  
  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }
  
  setDisabledState(isDisabled: boolean): void {
    if (this.editor) {
      this.editor.setEditable(!isDisabled);
    }
  }
  
  ngOnDestroy() {
    if (this.editor) {
      this.editor.destroy();
    }
  }
}