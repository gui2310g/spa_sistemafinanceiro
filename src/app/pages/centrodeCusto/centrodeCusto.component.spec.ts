import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CentrodeCustoComponent } from './centrodeCusto.component';

describe('CentrodeCustoComponent', () => {
  let component: CentrodeCustoComponent;
  let fixture: ComponentFixture<CentrodeCustoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CentrodeCustoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CentrodeCustoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
