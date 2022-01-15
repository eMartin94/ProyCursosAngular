import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CursoActualizarComponent } from './curso-actualizar.component';

describe('CursoActualizarComponent', () => {
  let component: CursoActualizarComponent;
  let fixture: ComponentFixture<CursoActualizarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CursoActualizarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CursoActualizarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
