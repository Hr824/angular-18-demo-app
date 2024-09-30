import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutputFunctionComponent } from './output-function.component';

describe('OutputFunctionComponent', () => {
  let component: OutputFunctionComponent;
  let fixture: ComponentFixture<OutputFunctionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OutputFunctionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OutputFunctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
