import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriaActualizarComponent } from './categoria-actualizar.component';

describe('CategoriaActualizarComponent', () => {
  let component: CategoriaActualizarComponent;
  let fixture: ComponentFixture<CategoriaActualizarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoriaActualizarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriaActualizarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
