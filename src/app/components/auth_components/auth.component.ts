import { Angular2TokenService } from 'angular2-token';

export class AuthComponent {
  public error : Boolean;
  public errorMessage : String;
  public tokenService : Angular2TokenService;

  constructor(_tokenService: Angular2TokenService) {
    this.error = false;
    this.errorMessage = "";
    this.tokenService = _tokenService;
  }

  resetError() {
    this.error = false;
  }

  handleError(err) {
    this.error = true;
    this.errorMessage = JSON.parse(err._body)["errors"];
    console.log(err);
  }
}
