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

  /* 查看按钮事件 */
  checkData() {
    try {
      const that: this = this;
      that.router.navigate(['/<%= dasherize(name) %>']);
    } catch (error) {
      alert(error);
    }
  }
  /* 搜索按钮事件 */
  searchData() {
    try {
      let that: this = this;
      alert('搜索对账单');
    } catch (error) {
      alert(error);
    }
  }
  /* 删除按钮事件 */
  deleteData() {
    try {
      let that: this = this;
      alert('提示是否删除？');
    } catch (error) {
      alert(error);
    }
  }
  /* 页面跳转事件 */
  turnToPage(data: any) {
    try {
      alert(data.pageNum);
    } catch (error) {
      alert(error);
    }
  }
}
