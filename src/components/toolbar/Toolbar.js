import {ExcelComponent} from '@/core/ExcelComponent';

export class Toolbar extends ExcelComponent {
    static className = 'excel__toolbar';

    toHTML() {
        return `
        <div class="excel__toolbar-button">
        <li class="material-icons">format_align_left</li>
      </div>
      <div class="excel__toolbar-button">
        <li class="material-icons">format_align_center</li>
      </div>
      <div class="excel__toolbar-button">
        <li class="material-icons">format_align_right</li>
      </div>
      <div class="excel__toolbar-button">
        <li class="material-icons">format_bold</li>
      </div>
      <div class="excel__toolbar-button">
        <li class="material-icons">format_italic</li>
      </div>
      <div class="excel__toolbar-button">
        <li class="material-icons">format_underlined</li>
      </div>
        `;
    }
}