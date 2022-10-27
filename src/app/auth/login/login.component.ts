import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginUser } from 'src/app/interfaces/security/login-user';
import { AuthService } from 'src/app/servicios/auth.service';
import { TokenService } from 'src/app/servicios/token.service';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isLogged = false;
  isLoginFail = false;
  loginUsuario!:LoginUser;
  nombreUsuario!: string;
  password!:string;
  roles:string[]=[];
  errMsj!: string;

  constructor(
    private tokenService: TokenService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (this.tokenService.getToken()) {
      this.isLogged = true;
      this.isLoginFail = false;
      this.roles = this.tokenService.getAuthorities();
    }
  }

  onLogin(): void {
    this.loginUsuario = new LoginUser(this.nombreUsuario, this.password);
    this.authService.login(this.loginUsuario).subscribe({
      next: (data) => {
        this.isLogged = true;
        this.isLoginFail = false;

        this.tokenService.setToken(data.token);
        this.tokenService.setUserName(data.nombreUsuario);
        this.tokenService.setAuthorities(data.authorities);
        this.roles = data.authorities;
        this.router.navigate(['/main']);
      },
      error: (err) => {
        this.isLogged = false;
        this.isLoginFail = true;
        this.errMsj = err.error.message;
      }
    });
  }
  
 

}