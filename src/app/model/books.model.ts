export class Books {
  id: number;
  name: string;
  author: string;
  state: string;
  constructor() {
    (this.id = 0), (this.name = ''), (this.author = '');
    this.state = '';
  }
}
