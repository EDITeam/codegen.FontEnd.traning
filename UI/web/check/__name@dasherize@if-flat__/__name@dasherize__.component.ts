import { Component, OnInit<% if (!!viewEncapsulation) { %>, ViewEncapsulation <% }%> <% if (changeDetection !== 'Default') { %>, ChangeDetectionStrategy <% }%> } from '@angular/core';

@Component({
  selector: '<%= selector %>',<% if (inlineTemplate) { %>
    template: `
    <p>
      <%= dasherize(name) %> works!
    </p>
  `, <% } else { %>
  templateUrl: './<%= dasherize(name) %>.component.html', <% } if (inlineStyle) { %>
    styles: [] <% } else { %>
      styleUrls: ['./<%= dasherize(name) %>.component.<%= styleext %>'] <% } %> <% if (!!viewEncapsulation) { %>,
        encapsulation: ViewEncapsulation.<%= viewEncapsulation %> <% } if (changeDetection !== 'Default') { %>,
          changeDetection: ChangeDetectionStrategy.<%= changeDetection %> <% } %>
})
export class <%= classify(name) %> Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  /** 保存按钮事件 */
  editData() {
    try {
      let that: this = this;
      that.router.navigate(['/<%= dasherize(name) %>']);
    } catch (error) {
      alert(error);
    }
  }
  /** 取消按钮事件 */
  closePage() {
    try {
      let that: this = this;
      alert('取消成功');
    } catch (error) {
      alert(error);
    }
  }
}
