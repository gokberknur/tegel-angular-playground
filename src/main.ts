import { CUSTOM_ELEMENTS_SCHEMA, Component, signal } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';
import { defineCustomElements as tegel } from '@scania/tegel/loader';
import { MyProblemComponent } from './app/my-problem.component';

tegel(window);

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MyProblemComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
  <main>
  <div class="{{ mode() }} main"> 
    <div class="{{modeVariant() }}"> 
        <h1>Hello Tegel</h1>
        <app-my-problem> </app-my-problem>
    <section class="mode-switchers">
      <tds-toggle size="sm" [attr.checked]="isDarkMode" (tdsToggle)="hanldeUIModeChange($event)">
        <div slot="label">Dark Mode</div>
      </tds-toggle>

      <tds-toggle size="sm" [attr.checked]="isPrimaryModeVariant" (tdsToggle)="handleVariantModeChange($event)">
        <div slot="label">Primary Mode Variant</div>
      </tds-toggle>
</section>
</div>
</div>
</main>
  `,
  styles: `.main{ height: 100vh;} `,
})
export class App {
  mode = signal<'tds-mode-light' | 'tds-mode-dark'>('tds-mode-light');
  modeVariant = signal<
    'tds-mode-variant-primary' | 'tds-mode-variant-secondary'
  >('tds-mode-variant-secondary');

  isDarkMode = this.mode() === 'tds-mode-dark' ? true : false;
  isPrimaryModeVariant =
    this.modeVariant() === 'tds-mode-variant-primary' ? true : false;

  hanldeUIModeChange(event: any) {
    let isDarkModeOn = event.detail.checked;

    if (isDarkModeOn) {
      this.mode.set('tds-mode-dark');
      return;
    } else {
      this.mode.set('tds-mode-light');
      return;
    }
  }

  handleVariantModeChange(event: any) {
    let isPrimaryVariant = event.detail.checked;
    if (isPrimaryVariant) {
      this.modeVariant.set('tds-mode-variant-primary');
      return;
    } else {
      this.modeVariant.set('tds-mode-variant-secondary');
      return;
    }
  }
}
bootstrapApplication(App);
