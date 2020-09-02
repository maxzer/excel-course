import {ExcelComponent} from '@/core/ExcelComponent';

export class Header extends ExcelComponent {
    static className = 'excel__header';

    toHTML() {
        return `
        <input type="text" value="Новая таблица" class="excel__header-input"/>
          <div class="excel__header-wrapper">
            <div class="excel__header-button">
              <li class="material-icons">delete</li>
            </div>
            <div class="excel__header-button">
              <li class="material-icons">exit_to_app</li>
            </div>
          </div>
        `;
    }
}