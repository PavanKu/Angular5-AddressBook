import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have title', () => {
    let de:DebugElement = fixture.debugElement.query(By.css('h2'));
    let el = de.nativeElement;
    
    expect(el.textContent).toContain(component.title);
  });

  it('should display a differnet test title', () => {
    const de:DebugElement = fixture.debugElement.query(By.css('h2'));
    const el = de.nativeElement;
    
    const testTitle = 'Test Address Book'
    component.title = testTitle;
    fixture.detectChanges()
    expect(el.textContent).toContain(testTitle);
  });

  it('should display an icon', () => {
    const de:DebugElement = fixture.debugElement.query(By.css('h2>i'));
    const el = de.nativeElement;

    expect(el).toBeTruthy();
    expect(el.className).toContain('icon');
  });
});
