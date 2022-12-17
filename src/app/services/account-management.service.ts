export class AccountManagementService {
  user: { userName: string } = { userName: ''}

  login() {
    this.user.userName = 'Joe';
  }

  logout() {
    this.user.userName = '';
  }
}