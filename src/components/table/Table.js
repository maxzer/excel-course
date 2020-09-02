import {ExcelComponent} from '@/core/ExcelComponent';

export class Table extends ExcelComponent {
    static className = 'excel__table';

    toHTML() {
        return `
        <div class="excel__table-row">
        <div class="excel__table-info"></div>
        <div class="excel__table-data">
          <div class="excel__table-column">
            A
          </div>
          <div class="excel__table-column">
            B
          </div>
          <div class="excel__table-column">
            C
          </div>
        </div>
      </div>

      <div class="excel__table-row">
        <div class="excel__table-info">1</div>
        <div class="excel__table-data">
          <div class="excel__table-cell selected" contenteditable>1</div>
          <div class="excel__table-cell">2</div>
          <div class="excel__table-cell">3</div>
        </div>
      </div>
        `;
    }
}