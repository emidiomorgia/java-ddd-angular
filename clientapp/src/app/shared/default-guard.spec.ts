/* tslint:disable:no-unused-variable */
import { TestBed } from '@angular/core/testing';


import { DefaultGuard } from './default-guard';
import { Router } from '@angular/router';

describe('DefaultGuard', () => {

  let guard: DefaultGuard;
  let routerSpy: jasmine.SpyObj<Router>;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('Router', ['navigate']);

    TestBed.configureTestingModule({
      // Provide both the service-to-test and its (spy) dependency
      providers: [
        DefaultGuard,
        { provide: Router, useValue: spy }
      ]
    });
    // Inject both the service-to-test and its (spy) dependency
    guard = TestBed.inject(DefaultGuard);
    routerSpy = TestBed.inject(Router) as jasmine.SpyObj<Router>;

  });

  describe('canActivate',()=>{
    it('should return true when sessionStorage.getItem of auth-token is not null', () => {
      spyOn(sessionStorage,'getItem').and.returnValue('auth-key');
      let res = guard.canActivate(null,null);
      expect(res).toBeTruthy();
    });

    it('should call navigate with "/login" when sessionStorage.getItem of auth-token is null', () => {
      spyOn(sessionStorage,'getItem').and.returnValue(null);

      let res = guard.canActivate(null,null);
      expect(routerSpy.navigate).toHaveBeenCalledWith(['/login']);
    });
  });

});
