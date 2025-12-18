import { Component, Input, Output, EventEmitter, ViewChild, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Editor } from '@tiptap/core';
import StarterKit from '@tiptap/starter-kit';
import * as i0 from "@angular/core";
const _c0 = ["editorElement"];
export class TiptapEditorComponent {
    constructor() {
        this.placeholder = 'Write something amazing...';
        this.contentChange = new EventEmitter();
        this.editor = null;
        this._value = '';
        // ControlValueAccessor methods
        this.onChange = () => { };
        this.onTouched = () => { };
    }
    ngOnInit() {
        this.initializeEditor();
    }
    initializeEditor() {
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
    writeValue(value) {
        this._value = value || '';
        if (this.editor) {
            this.editor.commands.setContent(this._value);
        }
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    setDisabledState(isDisabled) {
        if (this.editor) {
            this.editor.setEditable(!isDisabled);
        }
    }
    ngOnDestroy() {
        if (this.editor) {
            this.editor.destroy();
        }
    }
    static { this.ɵfac = function TiptapEditorComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || TiptapEditorComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: TiptapEditorComponent, selectors: [["app-tiptap-editor"]], viewQuery: function TiptapEditorComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 7);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.editorElement = _t.first);
        } }, inputs: { placeholder: "placeholder" }, outputs: { contentChange: "contentChange" }, features: [i0.ɵɵProvidersFeature([
                {
                    provide: NG_VALUE_ACCESSOR,
                    useExisting: forwardRef(() => TiptapEditorComponent),
                    multi: true
                }
            ])], decls: 3, vars: 0, consts: [["editorElement", ""], [1, "tiptap-editor"], [1, "editor-content"]], template: function TiptapEditorComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵdomElementStart(0, "div", 1);
            i0.ɵɵdomElement(1, "div", 2, 0);
            i0.ɵɵdomElementEnd();
        } }, dependencies: [CommonModule, FormsModule, ReactiveFormsModule], styles: [".tiptap-editor[_ngcontent-%COMP%] {\n      border: 1px solid #ddd;\n      border-radius: 4px;\n      min-height: 200px;\n      padding: 10px;\n    }\n    \n    .editor-content[_ngcontent-%COMP%] {\n      min-height: 150px;\n    }\n    \n    .ProseMirror[_ngcontent-%COMP%] {\n      outline: none;\n      min-height: 150px;\n    }\n    \n    .ProseMirror[_ngcontent-%COMP%]:focus {\n      outline: 2px solid #1976d2;\n    }"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TiptapEditorComponent, [{
        type: Component,
        args: [{ selector: 'app-tiptap-editor', template: `
    <div class="tiptap-editor">
      <div #editorElement class="editor-content"></div>
    </div>
  `, providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => TiptapEditorComponent),
                        multi: true
                    }
                ], standalone: true, imports: [CommonModule, FormsModule, ReactiveFormsModule], styles: ["\n    .tiptap-editor {\n      border: 1px solid #ddd;\n      border-radius: 4px;\n      min-height: 200px;\n      padding: 10px;\n    }\n    \n    .editor-content {\n      min-height: 150px;\n    }\n    \n    .ProseMirror {\n      outline: none;\n      min-height: 150px;\n    }\n    \n    .ProseMirror:focus {\n      outline: 2px solid #1976d2;\n    }\n    "] }]
    }], null, { editorElement: [{
            type: ViewChild,
            args: ['editorElement', { static: true }]
        }], placeholder: [{
            type: Input
        }], contentChange: [{
            type: Output
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(TiptapEditorComponent, { className: "TiptapEditorComponent", filePath: "src/app/components/tiptap-editor/tiptap-editor.component.ts", lineNumber: 48 }); })();
//# sourceMappingURL=tiptap-editor.component.js.map