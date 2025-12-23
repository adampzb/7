import { Component, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from "rxjs/operators";
import * as i0 from "@angular/core";
import * as i1 from "@discussit/core/services/post/post.service";
import * as i2 from "@discussit/core/services/user/user.service";
import * as i3 from "@angular/router";
import * as i4 from "@angular/common";
import * as i5 from "@angular/forms";
import * as i6 from "@angular/material/button";
import * as i7 from "@angular/material/card";
import * as i8 from "@angular/material/form-field";
import * as i9 from "@angular/material/input";
import * as i10 from "@angular/material/progress-spinner";
function CreatePostComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 3);
    i0.ɵɵelement(2, "mat-spinner", 4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("diameter", 30);
} }
function CreatePostComponent_ng_template_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 17);
    i0.ɵɵelement(2, "img", 18);
    i0.ɵɵelementStart(3, "span", 19);
    i0.ɵɵtext(4, "Posting under ");
    i0.ɵɵelementStart(5, "b");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(7, " as ");
    i0.ɵɵelementStart(8, "b");
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate1("g/", ctx_r1.group == null ? null : ctx_r1.group.name);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("u/", ctx_r1.user == null ? null : ctx_r1.user.username);
} }
function CreatePostComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-card", 5);
    i0.ɵɵtemplate(1, CreatePostComponent_ng_template_1_ng_container_1_Template, 10, 2, "ng-container", 6);
    i0.ɵɵelementStart(2, "form", 7)(3, "mat-form-field", 8)(4, "mat-label");
    i0.ɵɵtext(5, "Title");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(6, "input", 9, 1);
    i0.ɵɵelementStart(8, "mat-hint", 10);
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd()();
    i0.ɵɵelement(10, "div", 11);
    i0.ɵɵelementStart(11, "div", 12);
    i0.ɵɵelement(12, "app-tiptap-editor", 13);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "div", 14)(14, "button", 15);
    i0.ɵɵlistener("click", function CreatePostComponent_ng_template_1_Template_button_click_14_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.submit()); });
    i0.ɵɵtext(15, "Save draft");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "button", 16);
    i0.ɵɵlistener("click", function CreatePostComponent_ng_template_1_Template_button_click_16_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.submit()); });
    i0.ɵɵtext(17, "Post");
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const title_r3 = i0.ɵɵreference(7);
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.group);
    i0.ɵɵadvance();
    i0.ɵɵproperty("formGroup", ctx_r1.postForm);
    i0.ɵɵadvance(7);
    i0.ɵɵtextInterpolate1("", title_r3.value.length, " / 200");
} }
export class CreatePostComponent {
    constructor(postService, userService, router) {
        this.postService = postService;
        this.userService = userService;
        this.router = router;
        this.isLoading = true;
        this.edit = false;
    }
    ngOnInit() {
        this.initializeForm();
        this.getAuthUser();
    }
    initializeForm() {
        this.postForm = new FormGroup({
            title: new FormControl('', {
                validators: [Validators.required]
            }),
            content: new FormControl(this.content, {
                validators: [Validators.required]
            })
        });
        this.postForm.valueChanges
            .pipe(debounceTime(3000), distinctUntilChanged())
            .subscribe((response) => {
            console.log(response);
        });
        this.isLoading = false;
    }
    getAuthUser() {
        this.userService.userInitialized.subscribe((initialized) => {
            if (initialized) {
                this.userService.user.subscribe((user) => {
                    this.user = user;
                });
            }
        });
    }
    submit() {
        const data = {
            title: this.postForm.controls.title.value,
            content: this.postForm.controls.content.value,
            author: this.user.id,
            group: this.group ? this.group.id : null
        };
        this.postService.createPost(data).subscribe((response) => {
            this.router.navigate(['', response.uuid]);
        }, (err) => {
            console.log(err);
        });
    }
    static { this.ɵfac = function CreatePostComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || CreatePostComponent)(i0.ɵɵdirectiveInject(i1.PostService), i0.ɵɵdirectiveInject(i2.UserService), i0.ɵɵdirectiveInject(i3.Router)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CreatePostComponent, selectors: [["app-create-post"]], inputs: { group: "group" }, standalone: false, decls: 3, vars: 2, consts: [["showContent", ""], ["title", ""], [4, "ngIf", "ngIfElse"], ["fxLayout", "row", "fxLayoutAlign", "center center", "fxLayoutGap", "10px", 1, "post-create"], ["color", "warn", 3, "diameter"], [1, "post-create"], [4, "ngIf"], ["fxLayout", "column", "autocomplete", "off", 1, "blog-form", 3, "formGroup"], ["appearance", "outline", 1, "width-100"], ["matInput", "", "maxlength", "200", "formControlName", "title", "placeholder", "Title"], ["align", "end"], [1, ""], [1, "editor-container", "width-100"], ["formControlName", "content", "placeholder", "Write your post content here..."], ["fxLayout", "row", "fxLayoutAlign", "end center", "fxLayoutGap", "24px"], ["mat-raised-button", "", "disabled", "", 3, "click"], ["mat-raised-button", "", "color", "warn", 3, "click"], ["fxLayoutAlign", "start center", "fxLayoutGap", "16px", 1, "margin-bottom-2"], ["src", "https://cdn-icons-png.flaticon.com/512/2170/2170765.png", "alt", "Community", 1, "community-icon"], [1, "create-post-subtext"]], template: function CreatePostComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, CreatePostComponent_ng_container_0_Template, 3, 1, "ng-container", 2)(1, CreatePostComponent_ng_template_1_Template, 18, 3, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor);
        } if (rf & 2) {
            const showContent_r4 = i0.ɵɵreference(2);
            i0.ɵɵproperty("ngIf", ctx.isLoading)("ngIfElse", showContent_r4);
        } }, dependencies: [i4.NgIf, i5.ɵNgNoValidate, i5.DefaultValueAccessor, i5.NgControlStatus, i5.NgControlStatusGroup, i5.MaxLengthValidator, i5.FormGroupDirective, i5.FormControlName, i6.MatButton, i7.MatCard, i8.MatFormField, i8.MatLabel, i8.MatHint, i9.MatInput, i10.MatProgressSpinner], styles: [".post-title[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 20px;\n  width: 100%;\n\n  ::placeholder {\n    font-size: 14px;\n    font-weight: 400;\n  }\n}\n\n.blog-form[_ngcontent-%COMP%] {\n  margin-bottom: 32px;\n}\n\n.post-create[_ngcontent-%COMP%] {\n  margin: 16px 0;\n  box-shadow: none;\n  border: 1px solid #dedede;\n  border-radius: 8px;\n  display: flex;\n  padding: 20px;\n  flex-direction: column;\n}\n\n.create-post-subtext[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #707070;\n\n  b {\n    font-weight: 500;\n    color: #232323;\n  }\n}\n\n.community-icon[_ngcontent-%COMP%] {\n  height: 40px;\n  width: 40px;\n  border: 1px solid #e6e6e6;\n  border-radius: 50%;\n  padding: 2px;\n  object-fit: cover;\n}\n\n.editor-container[_ngcontent-%COMP%] {\n  margin: 16px 0;\n  \n  ::ng-deep {\n    .ck-editor__editable {\n      min-height: 200px;\n      font-family: 'Roboto', sans-serif;\n    }\n    \n    .ck-content {\n      font-family: 'Roboto', sans-serif;\n    }\n  }\n}"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CreatePostComponent, [{
        type: Component,
        args: [{ selector: 'app-create-post', standalone: false, template: "<ng-container *ngIf=\"isLoading; else showContent\">\n  <div class=\"post-create\" fxLayout=\"row\" fxLayoutAlign=\"center center\" fxLayoutGap=\"10px\">\n    <mat-spinner color=\"warn\" [diameter]=\"30\"></mat-spinner>\n  </div>\n</ng-container>\n\n<ng-template #showContent>\n  <mat-card class=\"post-create\">\n    <ng-container *ngIf=\"group\">\n      <div fxLayoutAlign=\"start center\" fxLayoutGap=\"16px\" class=\"margin-bottom-2\">\n        <img class=\"community-icon\" src=\"https://cdn-icons-png.flaticon.com/512/2170/2170765.png\" alt=\"Community\">\n        <span class=\"create-post-subtext\">Posting under <b>g/{{ group?.name }}</b> as <b>u/{{ user?.username }}</b></span>\n      </div>\n    </ng-container>\n\n\n    <form [formGroup]=\"postForm\" class=\"blog-form\" fxLayout=\"column\" autocomplete=\"off\">\n      <mat-form-field appearance=\"outline\" class=\"width-100\">\n        <mat-label>Title</mat-label>\n        <input matInput #title maxlength=\"200\" formControlName=\"title\" placeholder=\"Title\">\n        <mat-hint align=\"end\">{{ title.value.length}} / 200</mat-hint>\n      </mat-form-field>\n\n      <div class=\"\"></div>\n\n      <div class=\"editor-container width-100\">\n        <app-tiptap-editor\n          formControlName=\"content\"\n          placeholder=\"Write your post content here...\">\n        </app-tiptap-editor>\n      </div>\n\n      <!-- <input type=\"file\"  formControlName=\"cover\" (change)=\"onFileSelected($event.target.files)\" #fileUpload> -->\n\n      <div fxLayout=\"row\" fxLayoutAlign=\"end center\" fxLayoutGap=\"24px\">\n        <button mat-raised-button (click)=\"submit()\" disabled>Save draft</button>\n        <button mat-raised-button color=\"warn\" (click)=\"submit()\">Post</button>\n      </div>\n    </form>\n  </mat-card>\n</ng-template>\n", styles: [".post-title {\n  font-weight: 500;\n  font-size: 20px;\n  width: 100%;\n\n  ::placeholder {\n    font-size: 14px;\n    font-weight: 400;\n  }\n}\n\n.blog-form {\n  margin-bottom: 32px;\n}\n\n.post-create {\n  margin: 16px 0;\n  box-shadow: none;\n  border: 1px solid #dedede;\n  border-radius: 8px;\n  display: flex;\n  padding: 20px;\n  flex-direction: column;\n}\n\n.create-post-subtext {\n  font-size: 14px;\n  color: #707070;\n\n  b {\n    font-weight: 500;\n    color: #232323;\n  }\n}\n\n.community-icon {\n  height: 40px;\n  width: 40px;\n  border: 1px solid #e6e6e6;\n  border-radius: 50%;\n  padding: 2px;\n  object-fit: cover;\n}\n\n.editor-container {\n  margin: 16px 0;\n  \n  ::ng-deep {\n    .ck-editor__editable {\n      min-height: 200px;\n      font-family: 'Roboto', sans-serif;\n    }\n    \n    .ck-content {\n      font-family: 'Roboto', sans-serif;\n    }\n  }\n}\n"] }]
    }], () => [{ type: i1.PostService }, { type: i2.UserService }, { type: i3.Router }], { group: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(CreatePostComponent, { className: "CreatePostComponent", filePath: "src/app/post/create-post/create-post.component.ts", lineNumber: 23 }); })();
//# sourceMappingURL=create-post.component.js.map