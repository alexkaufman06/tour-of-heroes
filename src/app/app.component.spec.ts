import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let app: AppComponent;
  let compiled: Element;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent,
        HeroesComponent
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    app = fixture.debugElement.componentInstance;
    compiled = fixture.debugElement.nativeElement;
    fixture.detectChanges();
  }));

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Tour of Heroes'`, () => {
    expect(app.title).toEqual('Tour of Heroes');
  });

  it('should render the title in a h1 tag', () => {
    expect(compiled.querySelector('h1').textContent).toEqual('Tour of Heroes');
  });

  it('should render the the app-heroes tag', () => {
    expect(compiled.querySelector('app-heroes')).toBeTruthy();
  });
});
