import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NinecellComponent } from './ninecell.component';

describe('NinecellComponent', () => {
  let component: NinecellComponent;
  let fixture: ComponentFixture<NinecellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NinecellComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NinecellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
